import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;
    if (title && description && category && isPublished && imageFile) {
      // Handle image upload to ImageKit
      const fileBuffer = fs.readFileSync(imageFile.path);
      const imageUploadResponse = await imagekit.upload({
        file: fileBuffer,
        fileName: imageFile.originalname,
        folder: "/blogs",
      });

      //  Optimize and transform image URL
      const optimizedImageUrl = imagekit.url({
        path: imageUploadResponse.filePath,
        src: imageUploadResponse.url,
        transformation: [
          {
            // height: "400",
            width: "1280", // Width resizing
            quality: "auto", // less file size , better image quality
            format: "webp", // Convert to modern format
          },
        ],
      });

      await Blog.create({
        title,
        subTitle,
        description,
        category,
        image: optimizedImageUrl,
        isPublished,
      });

      return res.status(200).json({
        message: "Blog added successfully",
        success: true,
      });
    } else {
      return res.status(401).json({ message: error.message, success: false });
    }
  } catch (error) {
    return handleError(res, error);
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Get all blogs successfully",
      success: true,
      blogs: blogs,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Get a specific blog successfully",
      success: true,
      blog: blog,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteBLogById = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    // Delete all comments associated with the blog
    await Comment.deleteMany({ blogId: req.params.id });
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Blog deleted successfully",
      success: true,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const togglePublishBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
        success: false,
      });
    }
    blog.isPublished = !blog.isPublished;
    await blog.save();
    return res
      .status(200)
      .json({ message: "Blog publish status toggled", success: true });
  } catch (error) {
    return handleError(res, error);
  }
};

export const addComment = async (req, res) => {
  try {
    const { blogId, author, content } = req.body;
    if (blogId && author && content) {
      await Comment.create({ blogId, author, content });
      return res
        .status(200)
        .json({ message: "Comment added for review", success: true });
    } else {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }
  } catch (error) {
    return handleError(res, error);
  }
};

export const getBlogComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      blogId: req.params.id,
      isApproved: true,
    }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Get blog comments successfully",
      success: true,
      comments: comments,
    });
  } catch (error) {
    return handleError(res, error);
  }
};
