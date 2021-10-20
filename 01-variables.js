//3 formas de usar las variables:

//var es global y es vieja. NO USAR
var primera = "hola mundo";

//las dos formas que vienen del ES6: let y const. NO son globales, existen donde hayan sido creadas

//const es constante, no se puede modificar
const segunda = "hola 2";

//let si puede ser cambiada
let tercera = "hola 3";

//para imprimir, usamos console.log
console.log('primera',primera);
console.log('segunda',segunda);
console.log('tercera',tercera);

//podemos reasignar el valor de let y var
tercera = "cambiando el valor!"
console.log('tercera',tercera)

//las constantes son inmutables! node a partir de este punto corta la ejecucion
segunda ="cambiando la constante!";
console.log(segunda);

//los var se pueden cambiar pero como se rompio la constante no va a correr:
primera = "cambiando la var!";
console.log(primera);