console.log("Qual é o tipo da variável ?");
console.log("---------------------------");

const text = "Ricardo Fahham";
console.log(text, "- This is a", typeof text);

const num = 52;
console.log(num, "- This is a", typeof num);

const flag = true;
console.log(flag, "- This is a", typeof flag);

const obj = { name: "Ricardo Fahham", age: 52, city: "Petrópolis"};
console.log(obj, "- This is an", typeof obj);

function greet(name) {
    return `Hello, ${name}!`;
}

greet("Ricardo Fahham")

console.log("This is a", typeof greet);

let notDefinied;
console.log("This is a", typeof notDefinied);