const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
const CART_PRODUCT = "https://japdevdep.github.io/ecommerce-api/cart/654.json"

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});



 document.addEventListener("onload", prueba()) 
var data = sessionStorage.getItem('user')

 // Verificacion de inicio de sesion
function prueba(){
    var miStorage = window.sessionStorage;
  var email = miStorage.getItem('email');
  var password = miStorage.getItem('password');
  

  if( (email == null) || (password == null)) {
    alert('por favor inicie sesion');   
    window.location.href="login.html"    
  } 

// Log out

var logout = document.getElementById('logOut')
logout.addEventListener('click',cerrarSesion)

function cerrarSesion(){
window.sessionStorage.removeItem('email')
window.sessionStorage.removeItem('password')
window.location.href="login.html"
  alert('Acción exitosa')
}
  }

    // Mostrar usuario en barra superior
  function mostrarUsuario(){
    var usuarioActivo = sessionStorage.getItem('email');
    document.getElementById('dropdownMenuButton').innerHTML = usuarioActivo
  }

  document.addEventListener('onload', mostrarUsuario())

  