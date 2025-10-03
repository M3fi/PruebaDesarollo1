// Configuración de conexión a MySQL con mysql2/promise
// Se cargan credenciales desde .env para mayor seguridad

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Conexión reutilizable para toda la aplicación
export const databaseService = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});
