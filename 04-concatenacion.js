const nombre = "Ger";
const edad = 28 ;

const uniendoConMas = "hola soy " + nombre + " y tengo " + edad + " años. ";
console.log(uniendoConMas);

const uniendoConBackticks = `hola soy ${nombre} y tengo ${edad} años`;
console.log(uniendoConMas);

//no siempre en la vida van a necesitar backticks.... no se compliquen
const simple = "programacion";
console.log("hola, yo enseño " + simple);

//concatenar con metodo:
const parte1 = "hola soy German ";
const parte2 = "y tengo 28 años";

const uniendo = parte1.concat(parte2);
console.log(uniendo);

