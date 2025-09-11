import express from "express";
import {
  adminLogin,
  getAllAdminBlogs,
  getAllAdminComments,
} from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
adminRouter.get("/all-blogs", getAllAdminBlogs);
adminRouter.get("/all-comments", getAllAdminComments);

export default adminRouter;
