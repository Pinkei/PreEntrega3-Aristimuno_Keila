let id = 0

class StockProductos{
    constructor(nombre,color, precio){
        this.id = id++;
        this.nombre= nombre;
        this.color = color;
        this.precio = precio;
    }
}
//creo el array

const productosEnStock = []

let borde_ballena = new StockProductos(
    "Borde ballena 40x60",
    "beige",
    200
)
let borde_L = new StockProductos(
    "Borde L 40x40",
    "blanca",
    150
)
let solarium= new StockProductos(
    "Solarium 40x40",
    "marron",
    160
)
let esquinero= new StockProductos(
    "Esquinero 40x40",
    "beige",
    188
)

//muestra el stock que hay 
productosEnStock.push(borde_ballena,borde_L,solarium,esquinero);
console.log(productosEnStock);

let mostrarElStock = document.getElementById("mostrarElStock");

for (const dato of productosEnStock){
    let mostrar = document.createElement("mostrar")

    mostrar.innerHTML = ` Tenemos en stock la: <b> ${dato.nombre}</b> de color: ${dato.color} con una oferta semanal que queda a: $ <b>${dato.precio}</b><br>`

    mostrarElStock.appendChild(mostrar);
}


//______________________________inventario de precios metidos en localStorage

class Productos{
    constructor(medidas, precio){
        this.medidas = medidas;
        this.precio = precio;
    }
}

let piletaRomana = new Productos('7x3', 25000);
let piletaMargarita = new Productos('6x3', 22000);
let piletaRecta = new Productos('4x2',15000); 

let baseDatos = [piletaRomana, piletaMargarita, piletaMargarita];
let aux = JSON.parse(localStorage.getItem('Consultas'));


if(aux === null){
    aux = baseDatos;
    localStorage.setItem('Consultas',JSON.stringify(aux));
}

let form = document.querySelector('.medidasDeLosClientes');
let inputMedidas = document.getElementById('medidas');
let inputPrecio = document.getElementById('precio');

function validarMedidas(medidas) {
    // para que las medidas sean números positivos 
    if (parseFloat(medidas) <= 0 ) {
    return false;
    }
    
    return true;
    }

function validarPrecio(precio) {
    // Elimino espacios en blanco y que ingrese un número
    if (isNaN(parseFloat(precio.trim()))) {
    return false;
    }
    
    // Comprobar que el precio es un número positivo
    if (parseFloat(precio) <= 0) {
    return false;
    }
    
    return true;
    }

//________________evento submit
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Validar las medidas ingresadas
    if (!validarMedidas(inputMedidas.value)) {
    alert('Por favor, ingrese un valor para que le podamos presupuestar ejemplo: 7x3.');
    return;
    }
    
  // Validar el precio ingresado
    if (!validarPrecio(inputPrecio.value)) {
    alert('Por favor, ingrese un valor numérico válido para el precio.');
    return;
    }

    let newProd = new Productos(inputMedidas.value, inputPrecio.value);
    aux.push(newProd);
    localStorage.setItem('Consultas', JSON.stringify(aux));
    });


  //accedo al DOM

//let formulario = document.getElementById("formDatos");


