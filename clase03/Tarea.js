// Ejercicio 1: Suma de Vectores
console.log('--- Ejercicio 1: Suma de Vectores ---');

function sumarVectores(vector1, vector2) {
    // Implementa tu solución aquí
    
}


/**
 * Explicación:
 * Escribe una función llamada sumarVectores que reciba dos vectores de números del mismo tamaño
 * y devuelva un nuevo vector que contenga la suma de los elementos correspondientes de ambos vectores.
 * Por ejemplo, si los vectores son [1, 2, 3] y [4, 5, 6], el resultado debería ser [5, 7, 9].
 */

// Ejercicio 2: Contar Elementos Pares e Impares
console.log('\n--- Ejercicio 2: Contar Elementos Pares e Impares ---');

function contarParesImpares(vector) {
    // Implementa tu solución aquí
}


/**
 * Explicación:
 * Crea una función llamada contarParesImpares que reciba un vector de números
 * y devuelva un objeto con dos propiedades: pares e impares,
 * que contengan la cantidad de números pares e impares en el vector, respectivamente.
 */

// Ejercicio 3: Ordenar Nombres
console.log('\n--- Ejercicio 3: Ordenar Nombres ---');

// Pon tu código aquí

function ordenarNombres(nombres) {
    // Implementa tu solución aquí
}


/**
 * Explicación:
 * Escribe una función llamada ordenarNombres que reciba un vector de nombres
 * y devuelva un nuevo vector con los nombres ordenados alfabéticamente.
 */

// Ejercicio 4: Calcular Producto
console.log('\n--- Ejercicio 4: Calcular Producto ---');

// Pon tu código aquí

function calcularProducto(vector) {
    // Implementa tu solución aquí
}


/**
 * Explicación:
 * Crea una función llamada calcularProducto que reciba un vector de números
 * y devuelva el producto de todos los elementos del vector.
 * Si el vector está vacío, debe devolver 0.
 */

// Ejercicio 5: Unión de Conjuntos
console.log('\n--- Ejercicio 5: Unión de Conjuntos ---');

// Pon tu código aquí

function unionConjuntos(conjunto1, conjunto2) {
    // Implementa tu solución aquí
}


/**
 * Explicación:
 * Escribe una función llamada unionConjuntos que reciba dos vectores que contienen conjuntos
 * (sin elementos repetidos) y devuelva un nuevo vector que represente la unión de ambos conjuntos
 * (también sin elementos repetidos).
 */

// Ejemplos de uso
console.log('\n--- Ejemplos de Uso ---');

// Ejemplo del Ejercicio 1: Suma de Vectores
let vector1 = [1, 2, 3];
let vector2 = [4, 5, 6];
console.log('1. Suma de vectores:', sumarVectores(vector1, vector2));

// Ejemplo del Ejercicio 2: Contar Elementos Pares e Impares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('2. Conteo de pares e impares:', contarParesImpares(numeros));

// Ejemplo del Ejercicio 3: Ordenar Nombres

let nombres = ['Juan', 'Ana', 'Carlos', 'Beatriz'];
console.log('3. Nombres ordenados:', ordenarNombres(nombres));

// Ejemplo del Ejercicio 4: Calcular Producto
let vector3 = [2, 3, 4];
console.log('4. Producto de elementos:', calcularProducto(vector3));

// Ejemplo del Ejercicio 5: Unión de Conjuntos
let conjunto1 = new Set([1, 2, 3]);
let conjunto2 = new Set([3, 4, 5]);
console.log('5. Unión de conjuntos:', unionConjuntos(conjunto1, conjunto2));
