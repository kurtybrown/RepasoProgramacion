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

