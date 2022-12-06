//Ejercicio caballo de ajedrez
let filaStirng = prompt("Ingresa el movimiento del caballo comenzando por fila");
let columnaString = prompt("Ingresa la columna");

let fila = parseInt(filaStirng);
let columna = parseInt(columnaString);
let salidaFila;
let salidaCol;
if(fila > 0 && fila < 9 && columna > 0 && columna < 9)
console.log("El caballo de (" + fila + "," + columna +") puede saltar a:")

    salidaFila = fila + 2;
    salidaCol = columna + 1;
    if(salidaFila < 9 && salidaCol < 9){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila + 1;
    salidaCol = columna + 2;
    if(salidaFila < 9 && salidaCol < 9){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila - 2;
    salidaCol = columna - 1;
    if(salidaFila < 0 && salidaCol < 0){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila - 1;
    salidaCol = columna - 2;
    if(salidaFila < 0 && salidaCol < 0){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila + 2;
    salidaCol = columna - 1;
    if(salidaFila < 9 && salidaCol < 0){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila - 2;
    salidaCol = columna + 1;
    if(salidaFila < 0 && salidaCol < 9){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila + 1;
    salidaCol = columna - 2;
    if(salidaFila < 9 && salidaCol < 0){
        console.log(salidaFila, salidaCol)
    }
    salidaFila = fila - 1;
    salidaCol = columna + 2;
    if(salidaFila < 0 && salidaCol < 9){
        console.log(salidaFila, salidaCol)
    }   
 
else{
    console.log("Posicion invalida")
}