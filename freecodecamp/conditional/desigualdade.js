// O operador de desigualdade (!=) é o oposto do operador de igualdade. Significa que não é igual e retorna false onde a igualdade retornaria true e vice-versa. Tal como o operador de igualdade, o operador de desigualdade converterá os tipos de dados de valores enquanto compara.

// 1 !=  2    // true
// 1 != "1"   // false
// 1 != '1'   // false
// 1 != true  // false
// 0 != false // false

// Configuração
function testNotEqual(val) {
    if (val != 99) { // Altere esta linha
      return "Not Equal";
    }
    return "Equal";
  }
  
  const result1 = testNotEqual(99);
  const result2 = testNotEqual("99");
  const result3 = testNotEqual(12);
  const result4 = testNotEqual("12");
  const result5 = testNotEqual("bob");
  
  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)
  console.log(result5)