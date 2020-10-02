const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";

var showSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "block";
  }
  
  var hideSpinner = function(){
    document.getElementById("spinner-wrapper").style.display = "none";
  }
  
  var getJSONData = function(url){
      var result = {};
      
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
            
            return result;
      })
      .catch(function(error) {
          result.status = 'error';
          result.data = error;
          
          return result;
      });
  }



var catalogo = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";
let arreglo = array.images
    for (let i = 0; i < arreglo.length; i++) {
        let imageSrc = arreglo[i];

        htmlContentToAppend += `
        <div class="carousel-item active" data-interval="10000">
              <img src="` + imageSrc + `" class="d-block w-100" alt="1000">
            </div>
        
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }}

    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                catalogo = resultObj.data;
                //Muestro las categorías ordenadas
                showImagesGallery(catalogo);
            }
        });
    });

  /*  var boton = document.getElementById('mostrarImagenes')
boton.addEventListener("onclick", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            catalogo = resultObj.data;
            //Muestro las categorías ordenadas
            showImagesGallery(catalogo);
        }
    });
}); */
