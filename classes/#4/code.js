// 1. Funcion con un parametro

function mostrarEdad (edad){
    return `Tienes ${edad} años.`
}

const edad = mostrarEdad(21);

console.log(edad);

// 2. Funcion con múltiples parámetros

function calcularArea(base, altura){
    return base * altura;
}

const rectangulo = calcularArea(20,10);

console.log(`El area del rectangulo es ${rectangulo}`);