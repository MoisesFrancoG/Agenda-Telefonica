import { Agenda } from "../models/Agenda.mjs";

let miAgenda = new Agenda();

let agregar = document.getElementById('agregar')
agregar.addEventListener('click',()=> {

    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;

    if(nombre !=='' && apellidos !=='' && telefono !=='' && email !=='') {
        if (telefono.length != 10) {
            alert("Ingrese un número valido.")
        } else {
            miAgenda.agregarContacto(nombre,apellidos,telefono,email);
            limpiarInputs()
        }
    } else {
        alert("Campos vacios. Llene todos los campos")
    }
})

let mostarContactos = document.getElementById("mostarContactos")
mostarContactos.addEventListener("click", function() {
    const contactListDiv = document.getElementById('contactList');
    contactListDiv.innerHTML = ''; 

    if (miAgenda.lista.isEmpty()) {
        contactListDiv.innerHTML = '<p>No hay contactos en la agenda.</p>';
    } else {
        
        let currentContact = miAgenda.lista.front; 
        while (currentContact) {
            let container = document.createElement('div')
            container.classList.add("contacto")

            let nombre = document.createElement('p');
            nombre.textContent = "Nombre: " + currentContact.data.nombre

            let apellidos = document.createElement('p');
            apellidos.textContent = "Apellidos: " + currentContact.data.apellidos

            let telefono = document.createElement('p');
            telefono.textContent = "Numero telefonico: " + currentContact.data.telefono

            let email = document.createElement('p');
            email.textContent = "Email: " + currentContact.data.email

            container.appendChild(nombre);
            container.appendChild(apellidos);
            container.appendChild(telefono);
            container.appendChild(email);

            contactListDiv.appendChild(container);
            
            currentContact = currentContact.next;
        }
    }

})

function limpiarInputs() {
    document.getElementById('nombre').value = ' '
    document.getElementById('apellidos').value = ' '
    document.getElementById('telefono').value = ' '
    document.getElementById('email').value = ' '

}