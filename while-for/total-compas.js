let produtos = [
    {nome : 'Arroz', preco : 8 },
    {nome : 'Feijão', preco : 8 },
    {nome : 'Carne', preco : 25 },
    {nome : 'Suco', preco : 9 },
    {nome : 'Leite', preco : 4 },
    {nome : 'Refrigerante', preco : 5 }
];

let total = 0;
for(let i=0; i < produtos.length; i++) {
    total = total + produtos[i].preco;
}

console.log('Total da compra = '+ total);

