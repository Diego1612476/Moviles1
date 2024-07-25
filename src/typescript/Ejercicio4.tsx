import React from 'react'

//interface
interface Alumno{
    nombre: String;
    edad: number;
    calificacion: number;
}

export const Ejercicio4 = () => {
//enlaza objeto con la interfaz
    const alumnos: Alumno[] =[
        {
            nombre: "Vivivana",
            edad: 19,
            calificacion:10,
        },
        {
            nombre: "Wendy",
            edad: 20,
            calificacion:8,
        },
        {
            nombre: "Gerson",
            edad: 18,
            calificacion:9,
        }
    ]
//Funcion que permite tomar el arreglo de objetos para calcular mediante la funcion reduce realizando la suma de las calificaciones
//y dividiendo para la cantidad de alumnos con e valor inicial en cero
    function promedio(alumnos: Alumno[]): number {
        const promedioTotal= alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
        return promedioTotal / alumnos.length;
    }
//llamar a la funcion
    const promedioF = promedio(alumnos);
  return (
    <div>
        <h2>EJERCICIO 4</h2>
        <p>El promedio total es: {promedioF}</p>

    </div>
  )
}
