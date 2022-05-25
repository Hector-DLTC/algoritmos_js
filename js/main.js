let numero = prompt("dame un numero entre el 1 y el 100");
let numero2 = prompt("dame otro numero entre el 1 y el 100");
let numero3 = prompt("dame el ultimo numero entre el 1 y el 100");

if ((numero>numero2) && (numero>numero3)) {
    console.log(numero);
}   else if ((numero<numero2) && (numero>numero3)) {
    
    console.log();
}   else if ((numero>numero2) && (numero<numero3)) {
    
    console.log(numero3);
} 
    else  {
        numero=numero2=numero3;
        alert("no digas M****as usuario")
}
//////////////////////////////////////////////

// if ((numero>numero2) && (numero>numero3)) {
//     console.log(numero);
// }   else if ((numero<numero2) && (numero>numero3)) {
    
//     console.log();
// }   else if ((numero>numero2) && (numero<numero3)) {
    
//     console.log(numero3);
// } 
//     else  {
//         numero=numero2=numero3;
//         alert("no digas M****as usuario")
// }
/////////////////////////////////////////////////////////////////////////////
// let x = prompt("dame un numero entre el 100 y el 200 para ver si es multiplo de 3");

// if (x == (102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198) ) {
//        console.log(x + " es multiplo de 3");
// }
// else if(x != (102, 105, 108, 111, 114, 117, 120, 123, 126, 129, 132, 135, 138, 141, 144, 147, 150, 153, 156, 159, 162, 165, 168, 171, 174, 177, 180, 183, 186, 189, 192, 195, 198)) {
//     console.log(x + " patata")
// }
// else{
//     console.log(x + " no es multiplo de 3");
// }
///////////////////////////////////////////////////////////
// let n1 = prompt("dame un numero para ver si es suma de los siguentes");
// let n2 = prompt("dame un numero");
// let n3 = prompt("dame el ultimo numero");

// if (n1==(n2+n3)){
//     alert(n1 + " el primero es suma de los otros 2");
// }
// else if(n2==(n1+n3)){
//     alert(n2 + " el segundo es suma de los otros 2");
// }
// else if(n3==(n1+n2)){
//     alert(n3 + " el tercero es suma de los otros 2");
// }
// else{
//     alert("mentiroso.....")
// }