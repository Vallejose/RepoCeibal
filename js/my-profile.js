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
            // imagenP.setAttribute("src", datosGuardados.imagen);
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

    miPerfil.nombre = nuevoNomre
    miPerfil.edad = nuevaEdad
    miPerfil.mail = nuevoMail
    miPerfil.telefono = nuevoTelefono


    var datosPerfil = JSON.stringify(miPerfil)
    window.localStorage.setItem('perfil', datosPerfil)
    console.log(miPerfil)

    perfilJson()
    $("#modificarDatos").modal("hide")

    // console.log(miPerfil)
}


/* window.addEventListener('load', function() {

    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.getElementById("imagperfil");
            var imgURL = URL.createObjectURL(this.files[0])
            window.localStorage.setItem('imgPerfil', imgURL)
            var cargarImg = window.localStorage.getItem('imgPerfil')
            img.setAttribute('src', cargarImg);

        }
    })


})*/

var apiURL = "https://api.imgbb.com/1/upload?key=CLAVEDELAAPI&expiration=172800&key=687974cc599187852a41e7ac1bceede4";
var prof = {};
prof.pfp = {};
prof.pfp.url = "";

if (document.getElementById('modalImg').files.length != 0) {
    showSpinner()
    var img = document.getElementById('modalImg')

    var formData = new FormData();
    formData.append('image', iImagen.files[0]);


    fetch(apiURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .catch(error => console.error('Error', error))
        .then(response => {
            console.log('success', response);
            prof.pfp.url = response.data.image.url;

            document.getElementById('imagperfil').style.display = 'block';
            document.getElementById('imagperfil').setAttribute('src', prof.pfp.url);
            document.getElementById('modalImg').value = null

            prof = JSON.stringify(prof);
            localStorage.setItem('prof', prof);
            hideSpinner();
            console.log('los coambios se guardaron correctamente.')

        });

} else {
    prof = JSON.stringify(prof);
    localStorage.setItem('prof', prof);
    console.log('los cambios se guardaron correctamente.', 'success', 5);
    console.log(document.getElementById('modalImg').files.length)
}
// var iURL = response.data.imageurl;