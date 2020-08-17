//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

/* const option = new gapi.auth2.SigninOptionsBuilder();
option.setScope('email https://www.googleapis.com/auth/drive');

googleUser = auth2.currentUser.get();
googleUser.grant(options).then(
    function(success){
      console.log(JSON.stringify({message: "success", value: success}));
    },
    function(fail){
      alert(JSON.stringify({message: "fail", value: fail}));
    }); */

   /* document.addEventListener('button', (e) => {
        

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        console.log(email, password)
    }) */
      
    function validacion(){
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
            
      if (email == "" )  {
        document.getElementById("errores").innerHTML = "Campos invalidos";
      }  else if (password == "") {
        document.getElementById("errores").innerHTML = "Campos invalidos";
      } 
       else { window.location.href="index.html" ;
      
/* window.location.replace("URL") */ 
      }

    }

