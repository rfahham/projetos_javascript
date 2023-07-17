const person = { 
    firstname: "Ricardo",
    lastname: "Fahham",
    age: 52, 
    adress: "Rua General", 
    city: "Petrópolis", 
    greet: function() {console.log(`Hello, ${this.firstname} ${this.lastname} from ${this.city}`)}

};

person.greet();
