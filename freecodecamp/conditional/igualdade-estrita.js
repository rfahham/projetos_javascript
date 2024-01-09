// Igualdade estrita (===) é a contrapartida do operador de igualdade (==). No entanto, ao contrário do operador de igualdade, que tenta converter ambos os valores em comparação a um tipo comum, o operador estrito de igualdade não realiza uma conversão de tipo.

// Se os valores que são comparados tiverem valores diferentes, são considerados desiguais, e o operador de igualdade estrito retornará falso.

// Configuração
function testStrict(val) {
    if (val === 7) { // 7 é um número inteiro
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10); // Not Equal - porque 10 é diferente de 7
  testStrict(7); // Equal - porque 7 é igual a 7
  testStrict("7") // comparando um inteiro com uma string
