var category = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.images.length; i++) {
        let imageSrc = array.images[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
        
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

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
`
    `
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
    
var puntuaciones = comentarios[score]
function mostrarPuntuacion(){
    for (let comentario of comentarios)
    alert(puntuaciones)
}
   document.addEventListener('onload', mostrarPuntuacion())