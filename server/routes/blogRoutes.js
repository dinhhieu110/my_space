import express from "express";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
} from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";
import auth from "../middlewares/auth.js";

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog);
blogRouter.post("/all", auth, getAllBlogs);
blogRouter.post("/:id", auth, getBlogById);

export default blogRouter;
