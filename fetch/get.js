fetch('https://dummyjson.com/user/2')
.then(data => {
    return data.json();
})
.then((response) => {
    console.log(response);
}).catch((erro) => {
    console.log(erro)
});