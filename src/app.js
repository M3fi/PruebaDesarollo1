import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user_routes.js'
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);

export default app;

