//los string llevan " " o ''

let variable1 = "soy un string";
//typeof nos va a decir el tipo de variable
console.log(typeof variable1);

//ahora la reasignamos y convertimos en numero!
variable1 = 15;
console.log(typeof variable1);

//no hay un tipo separado para los decimales! no tenemos floats
let variable2 = 15.4;
console.log(typeof variable2);

//boolean:solo true o false

let esVerdad = false;
console.log(typeof esVerdad)
console.log(esVerdad)

//array: guarda cosas en orden.Con los [] le decimos que es array
let frutas = ["banana", "frutilla", "pera", 25, true]
console.log(typeof frutas)

//objetos: similar al array, pero ademas, es un par nombre: valor
let persona = {
    ojos: 2,
    piernas: 2,
    cabeza: 1,
    cola: false,
    nombre: "Pablo",
};

console.log(persona)
