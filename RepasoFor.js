// RETO 3
function getImpar(numero) {
    for (var i = 0; i < numero; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
getImpar(27);
//RETO 4
var array1 = [5, 12, 23, 11, 0];
function array(numeros) {
    var array2 = [];
    for (var i = numeros.length - 1; i >= 0; i--) {
        array2.push(array1[i]);
    }
    return array2;
}
console.log(array(array1));
//RETO 5
var colores = ["verde", "naranja", "negro", "azul", "blanco"];
function arcoirisSi(colorines) {
    for (var i = 0; i < colorines.length; i++) {
        if ((colorines[i] == "rojo") || (colorines[i] == "naranja") || (colorines[i] == "amarillo") ||
            (colorines[i] == "verde") || (colorines[i] == "cian") || (colorines[i] == "azul") ||
            (colorines[i] == "violeta")) {
            console.log(colorines[i] + " está en el arcoiris");
        }
        else {
            console.log(colorines[i] + " NO está en el arcoiris");
        }
    }
}
arcoirisSi(colores);
//RETO 8
var nombres1 = ["Mario", "Marcos", "Mateo"];
function sumaCaracteres(array) {
    var resultado = 0;
    for (var i = 0; i < array.length; i++) {
        resultado += array[i].length;
    }
    return resultado;
}
console.log(sumaCaracteres(nombres1));
function queEs(numero) {
    if (numero % 2 == 0) {
        console.log("Es par");
    }
    else {
        console.log("Es impar");
    }
}
queEs(4);
//RETO 10
var arrayC = ["Casa", "Coche", "Ciudad", "Cesta"];
var arrayB = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
var arrayV = ["Venezuela", "Veneno", "Voltaje"];
queEs(sumaCaracteres(arrayC));
queEs(sumaCaracteres(arrayB));
queEs(sumaCaracteres(arrayV));
