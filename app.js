let cantidadAlumnos = Number(prompt("Ingrese la cantidad de alumnos"))
let d=0
let a=0
let promedio =0
let suma=0
for (let i=1; i<= cantidadAlumnos;i++){
    let nota = Number(prompt(`Ingrese nota del alumno ${i}`))
    if (nota<6)
    {
        d++
        alert(`alumno desaprobado`)
    }   
    else 
    {
        a++
        alert(`alumno aprobado`)
    }
    suma +=nota
    promedio = suma/cantidadAlumnos
}
alert(`La cantidad de alumnos desaprobados es ${d}`)
alert(`La cantidad de alumnso aprobados es ${a}`)
alert(`El promedio de notas de los alumnos es ${promedio}`)