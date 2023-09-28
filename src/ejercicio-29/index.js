// Crear nuevo array con .filter().


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numeros.filter((num) => num % 2 === 0);

console.log("Los números pares de esta lista " + numeros + " son: " + pares)
