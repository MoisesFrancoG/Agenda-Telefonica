import { Queue } from "./Queue.mjs";
import { Contacto } from "./Contacto.mjs";

export class Agenda {
    constructor() {
        this.lista = new Queue()
    }

    agregarContacto(nombre, apellidos, telefono, email) {

        // Crear un nuevo objeto Contacto
        let nuevoContacto = new Contacto()
        nuevoContacto.setNombre(nombre)
        nuevoContacto.setApellidos(apellidos)
        nuevoContacto.setTelefono(telefono)
        nuevoContacto.setEmail(email)

        let contacto = nuevoContacto
        
        this.lista.enqueue(contacto)
    }

}
