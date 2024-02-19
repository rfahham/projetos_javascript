let preco = 200;
let total = preco;
let regiao = 'Sul';
let freteGratis = (preco > 150 && regiao == 'Sudeste');
let clientePremium = false;

// Caso o Frete não atenda aos requisitos para desconto
if(!freteGratis){
    total += 25;
}

// Desconto para Cliente Premium ou compra acima de 220
if(clientePremium || total >= 220){
    total -= 15;
}

console.log('O preço total é:',total);
