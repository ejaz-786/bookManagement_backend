import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bookRoutes from "./routes/book.route.js";
import { errorMiddleware } from "./middleware/errorMiddleware.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Import book routes
app.use("/api/", bookRoutes);

// error Middleware
app.use(errorMiddleware);

export default app;
