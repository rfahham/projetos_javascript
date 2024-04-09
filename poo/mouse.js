class Mouse {
    
    marca;
    cor;
    conectividade;
    sobre;
    
    
    // seters
    
    setMarca(marca) {
        this.marca = marca;
    }

    setCor(cor) {
        this.cor = cor;
    }

    setConectividade(conectividade) {
        this.conectividade = conectividade;
    }

    setSobre(sobre) {
        this.sobre = sobre;
    }

    // getters

    getMarca() {
        return this.marca;
    }

    getCor() {
        return this.cor;
    }

    getConectividade() {
        return this.conectividade;
    }

    getSobre() {
        return this.sobre;
    }

}

let mouse1 = new Mouse();
mouse1.setMarca("Logitech");
mouse1.setCor("cinza");
mouse1.setConectividade("wi-fi");
mouse1.setSobre("Mouse sem fio Logitech M170");

console.log("Marca: " + mouse1.getMarca());
console.log("Cor: " + mouse1.getCor());
console.log("Conectividade " + mouse1.getConectividade());
console.log("Sobre: " + mouse1.getSobre());