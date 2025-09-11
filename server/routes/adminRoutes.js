import express from "express";
import {
  adminLogin,
  approveCommentById,
  deleteCommentById,
  getAllAdminBlogs,
  getAllAdminComments,
  getDashboard,
} from "../controllers/adminController.js";
import auth from "../middlewares/auth.js";

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);

adminRouter.get("/blogs", auth, getAllAdminBlogs);

adminRouter.get("/comments", auth, getAllAdminComments);
adminRouter.delete("/comments/:id", auth, deleteCommentById);
adminRouter.patch("/comments/:id/approve", auth, approveCommentById);

adminRouter.get("/dashboard", auth, getDashboard);
export default adminRouter;
