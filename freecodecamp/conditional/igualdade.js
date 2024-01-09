// Há muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor booleano true ou false.

// O operador mais básico é o operador de igualdade ==. 
// O operador de igualdade compara dois valores e retorna true se eles são equivalentes ou false se não são. 
// Observe que o operador de igualdade é diferente do operador de atribuição (=), que atribui o valor à direita do operador para uma variável à esquerda.

// Configuração
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  testEqual(12);
  testEqual("12")