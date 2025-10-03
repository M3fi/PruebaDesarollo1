import { databaseService } from "../config/database.js";

// Modelo de Usuario
// Encapsula todas las operaciones SQL relacionadas con la entidad Usuario
export const UserModel = {
    
    // Obtener todos los usuarios
    getAllUsers: async () => {
        const [users] = await databaseService.query('SELECT * FROM users');
        return users;
    },

    // Obtener un usuario por ID
    getById: async (id) => {
        const [user] = await databaseService.query(
            'SELECT * FROM users WHERE id = ?', 
            [id]
        );
        return user;  
    },

    // Crear un nuevo usuario
    createUser: async (userData) => {
        const [result] = await databaseService.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [userData.name, userData.email]
        );
        return result.insertId; // Devuelve el ID generado
    },

    // Actualizar un usuario existente
    updateUser: async (id, newUserData) => {
        await databaseService.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [newUserData.name, newUserData.email, id]
        );
        return id;
    },

    // Eliminar un usuario por ID
    deleteUser: async (id) => {
        await databaseService.query(
            'DELETE FROM users WHERE id = ?', 
            [id]
        );
        return id;
    }
}
