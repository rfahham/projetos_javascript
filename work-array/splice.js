// removendo um item do array

let array = [1,2,3,4,5,6];

// Remove o item do array
let index = array.indexOf(5);

array.splice(index, 1)

console.log(array)

// outra opção é usando o filter

let otherArray = [1,2,3,4,5,6];

let newArray = otherArray.filter(item => item !== 3);
console.log(newArray)