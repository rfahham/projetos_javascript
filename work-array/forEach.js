// Perconrrendo o objeto

let list = [
    {name: "Ricardo Fahham", bonus: 2000},
    {name: "Alessandra Miranda", bonus: 2000},
    {name: "João Ricardo Fahham", bonus: 1000},
    {name: "João Victor Fahham", bonus: 1000},
    {name: "Andreza Fahham", bonus: 1000}

]

list.forEach((element, index) => {
    console.log(element)
    console.log('Nome:', element.name)
    console.log('Valor do Bonus:', element.bonus)
});

console.log('------------------------------------------------')
console.log('Imprimindo a lista completa do array:')
list.forEach(x => console.log(x))


console.log('------------------------------------------------')
console.log('Imprimindo o primeiro item da lista do array:')
console.log(list[0])

console.log('------------------------------------------------')
console.log('Imprimindo o último item da lista do array:')
console.log(list.at(-1))

// $ node forEach.js

