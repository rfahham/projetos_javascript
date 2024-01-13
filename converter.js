// Converter numero em valor

const valor = 1000

const formatoMoeda = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

const valorFormatado = formatoMoeda.format(valor);

console.log(valorFormatado);


