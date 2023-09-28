// Reducir un Array a un solo valor, utilizando el método .reduce()

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = numeros.reduce((total,num) => total + num, 0);

console.log(sum)
// Dentro de la función, el número 0 es la inicialización del contador de la variable total.
