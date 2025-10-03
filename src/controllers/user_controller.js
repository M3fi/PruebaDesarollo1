import { User } from "../entities/user.js";
import { UserModel } from "../models/user_model.js";

// Controlador de Usuarios
// Define la lógica de negocio para manejar las peticiones HTTP relacionadas con la entidad Usuario
export class UserController {

    // Obtener todos los usuarios
    getAllUsers = async (request, response) => {
        try {
            const users = await UserModel.getAllUsers();
            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({ message: "Error al obtener los usuarios" });
        }
    }
    
    // Obtener un usuario por ID
    getUserById = async (request, response) => {
        try {
            const userId = request.params.id;
            const user = await UserModel.getById(userId);

            if (!user || user.length === 0) {
                return response.status(404).json({ message: "Usuario no encontrado" });
            }
            response.status(200).json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json({ message: "Usuario no encontrado" });
        }
    }

    // Crear un nuevo usuario
    createUser = async (request, response) => {
        try {
            // Validación de datos requeridos
            if (!request.body || !request.body.name || !request.body.email) {
                return response.status(400).json({ message: "Faltan datos requeridos" });
            }  

            const newUser = User.fromJson(request.body);
            const userId = await UserModel.createUser(newUser);

            response.status(201).json({ ...newUser, id: userId }); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ message: "Error al crear el usuario" });
        }
    }

    // Actualizar usuario existente
    updateUser = async (request, response) => {
        try {
            const userId = request.params.id;
            const updateUser = request.body;

            if (!updateUser.name || !updateUser.email) {
                return response.status(400).json({ message: "Faltan datos requeridos" });
            }   

            await UserModel.updateUser(userId, updateUser);
            response.status(200).json(updateUser);
        } catch (error) {
            response.status(500).json({ message: "Error al actualizar el usuario" });
        }     
    } 
     
    // Eliminar usuario por ID
    deleteUser = async (request, response) => {
        try {
            const userId = request.params.id;
            await UserModel.deleteUser(userId);
            response.status(200).json({ message: "Usuario eliminado correctamente" });
        } catch (error) {
            response.status(500).json({ message: "Error al eliminar el usuario" });
        }
    }
}
