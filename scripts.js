// Tipos de datos básicos
let numero = 42; // Número
let texto = "Hola, mundo!"; // Cadena de texto
let booleano = true; // Booleano
let nulo = null; // Nulo
let indefinido; // Indefinido

// usar let o const para declarar variables, no var

//condicionales
if (numero > 50) {
    console.log("El número es mayor que 50.");
} else if (numero === 42) {
    console.log("El número es exactamente 42.");
}

// Bucles
for (let i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

//cree una copia y no modifique el original

let numeroCopia = numero;
while (numeroCopia > 0) {
    console.log("Número actual: " + numeroCopia);
    numeroCopia--; // Decrementa el número
}

console.log(numero)

// Funciones
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("Mundo"));

//funciones flecha
const cuadrado = (numero) => numero * numero;
console.log(cuadrado(5));

// Objetos  
let alumno = {
nombre: "Valentina",
edad: 22,
activo: true
};

// Métodos de arreglos
//Método y callback
let numeros = [1, 2, 3, 4, 5];

numeros.forEach(numeros => {
    console.log(numeros);
});

//  Transforma cada
// elemento del arreglo usando map

let sumas = numeros.map(numeros => numeros + numeros);
console.log(sumas);

// Filtra por condición

console.log(numeros);
let numerosPares = numeros.filter(numeros => numeros % 2 === 0);
console.log(numerosPares);

//  Verifica si alguno
// cumple la condición

console.log(numeros);
let hayPares = numeros.some(numeros => numeros % 2 === 0);
console.log(hayPares);

//  Verifica si todos
// cumplen.

let todosPares = numeros.every(numeros => numeros % 2 === 0);
console.log(todosPares);

// Busca el primer
// elemento que cumple.

let primerPar = numeros.find(numeros => numeros % 2 === 0);
console.log(primerPar);

// Busca la posición del
// primer elemento que
// cumple

let indicePrimerPar = numeros.findIndex(numeros => numeros % 2 === 0);
console.log(indicePrimerPar);

// Acumula numeros en un unico valor

let sumaTotal = numeros.reduce((acumulador, numeros) => acumulador + numeros, 0);
console.log(sumaTotal);

// Verifica existencia de un
// valor

let existeTres = numeros.includes(3);
console.log(existeTres);

// Busca posición de un
// valor
let indiceTres = numeros.indexOf(3);
console.log(indiceTres);

//Copia una parte del
// arreglo
let subArreglo = numeros.slice(1, 4);
console.log(subArreglo);

//  Une arreglos
let masNumeros = [6, 7, 8];

let arregloCompleto = numeros.concat(masNumeros);
console.log(arregloCompleto);

// Une elementos en un
// texto

let textoNumeros = arregloCompleto.join(", ");
console.log(textoNumeros);

// Métodos que modifican el arreglo original

numeros.push(6); // Agrega al final
console.log(numeros);

numeros.pop(); // Elimina el último
console.log(numeros);

numeros.shift(); // Elimina el primero
console.log(numeros);

numeros.unshift(2); // Agrega al inicio
console.log(numeros);

//Encadenamiento de métodos
let resultado = numeros
    .filter(numeros => numeros % 2 === 0) // Filtra pares
    .map(numeros => numeros * numeros) // Eleva al cuadrado
    .reduce((acumulador, numeros) => acumulador + numeros, 0); // Suma total
console.log(resultado);