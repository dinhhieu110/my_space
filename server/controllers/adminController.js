import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";
import { handleError } from "../helpers/errorHandler.js";
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET);
      return res
        .status(200)
        .json({ message: "Login successful", success: true, token });
    } else {
      return res
        .status(401)
        .json({ message: "Invalid credentials", success: false });
    }
  } catch (error) {
    return handleError(res, error);
  }
};

export const getAllAdminBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Get all blogs successfully",
      success: true,
      data: blogs,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getAllAdminComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("blogId").sort({
      createdAt: -1,
    });
    return res.status(200).json({
      message: "Get all comments successfully",
      success: true,
      data: comments,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find().sort({ createdAt: -1 }).limit(5);
    const totalBlogs = await Blog.countDocuments();
    const totalComments = await Comment.countDocuments();
    const totalDraftBlogs = await Blog.countDocuments({ isPublished: false });
    return res.status(200).json({
      message: "Get dashboard data successfully",
      success: true,
      data: {
        recentBlogs,
        totalBlogs,
        totalComments,
        draftBlogs,
      },
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const deleteCommentById = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Comment deleted successfully",
      success: true,
    });
  } catch (error) {
    return handleError(res, error);
  }
};

export const approveCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
        success: false,
      });
    }
    comment.isApproved = true;
    await comment.save();
    return res.status(200).json({
      message: "Comment approved successfully",
      success: true,
    });
  } catch (error) {
    return handleError(res, error);
  }
};
