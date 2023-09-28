// Crear nuevo Array con .map()
// Este método creará un nuevo Array, con los resultados tras haber ejecutado una función directa.

let numeros = [1, 2, 3, 4, 5, 6, 7];
let cuadrados = numeros.map((num) => num * num);

console.log("Los cuadrados de " + numeros + " son: " + cuadrados);