import express from "express";
import {
  addBlog,
  addComment,
  deleteBLogById,
  generateContent,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublishBlogById,
} from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.patch("/:id/toggle-publish", auth, togglePublishBlogById);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", auth, deleteBLogById);
blogRouter.post("/comment", addComment);

blogRouter.get("/:id/comments", getBlogComments);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/generate", auth, generateContent);

export default blogRouter;
