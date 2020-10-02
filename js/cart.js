// Funcion visualisar lista de productos

var carritoArray = [];

function productosCarrito(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let category = array["articles"][i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.src + `"  class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>                        
                        <input type="number" class="quantity" value='` + category.count + `' name="quantity" min="1">

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


var cantidad = document.getElementsByClassName('quantity')
var precio = document.getElementById('precio')

function mostrarCuentas(){
    var arrayCantidad = [];
    var imputsValues = document.getElementsByClassName('quantity'),
    nameValues = [].map.call(imputsValues, function(valuesImputs){
        arrayCantidad.push(valuesImputs.value)
    })

    console.log(arrayCantidad)
}

document.addEventListener('DOMContentLoaded',  mostrarCuentas() )

