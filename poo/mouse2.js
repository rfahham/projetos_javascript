class Mouse {
    constructor(marca, cor, conectividade, sobre){
        this.marca = marca,
        this.cor = cor,
        this.conectividade = conectividade,
        this.sobre = sobre
    }
}

let mouse1 = new Mouse('Logitech', 'cinza', 'wi-fi', 'Mouse sem fio Logitech M170')

let mouse2 = new Mouse('Microsoft', 'preto', 'usb', 'Mouse usb Microsoft 1113')

console.log("Marca: " + mouse2.marca)
console.log("Cor: " + mouse2.cor)
console.log("Conectividade: " + mouse2.conectividade)
console.log("Sobre: " + mouse2.sobre)
