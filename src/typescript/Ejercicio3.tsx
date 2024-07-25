import React from 'react'

export const Ejercicio3 = () => {

    const arreglo: number [] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    //Map: itera sobre cada valor del arreglo y ejecuta valor/5 para almacenarlo en un nuevo arreglo son alterar el anterior
    const nuevoArreglo : number []=arreglo.map(valor => valor/5);
  return (
    <div>
        <h2>EJERCICIO 3</h2>
        El nuevo arreglo es : {nuevoArreglo}
    </div>
  )
}
