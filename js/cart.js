// Funcion visualisar lista de productos en el carrito

var carritoArray = [];

function productosCarrito(array){
   
    let htmlContentToAppend = "";
    for(let i = 0; i < array["articles"].length; i++){
        let category = array["articles"][i];

        htmlContentToAppend = `     
        <div class="list-group-item list-group-item-action">
        <div class="row">
        <div class="col-3">
        <img src="` + category.src + `"  class="img-thumbnail">
        </div>
        <div class="col-6">
        <h4 class="mb-1">`+ category.name +`</h4> 
        <p>` + category.unitCost + ` </p>
        <p>` + category.currency+ ` </p>
        </div>
        <div class="col-3">
        <div class="row" id="inputCont`+i+`"></div>
        <div class="row"> <h3>Sub total</h3></div>
        <div class="row" id="product`+i+`" ></div>        
        </div>
        </div>
        </div>
        `

        document.getElementById("productosCarritos").innerHTML += htmlContentToAppend
        // Contenedor del Input
        var divCont = document.getElementById("inputCont"+i);

        var parrafo = document.createElement("P");

        // Creacion del input de cant. De productos
        var input = document.createElement("INPUT");
	input.setAttribute("type", "number");
	input.setAttribute("name", "cant");
	input.setAttribute("min", "1");
    input.setAttribute("max", "5");
    input.setAttribute("id", "inputProduct"+i)
    input.setAttribute("value", ``+ category.count +``);
    input.setAttribute("onchange", "calcularSubTotal("+ category.unitCost +",this.value ,"+ i +", '"+ category.currency +"')");
    input.setAttribute("onmousemove", "calcularSubTotal("+ category.unitCost +",this.value ,"+ i +", '"+ category.currency +"')");

    //Agrego el input al contenedor
    divCont.appendChild(parrafo);
    parrafo.appendChild(input)

    // Funcion creacion del contenedor con el total $ del producto
   var divSubTot = document.getElementById("product"+i);
   var parCosto = document.createElement("P");
   var subTotal= document.createElement("span");
   subTotal.setAttribute("id", "span"+i);
   var textoSpan= document.createTextNode("");

   // Agrego el total $ del producto al html
   divSubTot.appendChild(parCosto);
   parCosto.appendChild(subTotal)
   subTotal.appendChild(textoSpan)

    }
}


// Funcion calcular el costo total de un producto
function calcularSubTotal(costo, cantidad, idParrafo, moneda){
    if (moneda == "USD"){
    var texto=costo*cantidad*40 ;
    document.getElementById("span"+idParrafo).innerHTML = texto;
} else {

    var texto=costo*cantidad ;
    document.getElementById("span"+idParrafo).innerHTML = texto;}
}



// Funcion cargo el Json con los productos
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
