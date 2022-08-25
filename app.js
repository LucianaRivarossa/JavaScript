let cantidadAlumnos = Number(prompt("Ingrese la cantidad de alumnos"))
let d=0
let a=0
let promedio =0
let suma=0
for (let i=1; i<= cantidadAlumnos;i++){
    let nota = Number(prompt(`Ingrese nota del alumno ${i}`))
    let nombre = Number(prompt(`Ingrese nombre del alumno ${i}`))
    if (nota<6)
    {
        d++
        alert(`El alumno ${nombre} está desaprobado`)
    }   
    else 
    {
        a++
        alert(`El alumno ${nombre} está aprobado`)
    }
    suma +=nota
    promedio = suma/cantidadAlumnos
}
alert(`La cantidad de alumnos desaprobados es ${d}`)
alert(`La cantidad de alumnso aprobados es ${a}`)
alert(`El promedio de notas del curso completo es  ${promedio}`)