var vEmail = false
var vPassword = false





 
/* Verificacion del email */
function validarEmail(){
  var email = document.getElementById('email').value;
  
  if (email == ""){
      document.getElementById('errores').innerHTML = 'Email Incorrecto'; 
  } else {vEmail = true;}
}

  /* Verificacion contraseña */
function vaildarPassword(){
  var password = document.getElementById('password').value;
  

  if (password == ""){
     document.getElementById('errores').innerHTML = "Password incorrecto";
  } else {vPassword = true;}
}

/* Funcion del boton, para inicio de sesion */ 

function validacion(){    
  var email = document.getElementById('email').value;     
  if ((vEmail == true) && (vPassword == true))  {

    window.location.href="index2.html";
    localStorage.setItem('usuario', email);
    sessionStorage.setItem('usuario', email);}
  }
  
  /* Funcion BOton de gogle */
  function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();7
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