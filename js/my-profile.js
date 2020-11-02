miPerfil = {
    "nombre": "",
    "edad": ".",
    "mail": "",
    "telefono": "",
    "imagen": ""
}

var nombrePerfil = document.getElementById('nombre')
var edadPerfil = document.getElementById('edad')
var emailPerfil = document.getElementById('email')
var telefonoPerfil = document.getElementById('telefono')

/* document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            // textoPerfil.innerHTML = miPerfil.edad


        };
    });
}) */


function perfilJson() {
    var guardado = localStorage.getItem('perfil')

    if (guardado == null) {
        var datosPerfil = JSON.stringify(miPerfil)
        window.localStorage.setItem('perfil', datosPerfil)
    } else {
        var guardado = localStorage.getItem('perfil')
        var datosGuardados = JSON.parse(guardado)

        imagenP = document.getElementById('imagperfil')
        nombrePerfil.innerHTML = datosGuardados.nombre
        edadPerfil.innerHTML = datosGuardados.edad
        emailPerfil.innerHTML = datosGuardados.mail
        telefonoPerfil.innerHTML = datosGuardados.telefono
        imagenP.setAttribute("src", datosGuardados.imagen);
    }


    //imagenP.setAttribute("src", miPerfil.imagen)
}




function modal() {
    $("#modificarDatos").modal("show")

}

/* function guardarDatos(){
    var cambioNombre = document.getElementById('modalNombre')
    console.log(cambioNombre)
   // window.localStorage.setItem('perfil', datosPerfil.nombre)


} */


document.addEventListener('onload', perfilJson())

function validarModal() {


    var nuevoNomre = document.getElementById('modalNombre').value;
    var nuevaEdad = document.getElementById('modalEdad').value;
    var nuevoMail = document.getElementById('modalEmail').value;
    var nuevoTelefono = document.getElementById('modalTel').value;
    var nuevoImagen = document.getElementById('modalImg').value;
    miPerfil.nombre = nuevoNomre
    miPerfil.edad = nuevaEdad
    miPerfil.mail = nuevoMail
    miPerfil.telefono = nuevoTelefono
    miPerfil.imagen = nuevoImagen

    var datosPerfil = JSON.stringify(miPerfil)
    window.localStorage.setItem('perfil', datosPerfil)
    console.log(miPerfil)

    perfilJson()
    $("#modificarDatos").modal("hide")

    // console.log(miPerfil)
}