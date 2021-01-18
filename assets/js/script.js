var obtenerDatos = function () {

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var telefono = document.getElementById("telefono").value;

    alert ("¡Bienvenido!\nSus datos de registros son: " + "\nNombre: " + nombre + " " + apellidos + "\nUsuario: " + usuario + "\nContraseña: "+ contraseña);

}