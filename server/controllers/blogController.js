import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

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
        message: "Add new blog successfully",
        success: true,
      });
    } else {
      return res.status(401).json({ message: error.message, success: false });
    }
  } catch (error) {}
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true }).sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Get all blogs successfully",
      success: true,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
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
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
