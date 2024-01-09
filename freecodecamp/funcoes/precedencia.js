// É possível ter as variáveis local e global com o mesmo nome. Quando você faz isso, a variável local tem precedência sobre a variável global.

// Configuração
const outerWear = "T-Shirt";

function myOutfit() {

  const outerWear = "Sweater";

  return outerWear;
}

myOutfit();