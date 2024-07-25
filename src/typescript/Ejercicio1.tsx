import React from 'react'

export const Ejercicio1 = () => {

    const calcular = (lado1:number, lado2:number): number => {
        return lado1 * lado2;
    }
  return (
    <div>
        <h3>EJERCICIO 1</h3>
        <p>El resultado es : {calcular(5, 5)}</p>
    </div>
  )
}
