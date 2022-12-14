/* **Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que
dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función: */

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {

    if (avengers.length === 0) {
        return null;
    }

    let longestString = avengers[0];

    for (let i = 0; i < avengers.length; i++) {
        if (avengers[i].length > longestString.length) {
            longestString = avengers[i];
        }
    }
    
    return longestString;
}

console.log(findLongestWord(avengers));