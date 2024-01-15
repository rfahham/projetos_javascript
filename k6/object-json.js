const pessoa = {
    nome: "Ricardo",
    idade: 53
}
console.log("Este é um object")
console.log(typeof pessoa, pessoa)

//Convertendo o object para json
const convertToJson = JSON.stringify(pessoa)
console.log("Este é um JSON")
console.log(typeof convertToJson, convertToJson)

//Convertendo um json para objeto
const convertToObject = JSON.parse(convertToJson)
console.log("Este é um JSON convertido para object")
console.log(typeof convertToObject, convertToObject)