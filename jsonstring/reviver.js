var jsonString = '{"name": "Ricardo Fahham", "age": 51, "city": "Petrópolis"}';

var obj = JSON.parse(jsonString, function (key, value){
    if (key === "age") {
        return value + 1;
    }
    return value;
});

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

