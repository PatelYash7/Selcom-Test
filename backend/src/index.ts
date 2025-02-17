import express from "express";
import authRoutes from "./routes/authRoutes";
import gameRoutes from "./routes/gameRoutes";
import cors from "cors";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use('/api/game', gameRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
