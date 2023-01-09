//Ejercicio mayores que el promedio

function mayoresQueElPromedio() {
    let tamanio = prompt("Cuantos datos ingresara?");
    let arreglo = new Array(tamanio);
    let total = 0;
    let mayores = 0;
    let promedio = 0;
    console.log("Cantidad de datos a ingresar "+tamanio);
    for (let index = 0; index < tamanio; index++) {
        arreglo[index] = parseFloat(prompt("Dato " + (index + 1) + ": "));

        console.log("Dato " + (index + 1) + ": "+arreglo[index]);
        total += arreglo[index];
    }
    promedio = total/tamanio;
    for (let index = 0; index < tamanio; index++) {
        if (arreglo[index] > promedio) mayores++;

    }
    console.log("El promedio es "+ promedio);
    console.log(mayores + " datos son mayores que el promedio");
}