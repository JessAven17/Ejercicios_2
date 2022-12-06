//Ejercicio histograma
let datoingresado;
let contadorPositivos=0;
let contadorNegativos;

do{
    datoingresado = prompt("Ingresa un valor entero positivo o negativo, termina con 0");
    console.log (datoingresado);
    if (datoingresado > 0){
        contadorPositivos++;
    }else if (datoingresado < 0){
        contadorNegativos++; 
    }   
}while(datoingresado !=0)
let renglon = "Positivos:";
for(let1=0;1<contadorPositivos; 1 ++){
}
    renglon="*";

console.log(renglon);
for(let1=0; 1<contadorNegativos; 1 ++){
    renglon+="*";
}