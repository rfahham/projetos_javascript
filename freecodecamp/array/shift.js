// Remove o primeiro Elemento, diferente do pop que remove o último

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line

console.log(myArray)

// [ [ 'John', 23 ], [ 'dog', 3 ] ]

const removedFromMyArray = myArray.shift();

console.log(removedFromMyArray)
// [ 'John', 23 ]