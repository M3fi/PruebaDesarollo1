import { databaseService } from "../config/database";

export const UserModel = {
    getAllUsers: async () => {
        const [users] = await databaseService.query('SELECT * FROM users');
        return users;
    },
    getById: async (id) => {
        const [user] = await databaseService.query('SELECT * FROM users WHERE id = ?', [id]);
        return user;  
    },
    createUser: async (userData) => {
        const [result] = await databaseService.query(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [userData.name, userData.email]
        );
        return { id: result.insertId, ...userData };
    },
    updateUser: async (id, newUserData) => {
        await databaseService.query(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [newUserData.name, newUserData.email, id]
        );
        return { id, ...newUserData };
    },
    deleteUser: async (id) => {
        await databaseService.query('DELETE FROM users WHERE id = ?', [id]);
        return { message: 'User deleted successfully' };
    }
} 