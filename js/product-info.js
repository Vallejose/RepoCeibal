var catalogo = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.images.length; i++) {
        let imageSrc = array.images[i];

        htmlContentToAppend += `
        <div class="carousel-item active" data-interval="10000">
              <img src="` + imageSrc + `" class="d-block w-100" alt="1000">
            </div>
        
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
var boton = document.getElementById('mostrarImagenes')
boton.addEventListener("onclick", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            catalogo = resultObj.data;
            //Muestro las categorías ordenadas
            showImagesGallery(catalogo);
        }
    });
});



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let categoryNameHTML = document.getElementById("categoryName");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
            let productcategory = document.getElementById("productCategoria")

            categoryNameHTML.innerHTML = category.name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.cost + "" + category.currency;
            productcategory.innerHTML = category.category

        }
    });
});

var comentarios = [];
function showComentsArray(array) {

    let htmlcoments = "";
    for (let i = 0; i < array.length; i++) {
        let coments = array[i];

        htmlcoments += `
     
        
        <div class="col">
        <div class="row">
        <div class="list-group-item list-group-item-action">        
                <div class="col-3">
                <small class="text-muted">` + coments.score + ` </small>
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">`+ coments.user + `</h5>
                    </div>
                    <div>
                        <p>` + coments.description + `</p>
                        <p>` + coments.dateTime + `</p>
                    </div>
                </div>
                
        </div>
        </div>
        </div>
        `
        document.getElementById("coment").innerHTML = htmlcoments;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            //Muestro las categorías ordenadas
            showComentsArray(comentarios);
        }
    });
});

    /*
function puntuacionEstrellas(){
    var valorE = document.calificacion.estrella
    for(i = 0, i < valorE.length; i++; ){
        if (valorE[i].checked){
            alert(valorE.value)
        }
    }
}
var boton = document.getElementById('publicar')
boton.addEventListener('onclick', puntuacionEstrellas())
*/

  /*  var calificacion = document.querySelectorAll('#valorEstrella')
    function agregarComentarios(){
        var comentario = document.getElementById('cComentario')
        var usuario = window.sessionStorage.getItem('email')
        
        alert(calificacion.value) 
    }
    */
 /*   
var puntuaciones = comentarios[score]
function mostrarPuntuacion(){
    for (let comentario of comentarios)
    alert(puntuaciones)
}
   document.addEventListener('onload', mostrarPuntuacion())

*/

   // Productos relacionados
  

            document.addEventListener("DOMContentLoaded", function (e) {
                getJSONData(PRODUCTS_URL).then(function (resultObj) {
                    if (resultObj.status === "ok") {
                        category = resultObj.data;
            
                        let primeraImagen = document.getElementById("imagen1");
                        let primeraDescripcion = document.getElementById("descripcion1");
                        let segundaImagen = document.getElementById("imagen2");
                        let segundaDescripcion = document.getElementById("descripcion2");
                        
            
                        primeraImagen.innerHTML = `<img src="` + category[1].imgSrc + `" class="d-block w-100" alt="1000"></img>` ;
                        primeraDescripcion.innerHTML =  `<h2>` + category[1].name + `</h2>
                                                        <p>` + category[1].currency + ` ` + category[1].cost + `</p>`
                                                                                
                        segundaImagen.innerHTML = `<img src="` + category[3].imgSrc + `" class="d-block w-100" alt="1000"></img>` ;
                        segundaDescripcion.innerHTML =  `<h2>` + category[3].name + `</h2>
                                                            <p>` + category[3].currency + ` ` + category[3].cost + `</p>`
                        
                        
            
                    }
                });
            });
