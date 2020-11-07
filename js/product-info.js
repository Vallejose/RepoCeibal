// Funcion carga del Imagenes y los datos del producto seleccionado
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let carruselImg = document.getElementById("productImagesGallery");

            //Carusel de imagenes 
            carruselImg.innerHTML = ` <div class="carousel-item active">
            <img class="d-block w-100" src="` + category.images[0] + `" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="` + category.images[1] + `" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="` + category.images[2] + `" alt="Third slide">
          </div>
          <div class="carousel-item">
          <img class="d-block w-100" src="` + category.images[3] + `" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="` + category.images[4] + `" alt="Third slide">
            </div>`

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

// Muestra el JSON con los comentarios 
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
                        <h5 class="mb-1">` + coments.user + `</h5>
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

// Funcion que inicializa el JSON
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            //Muestro las categorías ordenadas
            showComentsArray(comentarios);
        }
    });
});

// Funcion Productos relacionados
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            category = resultObj.data;

            let primeraImagen = document.getElementById("imagen1");
            let primeraDescripcion = document.getElementById("descripcion1");
            let segundaImagen = document.getElementById("imagen2");
            let segundaDescripcion = document.getElementById("descripcion2");


            primeraImagen.innerHTML = `<img src="` + category[1].imgSrc + `" class="d-block w-100" alt="1000"></img>`;
            primeraDescripcion.innerHTML = `<h2>` + category[1].name + `</h2>
                                                        <p>` + category[1].currency + ` ` + category[1].cost + `</p>`

            segundaImagen.innerHTML = `<img src="` + category[3].imgSrc + `" class="d-block w-100" alt="1000"></img>`;
            segundaDescripcion.innerHTML = `<h2>` + category[3].name + `</h2>
                                                            <p>` + category[3].currency + ` ` + category[3].cost + `</p>`

        }
    });
});


var rating = 0
$(':radio').change(function() {
    rating = this.value;

});

miComentario = {
        "score": "",
        "description": "",
        "user": "",
        "dateTime": ""
    }
    /*  function publicarComent(){
        var calif =  document.getElementsByName('estrella')
        alert(calif.value) } 
    */

// comentaios.push('')

function agregarComentario() {


    var cuerpoComentario = document.getElementById('cuerpoComent');

    var fecha = new Date()

    var fechaHoy = (fecha.getFullYear() + "-" + fecha.getMonth() + "-" + (fecha.getDay() + 1) + " " + fecha.getHours() + ":" + fecha.getMinutes())
    var usuario = window.sessionStorage.getItem('email')

    miComentario.score = rating
    miComentario.description = cuerpoComentario.value
    miComentario.user = usuario
    miComentario.dateTime = fechaHoy


    if (miComentario.score == "" || miComentario.description == "") {
        alert('Por favor complete todos los campos')
    } else {
        comentarios.push(miComentario)
        showComentsArray(comentarios)
        cuerpoComentario.innerHTML = ""

    }
    //console.log(miComentario)


}