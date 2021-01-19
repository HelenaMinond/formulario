//Falta validar:
//-Formato de email
//-Que el telefono sea un numero, aunque el type:number no deja ingresar letras ni saltarse espacios.

let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre === null || apellidos === null || correo === null || usuario === null || contraseña === null || telefono === null) {
        alert ("Ingrese todos los datos solicitados para registrarse");
    }

    else if (telefono.toString().length <= 15 || nombre.trim().length <= 30 || apellidos.trim().length <= 80 || correo.trim().length <= 100 || usuario.trim().length <= 20) {
        alert ("¡Bienvenido!\nSus datos de registros son: " + "\nNombre: " + nombre + " " + apellidos + "\nUsuario: " + usuario + "\nContraseña: "+ contraseña);
    }
})

    
