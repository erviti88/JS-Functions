/* **Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
Puedes usar este array para probar tu función: */

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function countWords(counterWords) {

    const contador = [];

    for (const word of counterWords) {
      if (contador[word]){
        contador[word]++;
      }  else {
        contador[word] = 1;
      }
    }
    return contador;
}

console.log(countWords(counterWords));