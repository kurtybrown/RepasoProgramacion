// RETO 3

function getImpar(numero:number)
{
    for(let i=0; i<numero; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}

getImpar(27);


//RETO 4

let array1 = [5, 12, 23, 11, 0];

function array(numeros:number[]):number[]
{
    let array2 = [];

    for(let i=numeros.length - 1; i >= 0; i--)
    {
        array2.push(array1[i]);
    }
    return array2;
}

console.log(array(array1));

//RETO 5

let colores = [ "verde", "naranja", "negro", "azul", "blanco"];

function arcoirisSi(colorines:string[])
{
    for (let i=0; i<colorines.length; i++)
    {
        if((colorines[i] == "rojo")|| (colorines[i] == "naranja") || (colorines[i] =="amarillo") || 
        (colorines[i] =="verde") || (colorines[i] == "cian") || (colorines[i] =="azul") || 
        (colorines[i] =="violeta"))
        {
            console.log(colorines[i] + " está en el arcoiris");
        }
        else
        {
            console.log(colorines[i] + " NO está en el arcoiris");
        }
    }
}
arcoirisSi(colores);

//RETO 8

let nombres1:string[] = ["Mario", "Marcos", "Mateo"]

function sumaCaracteres(array:string[]):number
{
    let resultado:number =0;

    for(let i=0; i<array.length; i++)
    {
        resultado += array[i].length
    }
    return resultado;
}
console.log(sumaCaracteres(nombres1));

function queEs(numero:number)
{
    if(numero % 2 == 0)
    {
        console.log("Es par");
    }
    else
    {
        console.log("Es impar");
    }
}

queEs(4);

//RETO 10

let arrayC:string[] = ["Casa", "Coche", "Ciudad", "Cesta"];

let arrayB:string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];

let arrayV: string[] = ["Venezuela","Veneno","Voltaje"];

queEs(sumaCaracteres(arrayC));
queEs(sumaCaracteres(arrayB));
queEs(sumaCaracteres(arrayV));