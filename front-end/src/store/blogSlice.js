import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../utils/api";

// GET /blog/user/blogs (authenticated)
export const fetchUserBlogs = createAsyncThunk(
  "blogs/fetchUserBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/blog/user/blogs");
      return res.data; // controller returns array of blogs
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Failed to load blogs";
      return rejectWithValue(message);
    }
  }
);

// GET /blog/all (public)
export const fetchAllBlogs = createAsyncThunk(
  "blogs/fetchAllBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/blog/all");
      return res.data.blogs || [];
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Failed to load blogs";
      return rejectWithValue(message);
    }
  }
);

// GET /blog/:id (public)
export const fetchSingleBlog = createAsyncThunk(
  "blogs/fetchSingleBlog",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/blog/${id}`);
      return res.data.singleblog;
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Failed to load blog";
      return rejectWithValue(message);
    }
  }
);

// POST /blog/create  (multipart/form-data)
export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post("/blog/create", formData);
      if (!res.data?.success) {
        return rejectWithValue(res.data?.message || "Failed to create blog");
      }
      return res.data.blog;
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Failed to create blog";
      return rejectWithValue(message);
    }
  }
);

// DELETE /blog/delete/:id
export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/blog/delete/${id}`);
      if (res.data?.success === false) {
        return rejectWithValue(res.data?.message || "Failed to delete blog");
      }
      return id;
    } catch (err) {
      const message =
        err?.response?.data?.message || err.message || "Failed to delete blog";
      return rejectWithValue(message);
    }
  }
);





const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    // user-specific blogs (dashboard)
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    // public blogs (listing)
    all: [],
    allStatus: "idle",
    // single blog (detail page)
    current: null,
    currentStatus: "idle",
    error: null,
    createStatus: "idle",
    deleteStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchUserBlogs
      .addCase(fetchUserBlogs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload || [];
      })
      .addCase(fetchUserBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to load blogs";
      })
      // fetchAllBlogs
      .addCase(fetchAllBlogs.pending, (state) => {
        state.allStatus = "loading";
        state.error = null;
      })
      .addCase(fetchAllBlogs.fulfilled, (state, action) => {
        state.allStatus = "succeeded";
        state.all = action.payload || [];
      })
      .addCase(fetchAllBlogs.rejected, (state, action) => {
        state.allStatus = "failed";
        state.error = action.payload || "Failed to load blogs";
      })
      // fetchSingleBlog
      .addCase(fetchSingleBlog.pending, (state) => {
        state.currentStatus = "loading";
        state.error = null;
      })
      .addCase(fetchSingleBlog.fulfilled, (state, action) => {
        state.currentStatus = "succeeded";
        state.current = action.payload || null;
      })
      .addCase(fetchSingleBlog.rejected, (state, action) => {
        state.currentStatus = "failed";
        state.error = action.payload || "Failed to load blog";
      })
      // createBlog
      .addCase(createBlog.pending, (state) => {
        state.createStatus = "loading";
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        if (action.payload) {
          state.items.unshift(action.payload);
          state.all.unshift(action.payload);
        }
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.payload || "Failed to create blog";
      })
      // deleteBlog
      .addCase(deleteBlog.pending, (state) => {
        state.deleteStatus = "loading";
        state.error = null;
      })

      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.deleteStatus = "succeeded";
        state.items = state.items.filter((b) => b._id !== action.payload);
        state.all = state.all.filter((b) => b._id !== action.payload);
      })
      .addCase(deleteBlog.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = action.payload || "Failed to delete blog";
      });
      
  },
});

export default blogSlice.reducer;

