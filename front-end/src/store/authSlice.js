import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../utils/api";

const initialState = {
  user: (() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  })(),
  token: localStorage.getItem("token") || null,
  status: "idle",
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await api.post("/user/login", { email, password });
      // expects { success, message, user, token }
      if (!res.data?.success) {
        return rejectWithValue(res.data?.message || "Login failed");
      }
      return { user: res.data.user, token: res.data.token, message: res.data.message };
    } catch (err) {
      const message = err?.response?.data?.message || err.message || "Login failed";
      return rejectWithValue(message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    setCredentials(state, action) {
      const { user, token } = action.payload || {};
      state.user = user || null;
      state.token = token || null;
      localStorage.setItem("user", JSON.stringify(state.user));
      if (state.token) localStorage.setItem("token", state.token);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;

