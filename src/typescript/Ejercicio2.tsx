import React from 'react'

export const Ejercicio2 = () => {

    function sumarNumeros(num: number[]): number {
        //reduce: callback para acumular la cantidad con parametros y valor inicial en cero
        return num.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    }
    //Se ingresa las cantidades y se llama a la funcion
    const cantidades = [2, 4, 7, 3, 5];
    const suma = sumarNumeros(cantidades);
  return (
    <div>
        <h2> EJERCICIO 2</h2>
        <p>La cantidad es : {suma}</p>
    </div>
  )
}
