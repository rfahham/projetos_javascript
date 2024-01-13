function isColor(data) {
    if(data == "red")
    {
        return "vermelho"
    } else if(data == "blue")
    {
        return "azul"
    } else if(data == "green")
    {
        return "verde"
    } else if(data == "yellow")
    {
        return "amarelo"
    } else
    {return "não é cor"}
}

console.log(isColor("yellow"))

