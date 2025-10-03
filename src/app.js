import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user_routes.js';

const app = express();

// ================================
// Configuración de la aplicación
// ================================

// Habilita CORS para permitir peticiones externas
app.use(cors());

// Habilita el uso de JSON en las peticiones
app.use(express.json());

// Rutas principales para la entidad Usuario
// Todas las rutas estarán bajo el prefijo /api/users
app.use("/api/users", userRoutes);

export default app;


