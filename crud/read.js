const personJSON = localStorage.getItem("person");

const JSONToPerson = JSON.parse(personJSON);

console.log(JSONToPerson);
