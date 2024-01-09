// .unshift()funciona exatamente como .push(), mas em vez de adicionar o elemento no final do array, unshift()adiciona o elemento no início do array.


// myArrayagora deve ter: [["Paul", 35], ["dog", 3]].

// Setup
const myArray = [["John", 23], ["dog", 3]];
console.log(myArray)
// [ [ 'John', 23 ], [ 'dog', 3 ] ]

// Removendo o ["John", 23]
myArray.shift();
console.log(myArray)
// [ [ 'dog', 3 ] ]

// Only change code below this line
myArray.unshift(["Paul", 35])
console.log(myArray)
// [ [ 'Paul', 35 ], [ 'dog', 3 ] ]