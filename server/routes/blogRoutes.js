import express from "express";
import {
  addBlog,
  addComment,
  deleteBLogById,
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
blogRouter.post("/publish", auth, togglePublishBlogById);
blogRouter.get("/:id", getBlogById);
blogRouter.delete("/:id", auth, deleteBLogById);
blogRouter.post("/comment", addComment);

blogRouter.get("/:id/comments", getBlogComments);
blogRouter.post("/add-comment", addComment);

export default blogRouter;
