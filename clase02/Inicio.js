//JavaScript es un lenguaje de scripting que se ejecuta en el navegador del usuario. 
//Puede modificar el contenido de una página web de manera dinámica sin necesidad de recargarla.


/*
BLOQUE 
DE 
COMENTARIO
*/


console.log("Hola Mundo, esta es la segunda clase de Fundamentos de la programamción.");

let a = 10;
let b = 20;

let cadenaEntero = "123.50"; 
let numeroEntero = parseFloat(cadenaEntero);
numeroEntero = numeroEntero + 10;
console.log("Número Entero sumandole 10: ", numeroEntero);


let cadenaInvalida = "123abc";
let numeroInvalido = parseInt(cadenaInvalida);
console.log("Número Inválido:", numeroInvalido);

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
console.log("División: ", division);

// script.js
let cadenaEntero1 = "123";
let cadenaFlotante = "123.45";
let cadenaInvalida2 = "123abc";
let cadenaFlotanteInvalida = "123.45abc";

let numeroEntero1 = parseInt(cadenaEntero);
let numeroFlotante = parseFloat(cadenaFlotante);
let numeroInvalido2 = parseInt(cadenaInvalida);
let numeroFlotanteInvalido = parseFloat(cadenaFlotanteInvalida);

console.log("Número Entero:", numeroEntero1); // Salida: Número Entero: 123
console.log("Número Flotante:", numeroFlotante); // Salida: Número Flotante: 123.45
console.log("Número Inválido (parseInt):", numeroInvalido2); // Salida: Número Inválido (parseInt): 123
console.log("Número Flotante Inválido (parseFloat):", numeroFlotanteInvalido); // Salida: Número Flotante Inválido (parseFloat): 123.45

let numeroDesdeCadenaEntero = Number(cadenaEntero);
let numeroDesdeCadenaFlotante = Number(cadenaFlotante);

console.log("Número desde cadena (Number):", numeroDesdeCadenaEntero); // Salida: Número desde cadena (Number): 123
console.log("Número Flotante desde cadena (Number):", numeroDesdeCadenaFlotante); // Salida: Número Flotante desde cadena (Number): 123.45
