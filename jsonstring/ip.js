var jsonString = '{"ip_addr":"179.233.119.190","remote_host":"unavailable","user_agent":"k6/0.44.1 (https://k6.io/)","port":"50152","method":"GET","via":"1.1 google","forwarded":"179.233.119.190, 34.160.111.145,35.191.41.28"}';

var obj = JSON.parse(jsonString, function (key, value){
    if (key === "age") {
        return value + 1;
    }
    return value;
});

console.log("O IP é: " + obj.ip_addr);
console.log("User Agent: " + obj.user_agent);
console.log("Método: " + obj.method);
