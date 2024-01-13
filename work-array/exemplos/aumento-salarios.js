
console.log("Lista dos salários")
console.log("------------------")
let salarios = [1000, 2000, 3000, 4000, 5000]
console.log("Salários Atuais:", salarios)

console.log("Dobrando os salários")
let dobrandoSalario = salarios.map(n => n * 2)
console.log(dobrandoSalario);

console.log("10% de aumento dos salários")
let aumento10porcento = salarios.map(n => n * 0.10)
console.log(aumento10porcento);

console.log("20% de aumento dos salários")
let aumento20porcento = salarios.map(n => n * 0.20)
console.log(aumento20porcento);

console.log("50% de aumento dos salários")
let aumento50porcento = salarios.map(n => n * 0.50)
console.log(aumento50porcento);