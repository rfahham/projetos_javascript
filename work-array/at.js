let bikes = ["Yamaha", "Honda", "Kawazaki", "Ducati", "Harley-Davidson", "BMW"];

console.log('------------------------------------------------')
console.log('Lista completa do array:')
console.log(bikes.flat())
console.log('------------------------------------------------')
console.log('O último item do array é:', bikes[bikes.length -1])
console.log(bikes.at(-1))
console.log('------------------------------------------------')
console.log('Lista do array usando forEach:')
bikes.forEach(x => console.log(x))
console.log('------------------------------------------------')

