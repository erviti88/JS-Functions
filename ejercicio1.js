/* **Iteración #1: Buscar el máximo**

Completa la función que tomando dos números como argumento devuelva el más alto. */

function sum(numberOne , numberTwo) {

    if (numberOne > numberTwo) {

        console.log(numberOne +' es mayor');
        
        return numberOne;

    } else {

        if (numberOne == numberTwo) {

            console.log('Los números son iguales')

        }

        else {

            console.log(numberTwo +' es mayor');

            return numberTwo;

        }
    }
}

sum(2,9);
sum(8,2);
sum(10,10);


  