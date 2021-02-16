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