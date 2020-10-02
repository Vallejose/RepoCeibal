// Funcion visualisar lista de productos

var carritoArray = [];

function productosCarrito(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let category = array["articles"][i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action"  onclick="desplegar()">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.src + `"  class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>
                        <small class="text-muted">` + category.count + ` artículos</small>

                    </div>
                    <div>
                       
                        <p>` + category.currency + ` ` + category.unitCost + `</p>
                    </div>
                </div>
            </div>
        </div>
        `

        document.getElementById("productosCarritos").innerHTML = htmlContentToAppend;
    }
}

 
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_PRODUCT).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            carritoArray = resultObj.data;
            //Muestro las categorías ordenadas
            productosCarrito(carritoArray);
        }
    });
});

/*

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_PRODUCT).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("productosCarritos");
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
            categoryNameHTML.innerHTML = category["articles"][1].name;
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.productCount;
            productCriteriaHTML.innerHTML = category.productCriteria;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});
*/