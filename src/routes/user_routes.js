import express from 'express';
import { UserController } from '../controllers/user_controller.js';

const router = express.Router();
const controller = new UserController();    

// Rutas de la API para la entidad Usuario
// Cada ruta está asociada a un método del controlador

router.get("/", controller.getAllUsers);      // Obtener todos los usuarios
router.get("/id/:id", controller.getUserById) // Obtener usuario por ID
router.post("/", controller.createUser);      // Crear un nuevo usuario
router.put("/:id", controller.updateUser);    // Actualizar usuario existente
router.delete("/:id", controller.deleteUser); // Eliminar usuario por ID

export default router;
