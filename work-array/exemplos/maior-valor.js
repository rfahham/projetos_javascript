let numeros = [23, 33, 55, 4, 9, 100, 500, 12, 26, 3]

let maiorNumeroEncontrado = 0;

for (let i = 0; i < numeros.length; i++) {
    let numeroDoArray = numeros[i];

    if(numeroDoArray > maiorNumeroEncontrado) {
        maiorNumeroEncontrado = numeroDoArray;
    }
}

console.log(maiorNumeroEncontrado);