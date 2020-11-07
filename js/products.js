// Funcion visualisar lista de productos
var productsArray = [];

function showProductsArray(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let category = array[i];

        htmlContentToAppend += `
        <div class="col-md-4">
            <div class="card card-producto d-flex flex-column ml-2">
                    <img class="card-img-top" src="` + category.imgSrc + `" alt="` + category.description + `">
                <div class="card-header">
                    <h2 class="card-title">` + category.name + `</h2>
                </div>
                <div class="card-body">                
                    <small class="text-muted">` + category.soldCount + ` artículos</small>
                    <div>
                       <p>` + category.description + `</p>
                       <p>` + category.currency + ` ` + category.cost + `</p>
                    </div>
                </div>
            </div>
        </div>
        
        `

        document.getElementById("listado").innerHTML = htmlContentToAppend;
    }
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            //Muestro las categorías ordenadas
            showProductsArray(productsArray);
        }
    });
});

var pOrdenados = [];
var listaOrdenada = pOrdenados[0];
var pDesordenados = [];


// Ordenar precio >
function mayorPrecio() {

    pOrdenados.push(productsArray.sort((pr1, pr2) => { return (pr2.cost - pr1.cost) }));
    console.log(pOrdenados[0]);
    showProductsArray(pOrdenados[0]);
}
// Ordenar precio <
function menorPrecio() {
    pDesordenados.push(productsArray.sort((pr1, pr2) => { return (pr1.cost - pr2.cost) }));
    console.log(pOrdenados[0]);
    showProductsArray(pDesordenados[0]);
}

// Ordenar relevancia >
function mayorRelevancia() {

    pOrdenados.push(productsArray.sort((pr1, pr2) => { return (pr2.soldCount - pr1.soldCount) }));
    console.log(pOrdenados[0]);
    showProductsArray(pOrdenados[0]);
}


var minimo = document.querySelector('#minimo')
var maximo = document.querySelector('#maximo')


// Filtrar ambos

function filtradoAmbos() {
    var filtradoAmbos = [];
    for (i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cost >= minimo.value && productsArray[i].cost <= maximo.value) {
            filtradoAmbos.push(productsArray[i])
            showProductsArray(filtradoAmbos)
        }

    }
}

// Filtrar Mminimo  
function filtradoM1ximo() {
    var filtradoMinimo = [];
    for (i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cost >= minimo.value) {
            filtradoMinimo.push(productsArray[i])
            showProductsArray(filtradoMinimo)
        }
    }
}

// Filtrar Maximo 
function filtradoMaximo() {
    var filtradoCaro = [];
    for (i = 0; i < productsArray.length; i++) {
        if (productsArray[i].cost <= maximo.value) {
            filtradoCaro.push(productsArray[i])
            showProductsArray(filtradoCaro)
        }
    }
}

// Funcion de filtrado

function mostrarFiltradoMinimo() {
    if (maximo.value == null) {
        filtradoMinimo()
    } else {
        filtradoAmbos()
    }
}

function mostrarFiltradoMaximo() {
    if (minimo.value == null) {
        filtradoMaximo()
    } else {
        filtradoAmbos()
    }
}

minimo.addEventListener('keyup', mostrarFiltradoMinimo)
maximo.addEventListener('keyup', mostrarFiltradoMaximo)


// Funcion Buscador
const buscador = document.querySelector('#buscador');
const boton = document.querySelector('#boton');
var resultados = [];
var listado = document.getElementById('listado')

const filtrar = () => {
    listado.innerHTML = '';
    const texto = buscador.value.toLowerCase();
    for (let producto of productsArray) {
        let nombre = producto.name.toLowerCase()
        if (nombre.indexOf(texto) !== -1) {


            listado.innerHTML += `
            <div class="col-md-4">
                <div class="card card-producto d-flex flex-column justify-content-between ml-2 w-33" >
                        <img class="card-img-top" src="` + producto.imgSrc + `" alt="` + producto.description + `">
                    <div class="card-header">
                        <h2 class="card-title">` + producto.name + `</h2>
                    </div>
                        <div class="card-body">                
                                <small class="text-muted">` + producto.soldCount + ` artículos</small>
                            <div>
                                <p>` + producto.description + `</p>
                                <p>` + producto.currency + ` ` + producto.cost + `</p>
                            </div>
                     </div>
                </div>
            </div>
         `
        }
    }
}


/* evento buscador */
boton.addEventListener('click', filtrar)
buscador.addEventListener('keyup', filtrar)

function desplegar() {
    window.location.href = "product-info.html"
}