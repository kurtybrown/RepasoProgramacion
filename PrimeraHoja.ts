function zodiaco(dia:number, mes:string):string
{
    // for(let i=0; i<12; i++)
    
        if((dia>=21 && mes =="enero") || (dia<=19 && mes == "febrero")) 
        {
            console.log("Acuario");
        }

        if((dia>=20 && mes =="febrero") || (dia<=20 && mes == "marzo"))
        {
            console.log("Piscis");
        }

        if((dia>=21 && mes =="marzo") || (dia<=20 && mes == "abril"))
        {
            console.log("Aries");
        }

        if((dia>=21 && mes =="abril") || (dia<=20 && mes == "mayo"))
        {
            console.log("Tauro");
        }

        if((dia>=21 && mes =="mayo") || (dia<=21 && mes == "junio"))
        {
            console.log("Geminis");
        }

        if((dia>=22 && mes =="junio") || (dia<=22 && mes == "julio"))
        {
            console.log("Cancer");
        }

        if((dia>=23 && mes =="julio") || (dia<=23 && mes == "agosto"))
        {
            console.log("Leo");
        }

        if((dia>=24 && mes =="agosto") || (dia<=22 && mes == "septiembre"))
        {
            console.log("Virgo");
        }

        if((dia>=23 && mes =="septiembre") || (dia<=22 && mes == "octubre"))
        {
            console.log("Libra");
        }

        if((dia>=23 && mes =="octubre") || (dia<=22 && mes == "noviembre"))
        {
            console.log("Escorpio");
        }

        if((dia>=23 && mes =="noviembre") || (dia<=21 && mes == "diciembre"))
        {
            console.log("Sagitario");
        }

        if((dia>=22 && mes =="diciembre") || (dia<=20 && mes == "enero"))
        {
            console.log("Capricornio");
        }
    
    return;
}

zodiaco(20, "abril");


///////////////////////////////7

// RETO2

function dondeEstoy(pais:string)
{
    if((pais =="Papua") || (pais =="Australia") || (pais =="Nueva Zelanda") 
        || (pais =="Samoa") || (pais =="Fiji"))
        {
            console.log("Oceania");
        }else if((pais =="Colombia") || (pais =="Canada") || (pais =="Coraçao") 
        || (pais =="Chile") || (pais =="Uruguay"))
        {
            console.log("America");
        }else if((pais =="Andorra") || (pais =="Monaco") || (pais =="Luxemburgo") 
        || (pais =="San Marino") || (pais =="Gibraltar"))
        {
            console.log("Europa");
        }
        else if((pais =="China") || (pais =="India") || (pais =="Laos") 
        || (pais =="Corea la buena") || (pais =="Tailandia"))
        {   
            console.log("Asia");
        }
        else if((pais =="Guinea Ecuatorial") || (pais =="Congo") || (pais =="Sudafrica") 
        || (pais =="Tunez") || (pais =="Etiopía"))
        {
            console.log("Africa");
        }

}

dondeEstoy("Corea la buena");


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

//RETO 6

let array2:number[] = [11, 3, 21, 15, 11, 33];

function hayPar(array:number[]):boolean
{
    let i:number = 0;
    let par = false;

    while(i<array.length && (par == false))
    {
        if(array[i] % 2 == 0)
        {
            par = true;
        }
        i++;
    }
    return par;
}

console.log(hayPar(array2));

//RETO 7

let nombres:string[] = ["Mario", "arcos", "Mateo"]


function empiezanPorM(array:string[]):boolean
{
    let todosM:boolean = true
    let i:number=0

    while(i<array.length && todosM)
    {
        
        if(array[i][0] != "M")
        {
            todosM = false;
        }
        i++;
    }
    return todosM;
}

console.log(empiezanPorM(nombres));

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

//RETO 9

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