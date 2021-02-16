//RETO 6
var array2 = [11, 3, 21, 15, 11, 33];
function hayPar(array) {
    var i = 0;
    var par = false;
    while (i < array.length && (par == false)) {
        if (array[i] % 2 == 0) {
            par = true;
        }
        i++;
    }
    return par;
}
console.log(hayPar(array2));
//RETO 7
var nombres = ["Mario", "arcos", "Mateo"];
function empiezanPorM(array) {
    var todosM = true;
    var i = 0;
    while (i < array.length && todosM) {
        if (array[i][0] != "M") {
            todosM = false;
        }
        i++;
    }
    return todosM;
}
console.log(empiezanPorM(nombres));
