export class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    
    static fromJson(json) {
        if (!json) {
            return new Error("los datos del usuario son requeridos");   
        };
        return new User(
            json.id, 
            json.name, 
            json.email
        );
    }
}   
