import Blog from '../models/blog.model.js'
import { getDataUri } from '../utils/features.js'
import cloudinary from 'cloudinary'

export const allblogs =async(req,res)=>{
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1})
          return res.status(200).json({blogs,success:true,message:"all blogs"})
    } catch (error) {
        return res.status(500).json({message :'internal server error'})
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, category, description } = req.body;
        
        // Check if a file exists
        if (!req.file) {
            return res.status(400).json({ message: "Image is required", success: false });
        }

        // Convert file to Data URI
        const imageFile = getDataUri(req.file);

        //  Upload to Cloudinary and CAPTURE the result
        const myCloud = await cloudinary.v2.uploader.upload(imageFile.content, {
            folder: "blogs",
        });

        // the blog entry using Cloudinary's secure_url
        const blog = await Blog.create({
            title,
            category,
            description,
            image: {
                public_id: myCloud.public_id, 
                url: myCloud.secure_url,      
            },
            author: {
                id: req.user.id,
                name: req.user.name,
                image: req.user.image.url
            }
        });
       

        return res.status(201).json({
            message: 'Blog created successfully',
            success: true,
            blog
        });

    } catch (error) {
        return res.status(500).json({ message: error.message, success: false });
    }
}

export const deleteBlog = async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id)
        if(!blog){
            return res.status(404).json({message :'blog not found',success:false})
        }
        if(blog.author.id.toString() !== req.user.id.toString()){
            return res.status(403).json({message :'not authorized to delete this blog '})
        }

        // Delete image from Cloudinary
        await cloudinary.v2.uploader.destroy(blog.image.public_id);

        await blog.deleteOne()
        return res.status(200).json({message :'blog deleted successfully', success: true})
    } catch (error) {
        return res.status(500).json({message: error.message, success: false})
    }
}

export const singleblog = async(req,res)=>{
    try {
    const singleblog = await Blog.findById(req.params.id)

    res.status(200).json({message : 'blog found' ,success : true  ,singleblog})
} catch (error) {
    return res.status(500).json({message :'internal server error',success:false})
}
}

export const userblogs = async(req,res)=>{
    try {
        // Make sure you match the ID field name used in your JWT (req.user.id vs req.user._id)
        const blogs = await Blog.find({'author.id': req.user.id}).sort({createdAt : -1})
        res.status(200).json(blogs)
    } catch (error) {
         return res.status(500).json({message :'internal server error', success:false})
    }
}



