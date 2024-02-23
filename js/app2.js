// Registro de alumnos

const alumnos = parseInt(prompt('Cantidad de alumnos que desea ingresar: '))

for(let i=1; i<= alumnos;i++){
    let nombre = prompt(`Nombre del alumno ${i}: `)
    let edad = parseInt(prompt(`Edad del alumno ${i}: `))
    let nota = parseFloat(prompt(`Calificación del alumno ${i}: `))
    let estado
    if(nota>=65){
        estado = 'Aprobado'
    }else{
        estado = 'Reprobado'
    }

    const alumno = {
        name: nombre,
        age: edad,
        note: nota,
        status: estado
    }

    const listaAlumnos = [alumno]

    console.table(listaAlumnos)
}