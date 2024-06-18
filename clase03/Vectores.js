// Ejercicio 1: Suma de elementos
let vector3;
function sumaElementos(vector) {
    let suma = 0;
    for (let i = 0; i < vector.length; i++) {
        suma += vector[i];
    }
    return suma;
}

// Ejercicio 2: Promedio de elementos
function calcularPromedio(vector) {
    let suma = sumaElementos(vector);
    return suma / vector.length;
}

// Ejercicio 3: Elemento mayor y menor
function encontrarMayorMenor(vector) {
    let mayor = vector[0];
    let menor = vector[0];
    
    for (let i = 1; i < vector.length; i++) {
        if (vector[i] > mayor) {
            mayor = vector[i];
        }
        if (vector[i] < menor) {
            menor = vector[i];
        }
    }
    
    return { mayor, menor };
}

// Ejercicio 4: Filtrar elementos pares
function filtrarPares(vector) {
    let pares = [];
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] % 2 === 0) {
            pares.push(vector[i]);
        }
    }
    return pares;
}

// Ejercicio 5: Concatenar vectores
function concatenarVectores(vector1, vector2) {
    vector3 = vector1 +  "," + vector2;
    return vector1.concat(vector2);
}

// Ejercicio 6: Búsqueda de un elemento
function buscarElemento(vector, objetivo) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === objetivo) {
            return true;
        }
    }
    return false;
}


// Ejercicio 7: Eliminación de duplicados
function eliminarDuplicados(vector) {
    let unicos = [];
    for (let i = 0; i < vector.length; i++) {
        if (!unicos.includes(vector[i])) {
            unicos.push(vector[i]);
        }
    }
    return unicos;
}

// Ejercicio 8: Ordenamiento de elementos
function ordenarVector(vector) {
    return vector.slice().sort((a, b) => a - b);
}

// Ejercicio 9: Rotación a la derecha
function rotarDerecha(vector, k) {
    k = k % vector.length; // asegurarse de no hacer rotaciones innecesarias
    return vector.slice(-k).concat(vector.slice(0, vector.length - k));
}



// Ejemplos de uso:
let numeros = [1, 2, 3, 4, 5, 10, 150, 30];
console.log('1. La suma de los elementos es:', sumaElementos(numeros));
console.log('2. El promedio de los elementos es:', calcularPromedio(numeros));

let datos2 = [15, 3, 8, 12, 6];
let resultado = encontrarMayorMenor(datos2);
console.log('3. El mayor elemento es:', resultado.mayor);
console.log('   El menor elemento es:', resultado.menor);

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('4. Números pares:', filtrarPares(numeros2));

let primerVector = [1, 2, 3];
let segundoVector = [4, 5, 6];
console.log('5. Vector concatenado:', concatenarVectores(primerVector, segundoVector));

let objetivo = 30;
console.log('6. ¿El número', objetivo, 'está en el vector?', buscarElemento(numeros, objetivo));

let duplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log('7. Vector sin duplicados:', eliminarDuplicados(duplicados));

let desordenado = [5, 2, 8, 1, 3];
console.log('8. Vector ordenado:', ordenarVector(desordenado));

let original = [1, 2, 3, 4, 5];
let k = 2;
console.log('9. Vector rotado a la derecha:', rotarDerecha(original, k));


let vector = ["Hola","Como","Estas","Hoy"]
console.log("Vector de palabras: " , vector )

console.log("Vector concatenado manualmente: " , vector3);

