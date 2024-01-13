function pedirPizza(callbackAviso) {

    setTimeout(function(){
        const pizzaPronta = {
            sabor: 'Parisiense',
            preço: 65
        }
        return callbackAviso(pizzaPronta);
    }, 1000)

}

pedirPizza(function(pizza) {
    console.log(pizza);
})