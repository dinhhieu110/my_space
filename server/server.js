import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/admin", adminRouter);
app.use("/api/blogs", blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
