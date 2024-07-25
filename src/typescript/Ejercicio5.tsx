import React, { useState } from 'react'

export const Ejercicio5 = () => {
    //UseState: Permite cambiar el estado de un componente
    const [valorContador, setValorContador] = useState<number>(0);

    //funcion qque permite cambiar el valor del contador
    const cambiarContador = (numero: number) => {
        
        setValorContador(valorContador + numero);
    }

  return (
    <div>
        <h3>EJERCICIO 5: <small>{valorContador}</small></h3>
        <button className='btn btn-primary'
        onClick={()=> cambiarContador(5)}>
            +5
            </button>
        &nbsp;
        <button className='btn btn-primary'
        onClick={()=> cambiarContador(-5)}>
            -5</button>
    </div>
  )
}