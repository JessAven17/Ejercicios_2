//Ejercicio Producto interno

function productoInterno() {
    
    let tamanio = prompt("Ingresa el tamanio de los dos arreglos");
    let arregloA = new Array(tamanio);
    let arregloB = new Array(tamanio);
    let productoInterno = 0;
    function llenarArreglo(tamanio, nombre) {
        let arreglo = new Array(tamanio);
        for (let i = 0; i < tamanio; i++) {
            arreglo[i] = prompt("Ingresa un numero " + nombre)
        }
        return arreglo;
    }
    arregloA = llenarArreglo(tamanio, "A");
    arregloB = llenarArreglo(tamanio, "B");
    for (let index = 0; index < tamanio; index++) {
        productoInterno += arregloA[index] * arregloB[index];
    }
    console.log("El producto interno entre A y B " + productoInterno);
    if (productoInterno != 0) {
        console.log("No son ortogonales");
    } else console.log("Son ortogonales");
}