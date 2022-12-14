/* **Iteración #5: Calcular promedio de strings**

Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(mixedElements) {
  
    let sum = 0;

    for (let i = 0; i < mixedElements.length; i++) {
        if (typeof mixedElements[i] === 'number') {
            sum += mixedElements[i];
        }
        else if (typeof mixedElements[i] ==='string') {
            sum += mixedElements[i].length;
        }
    }
    
    return sum / mixedElements.length;
}

console.log('El promedio de los números y strings del array es igual a:', averageWord(mixedElements));