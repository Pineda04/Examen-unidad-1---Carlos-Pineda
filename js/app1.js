// Ejercicio 1 - Planilla salarial

const numPlanilla = prompt('Número de planilla: ') 
const nombreEmpresa = prompt('Nombre de la empresa: ') 

const cantidad = parseInt(prompt('Cantidad de empleados que desea agregar: '))

let nombre
let salBase
let prestamos
let adelanto
let ihhs
let infop
let total
let totalPlanilla

for(let i=0;i<cantidad;i++){
    nombre = prompt('Nombre del empleado: ')
    salBase = parseFloat(prompt('Salario base del empleado: '))
    prestamos = parseFloat(prompt('Prestamos del empleado: '))
    adelanto = parseFloat(prompt('Adelanto del sueldo: '))
    ihhs = salBase * 0.035
    infop = salBase * 0.015
    total =  parseFloat(salBase - prestamos - adelanto - ihhs - infop)
    totalPlanilla = total + total

    const planilla = {
        name: nombre,
        sueldo: salBase,
        pres: prestamos,
        adel: adelanto,
        ihhs: ihhs,
        infop: infop,
        total: total
    }

    console.log(`Planilla\nNúmero:${numPlanilla}\nEmpresa:${nombreEmpresa}\nEmpleado ${i+1}:\n
    Nombre: ${planilla.name}\n
    Sueldo Base: ${planilla.sueldo.toFixed(2)}\n
    IHSS: ${planilla.ihhs.toFixed(2)}\n
    INFOP: ${planilla.infop.toFixed(2)}\n
    Adelanto: ${planilla.adel.toFixed(2)}\n
    Prestamo: ${planilla.pres.toFixed(2)}\n
    Total a pagar: ${planilla.total.toFixed(2)}\n
    Total de la planilla: ${totalPlanilla.toFixed(2)}`)
}