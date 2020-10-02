// Funcion visualisar lista de productos

var carritoArray = [];

function productosCarrito(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let category = array["articles"][i];

        htmlContentToAppend += `
        <tr class="table-warning">
        <td class="d-flex flex-wrap"><img src="` + category.src + `"  class="img-thumbnail" width=35%></td>
        <td>`+ category.name +`</td>
        <td>` + category.currency + ` ` + category.unitCost + `</td>
        <td><input type="number" class="quantity" name="quantity" min="1" onchange='calcular(this.value , ` + category.unitCost + `)'></td>
        <td id='precioTotal'></td>
      </tr>
      `
      /*
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.src + `"  class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ category.name +`</h4>                        
                        <input type="number" class="quantity" name="quantity" min="1" onchange='calcular(this.value , ` + category.unitCost + `)'>

                    </div>
                    <div>
                       
                        <p>` + category.currency + ` ` + category.unitCost + `</p>
                    </div>
                </div>
            </div>
        </div>
        */

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
*/
var cantArt = [];
var subSuma = [];


function calcular(cantidad, precio){
var total = (cantidad * precio)
var precioTot = document.getElementById('precioTotal')
precioTot.innerHTML = total

/* let subTot = ""
for (let i=0; i < subSuma.length; i++) 
subTot += subSuma[i]
console.log(subTot)
*/


}

// Bruno, Diego, Thais, Victoria
