// @Exercise 1
// Add "Uva" at the end of the array, remove first element and show result.
console.group('Ex1')

const frutas = ["Manzana", "Banana", "Naranja"];

frutas.shift();
frutas.push('Uva');
console.table(frutas);

console.groupEnd();

// @Exercise 2
// Duplicate array
console.group('Ex2')

const numeros_2 = [1, 2, 3, 4];
// Expected output: [2, 4, 6, 8]

const duplicados = numeros_2.map( (n) => n * 2 );

console.table(duplicados);

console.groupEnd();

// @Exercise 3
// Find numbers bigger than 10
console.group('Ex3')

const numeros_3 = [5, 12, 8, 20];
// Expected output: [12, 20]

const big10 = numeros_3.filter( (n) => n >= 10 );

console.table(big10);

// Find first even number
const numeros_3_1 = [7, 11, 4, 19];

console.log(numeros_3_1.find( (n) => n % 2 == 0 ? n : null ))

console.groupEnd();
