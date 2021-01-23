let boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let correo = document.getElementById("correo").value;
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let telefono = document.getElementById("telefono").value;

    let formatoEmail = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || apellidos === "" || correo === "" || usuario === "" || contraseña === "" || telefono === "") {
        alert ("Ingrese todos los datos solicitados para registrarse.");
    }

    else if (telefono.toString().length >= 15 || nombre.trim().length >= 30 || apellidos.trim().length >= 80 || correo.trim().length >= 100 || usuario.trim().length >= 20) {
        alert ("Los datos ingresados no corresponden a la cantidad máxima de carácteres.");
    }

    else if (!formatoEmail.test(correo)) {
        alert ("Ingresar correo válido.");
    }
    
    else if (isNaN(telefono)) {
        alert ("Ingresar solo números en campo Teléfono.");
    }

    else {
        alert ("¡Bienvenido!\nSus datos de registros son: " + "\nNombre: " + nombre + " " + apellidos + "\nUsuario: " + usuario + "\nContraseña: "+ contraseña);
    }
})

    
