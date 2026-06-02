const boton = document.getElementById("btn-saludo");
let saludoMostrado = false;

boton.addEventListener("click", function() {
    const seccionContacto = document.getElementById("contacto");

    if (!saludoMostrado) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "Gracias por visitar mi perfil. Espero que volvamos a vernos!";
        mensaje.style.color = "#27ae60";
        mensaje.style.fontWeight = "bold";
        seccionContacto.appendChild(mensaje);

        boton.textContent = "Saludo enviado";
        boton.disabled = true;
        boton.style.backgroundColor = "#7f8c8d";

        saludoMostrado = true;
    }
});
const seccionContacto = document.getElementById("contacto");
const botonNombre = document.getElementById("btn-nombre");
let nombreMostrado = false;

botonNombre.addEventListener("click", function() {
    if (!nombreMostrado) {
    const titulo = document.querySelector("h1");
    titulo.textContent = "Javier Adael";

        botonNombre.textContent = "Nombre Mostrado";
        botonNombre.disabled = true;
        botonNombre.style.backgroundColor = "#7f8c8d";

        nombreMostrado = true;
    }
});