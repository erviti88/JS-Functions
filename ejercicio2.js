/* **Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que
dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {

    if (array.length === 0) {
        return null;
    }

    let longestString = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestString.length) {
            longestString = array[i];
        }
    }
    
    return longestString;
}

console.log(findLongestWord(avengers));