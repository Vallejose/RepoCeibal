//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
});

var vEmail = false
var vPassword = false

/* Verificacion del email */
function validarEmail() {
  var email = document.getElementById('email').value;

  if (email == "") {
    document.getElementById('errorEmail').innerHTML = 'Email Incorrecto';
  } else { vEmail = true; }
}

/* Verificacion contraseña */
function vaildarPassword() {
  var password = document.getElementById('password').value;

  if (password == "") {
    document.getElementById('errorPassword').innerHTML = "Contraseña incorrecta";
  } else { vPassword = true; }
}

/* Funcion del boton, para inicio de sesion */
function validacion() {

  var mail = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var miStorage = window.sessionStorage;

  if ((vEmail == true) && (vPassword == true)) {
    miStorage.setItem('email', mail);
    miStorage.setItem('password', password);
    window.location.href = "index.html";
  }
}

/* Funcion BOton de gogle */
function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile(); 7
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}
