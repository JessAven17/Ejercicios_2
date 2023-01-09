//Ejercicio Myores que

function mayoresQue() {
    let tamanio = prompt("Ingresa los numeros a leer: ");
    let arreglo = new Array(tamanio);
    let numeroComparar = 0;
    let mayores = 0;
    console.log("Numeros a leer "+tamanio);
    for (let index = 0; index < tamanio; index++) {
        arreglo[index] = prompt("Ingresa un numero: ");
        console.log(arreglo[index]);
    }
    numeroComparar = prompt("Ingresa el valor x con cual comparar: ");
    console.log("Numero a comparar "+numeroComparar);
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index] > numeroComparar) {
            mayores++;
        }
    }
    console.log("De tus lista " +mayores +" valores son mayores a: "+numeroComparar);



}