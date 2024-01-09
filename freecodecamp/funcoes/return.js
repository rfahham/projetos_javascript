// Retornar um valor de uma função com return

// Nós podemos passar valores para uma função com argumentos. Você pode usar uma instrução return para enviar um valor para fora de uma função.


console.log("Somando")
console.log("-------") 

function plusThree(num) {
    return num + 3;
  }
  
const plus = plusThree(5);

console.log(plus)

console.log("Multiplicando")
console.log("-------------") 

function timesFive(num) {
    return num * 5;
  }
  
const times = timesFive(5);

console.log(times)

console.log("-------------") 

function timesFive(num) {
  return num * 5;
}

const times1 = timesFive(5)
const times2 = timesFive(2)
const times3 = timesFive(0)

console.log(times1)
console.log(times2)
console.log(times3)