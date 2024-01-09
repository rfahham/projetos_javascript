// instruções if são usadas para tomar decisões no código. A palavra-chave if diz ao JavaScript para executar o código nas chaves sob certas condições, definidas nos parênteses. Essas condições são conhecidas como condições Boolean e elas só podem ser true ou false.

// Quando a condição for true, o programa executará as instruções dentro das chaves. Quando a condição booleana for false, as instruções dentro das chaves não serão executadas.


function test(myCondition) {
    if (myCondition) {
      return "It was true";
    }
    return "It was false";
  }
  
  test(true);
  test(false);