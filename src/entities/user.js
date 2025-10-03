// Entidad Usuario
// Representa la estructura del objeto Usuario dentro del dominio de la aplicación
export class User {
    constructor(id, name, email) {
        this.id = id;       // Identificador único del usuario
        this.name = name;   // Nombre del usuario
        this.email = email; // Correo electrónico del usuario
    }
    
    // Método de utilidad para crear un objeto User a partir de un JSON
    static fromJson(json) {
        if (!json) {
            return new Error("Los datos del usuario son requeridos");   
        }
        return new User(
            json.id,
            json.name,
            json.email
        );
    }
}
