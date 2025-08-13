import express from "express";
import 'dotenv/config'; 
import cors from "cors";
import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

await connectDB();

// Middlewares
app.use(cors({
  origin: [
    "https://quickblog-2awobc9lb-bytewizard12s-projects.vercel.app",
    "https://quickblog-rhug3a9vr-bytewizard12s-projects.vercel.app",
    "http://localhost:5173", // For local development
    "http://localhost:3000"  // For local development
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("API is working");
});

app.use('/api/admin', adminRouter);
app.use('/api/blogs', blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
