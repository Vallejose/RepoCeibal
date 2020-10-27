// Funcion visualisar lista de productos en el carrito
var carritoArray = [];

var texto = 0
var entrega = document.forms[0];
radio = false
inp1 = false
inp2 = false

function productosCarrito(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array["articles"].length; i++) {
        let category = array["articles"][i];

        htmlContentToAppend = ` 
        
        <tr>
        <th scope="row"><img src="` + category.src + `"  class="img-fluid"></th>
        <td>` + category.name + `</td>
        <td>` + category.unitCost + ` </td>
        <td>` + category.currency + `</td>
        <td id="inputCont` + i + `"></td>
        <td id="product` + i + `"></td>
        <td ><i class="fas fa-trash-alt" onclick="borrarItem()"></i></td>
      </tr>

        `

        document.getElementById("productosCarritos").innerHTML += htmlContentToAppend
            // Contenedor del Input
        var divCont = document.getElementById("inputCont" + i);

        var parrafo = document.createElement("P");

        // Creacion del input de cant. De productos
        var input = document.createElement("INPUT");
        //  var a = input.this.value
        input.setAttribute("type", "number");
        input.setAttribute("name", "cant");
        input.setAttribute("min", "1");
        input.setAttribute("max", "10");
        input.setAttribute("id", "inputProduct" + i)
        input.setAttribute("value", `` + category.count + ``);
        input.setAttribute("class", "cant");

        //Agrego el input al contenedor
        divCont.appendChild(parrafo);
        parrafo.appendChild(input);

        var divSubTot = document.getElementById("product" + i);
        var parCosto = document.createElement("P");
        //var subTotal = document.createElement("span");
        parCosto.setAttribute("id", "parr" + i);
        parCosto.setAttribute("class", "subTotProduct");

        var textoSpan = document.createTextNode("");

        // Agrego el total $ del producto al html
        divSubTot.appendChild(parCosto);
        parCosto.appendChild(textoSpan);

        input.setAttribute("onload", calcularSubTotales('' + category.unitCost + '', '' + input.value + '', '' + i + '', '' + category.currency + ''))
        input.setAttribute("onchange", "calcularSubTotales(" + category.unitCost + ",this.value ," + i + ", '" + category.currency + "')");
    }
}

// Funcion cargo el Json con los productos
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(CART_PRODUCT).then(function(resultObj) {
        if (resultObj.status === "ok") {
            carritoArray = resultObj.data;
            //Muestro las categorías ordenadas
            productosCarrito(carritoArray);

        }
    });
});

// Funcion que calcula el costo del envio
function costoEntrega() {
    var subT = document.getElementById("totalParcial").innerText

    for (j = 0; j < entrega.length; j++) {
        if (entrega[j].checked) {
            txt = entrega[j].value;
            txt = (subT * txt) / 100
            document.getElementById("envio").innerHTML = txt;

        }
    }
}

// Funcion calcular todos los campos
function calcularSubTotales(costo, cantidad, idParrafo, moneda) {

    // calcula subtotal de cada producto
    var costoProductos = document.getElementsByClassName("subTotProduct")
    var costoTotal = 0
    var total = document.getElementById("totalParcial")

    if (moneda == "USD") {
        texto = costo * cantidad * 40;
        //mostrarSubtotal(idParrafo)
        document.getElementById("parr" + idParrafo).innerHTML = texto;
    } else {
        texto = costo * cantidad;
        //mostrarSubtotal(idParrafo)
        document.getElementById("parr" + idParrafo).innerHTML = texto;
    }


    //Calculo de la suma de los subtotales
    for (i = 0; i < costoProductos.length; i++) {
        costoTotal = parseInt(costoTotal) + parseInt(costoProductos[i].innerText)
    }
    if (costoTotal == 0) {
        total.innerHTML = 0
    } else {

        total.innerHTML = costoTotal
    }

    //calculo del costo del envio
    costoEntrega()

    // Calculo del total de la compra
    var subT = document.getElementById("totalParcial").innerText
    var costoEnvio = document.getElementById("envio").innerText
    var totalFinal = document.getElementById("total")
    var costoTotal = 0

    costoTotal = parseInt(subT) + parseInt(costoEnvio)
    totalFinal.innerHTML = costoTotal
}

// Funcion que calcula el costo del envio
function costoEntrega() {
    var entrega = document.forms[0];
    var subT = document.getElementById("totalParcial").innerText


    for (j = 0; j < entrega.length; j++) {
        if (entrega[j].checked) {
            txt = entrega[j].value;
            txt = (subT * txt) / 100
            document.getElementById("envio").innerHTML = txt;
            radio = true
        }
    }
}

//Boton que valida los campos y abre el modal
function validarCampos() {

    var direccion = document.getElementById('direccion')
    var contacto = document.getElementById('contacto')
    inp1 = false
    inp2 = false

    if (direccion.value !== "") {
        inp1 = true
    }

    if (contacto.value !== "") {
        inp2 = true
    }

    if (radio == true && inp1 == true && inp2 == true) {
        $("#modal").modal("show")
    } else {
        alert("debe completar todos los campos")
    }
}

//Boton validacion del modal
function validacionModal() {
    var boolBacario = false
    var boolcredito = false

    var moneda = document.getElementById("moneda")
    var cuenta = document.getElementById("cuenta")
    var Bank = document.getElementById("banco")
        // validar seccio de transferencia bancaria
    if (banco.value !== "Seleccione banco" && cuenta.value !== "" && moneda.value !== "Seleccione moneda") {
        boolBacario = true
    }

    var tarjeta = document.getElementById("tarjeta")
    var datos = document.getElementById("datos")
    var fecha = document.getElementById("fecha")
    var codigo = document.getElementById("codigo")
    var cedula = document.getElementById("cedula")

    // Validar seccion de tarjeta de credito
    if (tarjeta.value !== "" && datos.value !== "" && fecha.value !== "" && codigo.value !== "" && cedula.value !== "") {
        boolcredito = true
    }

    // Evalua si se lleno alguno de los formularios y cerra el modal
    if (boolBacario == true || boolcredito == true) {
        alert("Compra exitosa!")
        $("#modal").modal("hide")
    } else {
        alert("Porfavor complete todos los campos")
    }
}