export class Contacto {
    nombre
    apellidos
    telefono
    email
    setNombre(nombre) {
        this.nombre = nombre
    }
    getNombre() {
        return this.nombre
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos
    }
    getApellidos() {
        return this.apellidos
    }

    setTelefono(telefono) {
        this.telefono = telefono
    }
    getTelefono() {
        return this.telefono
    }

    setEmail(email) {
        this.email = email
    }
    getEmail() {
        return this.email
    }
}