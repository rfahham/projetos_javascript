// This method convets a Javascript value (Json object) to a JSON string representation.

let obj = { name: "Ricardo Fahham", 
            age: 52, 
            city: "Petrópolis"};

//Obsoleto
let jsonString = JSON.stringify(obj);
console.log(jsonString);

//Novo The 3rd parameter '2' format the output with 2 spaces of indentation.
const format = JSON.stringify(obj, null, 2);
console.log(format);