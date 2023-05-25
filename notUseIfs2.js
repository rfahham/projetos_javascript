function isColor(data) {
    const result = {
        red: "vermelho",
        blue: "azul",
        green: "verde",
        yellow: "amarelo"
    }
    return result[data]  || "Não é uma cor"
}

console.log(isColor("green"))

