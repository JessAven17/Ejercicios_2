//Ejercicio numero verificador

var numero, reversa, Cantidad;
let multiplos = 2, multiplicacion = 0, suma = 0, resta = 0, Modulo = 0;
numero = prompt("Dame el numero");

reversa = numero.split("").reverse().map(Number);
Cantidad = numero.length;

for(let i = 0; i < Cantidad; i++){
    if(multiplos <= 7){
        multiplicacion = multiplos * reversa[i];
    }else{
        multiplos = 2;
        multiplicacion = multiplos * reversa[i];
    }
    multiplos++;
    suma = suma + multiplicacion;
}
console.log("Suma:", suma);
Modulo = suma%11;
console.log("Modulo:", Modulo);
resta = 11- Modulo;
console.log("Resta:", resta);
console.log(numero.toString()+"-"+resta);
