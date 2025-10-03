import e from "express";
import { User } from "../entities/user";    
import { UserModel } from "../models/user_model";

export class UserController {
    getAllUsers = async (request, response) => {
        try {
            const users = await UserModel.getAllUsers();
            response.status(200).json(users);
        } catch (error) {
            response.status(500).json({ error: error.message, message: "Error al obtener los usuarios" });
        }
    }
    createUser = async (request, response) => {
        try {
            if (!request.body.name || !request.body.email){
                return response.status(400).json({ message: "Faltan datos requeridos" });
            }  
            const newUser = User.fromJson(request.body);
            const createdUser = await UserModel.createUser(newUser);
            response.status(201).json(createdUser); 
        } catch (error) {
            response.status(500).json({ error: error.message, message: "Error al crear el usuario" });
        }
    }

    updateUser = async (request, response) => {
        try {
            const userId = request.params.id;
            const uptateUser = request.body;

            if (!updateUser.name || !updateUser.email) {
                return response.status(400).json({ message: "Faltan datos requeridos" });
            }   
            const result = await UserModel.updateUser(userId, updateUser);
            response.status(200).json(result);
        } catch (error) {
            response.status(500).json({ error: error.message, message: "Error al actualizar el usuario" });
        }     
    } 
     
    deleteUser = async (request, response) => {
        try {
            const userId = request.params.id;
            await UserModel.deleteUser(userId);
            response.status(200).json({ message: "Usuario eliminado correctamente" });
        } catch (error) {
            response.status(500).json({ error: error.message, message: "Error al eliminar el usuario" });
        }
    }
}