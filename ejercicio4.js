/* **Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    if (array.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];  
    }

    return sum / array.length;
}

console.log('El promedio de los números del array es igual a:', average(numbers));