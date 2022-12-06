//Ejercicio numero mayor
let n1, n2, n3, n4; //Decalarar variables

n1 = prompt("Dame un mumero");
n2 = prompt("Dame otro numero");
n3 = prompt("Dame otro numero");
n4 = prompt("Dame otro numero");

if (n1 > n2 && n1 > n3 && n1 > n4){
    console.log(n1);
} else if (n2 > n1 && n2 > n3 && n2 > n4) {
    console.log(n2);
}else if (n3 > n1 && n3 > n2 && n3 > n4){
    console.log(n3);
} else (n4 > n1 && n4 > n2 && n4 > n3)
    console.log(n4)
