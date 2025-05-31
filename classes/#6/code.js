// Ejercicio 1 - Crear un programar que pida al usuario su nombre y su edad, y luego imprima un mensaje que diga si es mayor o menor de edad

console.group('exercise.1');
let name = prompt('Enter your name');
let age = parseInt(prompt('Enter your age'));

// Ternary option
age >= 18 ? console.log(`${name} is an adult🔺`) : console.log(`${name} is young🔻`);

// Better readable option
if ( age >= 18) {
    console.log(`${name} is an adult🔺`);
}else{
    console.log(`${name} is young🔻`);
}
console.groupEnd();

// Ejercicio 2 - Escribir una función flecha que tome un array de números y retorne la suma de todos ellos.

console.groupCollapsed('exercise.2');
let numbers = [10, 20, 5, 5, 15, 5];

// Callback
const sumarNumeros = (numbers) => {
    return numbers.reduce((acum, number) => acum + number, 0);
}

let result = sumarNumeros(numbers);

console.log(`Total is: ${result}`);
console.groupEnd();

// Ejercicio 3 - Pedir al usuario 3 notas, calcular su promedio e imprimir la calificación correspondiente.

console.group('exercise.3');
let howManyNotes = parseInt(prompt('How many grades wish to enter?'));
let a = 0;
let count = 0;
for (let i = 1; i <= howManyNotes; i++) {
    notes = parseInt(prompt(`Note N#${i}`))
    a += notes;
    count +=1;
}

console.log(`The average note is: ${a/count}`);
console.groupEnd();

// Ejercicio 4 - Ingresar un número y mostrar su tabla de multiplicar

console.group('exercise.4');
let numberToMultiplicate = parseInt(prompt(`Enter number to see the multiplication table`));

for(let i = 1; i <= 10; i++){
    console.log(numberToMultiplicate + ' x ' + i + ' = %c' + numberToMultiplicate*i, 'color: green;');
}
console.groupEnd();

// Ejercicio 5 - Pedir al usuario una frase y contar sus vocales.

console.group('exercise.5');
let phrase = prompt('Enter a phrase to count the vocals').toLowerCase();

contarVocales(phrase);

function contarVocales(phrase){
    console.log(`The phrase entered is: 
        %c${phrase}` , 'color: aqua;');
    const vocals = ['a', 'e', 'i', 'o', 'u'];
    let isVocal = 0;
    for (let i = 0; i <= phrase.length; i++) {
        for (const vocal of vocals) {
            if (phrase[i] == vocal) {
                isVocal++;
            }
        }
    }
    return console.log(`The number of vocals is: ${isVocal}`);
}

console.groupEnd();

// Ejercicio 6 - Ingresar un nombre y una edad, verificar que sus datos sean correctos y devolver diferentes mensajes segun que condición se cumpla.

console.groupCollapsed('exercise.6');
let isCorrect = (name = 'Not entered', age = 0) => {
    if (name === 'string' || age === 'number' || age >= 0) {
        return `Valid Data✅
        Name: ${name} 
        Age: ${age} (${age>=18 ? 'Adult' : 'Young' })`;
    }
    return `Invalid Data❌`;
}

console.log(isCorrect('Lucas', 22));
console.log(isCorrect());
console.log(isCorrect(22,'Lucas'));

console.groupEnd();

// Ejercicio 8 - A partir de un array con nombres, crear otro con los nombres en mayusculas, usando forEach para recorrer el array original.

console.groupCollapsed('exercise.8');

const originalNames = ['Lucas', "Estefani", 'Jorge', 'Manuel'];
const upperNames = [];

// Using .map
const newNames = originalNames.map((value) => {
    return value.toUpperCase();
});

// Using forEach
originalNames.forEach(name => {
    upperNames.push(name.toUpperCase());
})
console.table(upperNames);

console.groupEnd();

// Ejercicio 7 - Crear una funcion que reciba un mensaje y un tiempo en milisegundos, validando los datos y mostrando el mensaje despues del tiempo determinado.

console.group('exercise.7');

function message(msg, time, callback){
    if (typeof msg !== 'string' || typeof time !== 'number' || time <= 0) {
        return console.error('Invalid Data❌');
    }
    console.warn('Receiving message...');
    setTimeout( () => { 
        console.log(`${msg}. ${callback ? callback() : 'No Callback'}`); 
    }, time);
}

message("Message sended (4sec)", 4000, () => {
    return 'Callback executed.';
});
message("Message sended (7sec)", 7000);
message(7000, "Message sended (7sec)");

console.groupEnd();