// Ecuación cuadrática

const a = parseFloat(prompt('Valor de a:'))
const b = parseFloat(prompt('Valor de b:'))
const c = parseFloat(prompt('Valor de c:'))

const resultado1 = (-b + Math.sqrt((b*b)-(4*a*c)))/(2*a)
const resultado2 = (-b - Math.sqrt((b*b)-(4*a*c)))/(2*a)

console.log(`El resultado es x1 = ${resultado1.toFixed(2)}, x2 = ${resultado2.toFixed(2)}`);