const person = {
    name: "Ricardo Fahham",
    age: 51
}

const personToJSON = JSON.stringify(person);

localStorage.setItem("person", personToJSON);