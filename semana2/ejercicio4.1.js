const {ask } = require('../helpers/input')
 
function getPersonasQueVoten (){
    for(let i = 0; i< personas.length; i++){
        if(personas[i].age >= 18){
            personasQueVoten++;
        }
    }
    return personasQueVoten;
    console.log("Peronas mayores :", getPersonasQueVoten)

}

let personasQueVoten = 0; 

async function main() {
    const personas = [
        {name: "Maria", age:24,},
        {name: "Marcos", age:8,},
        {name: "Pepe", age:18,},
        {name: "Sergio", age:12,},
    ];


}

main();