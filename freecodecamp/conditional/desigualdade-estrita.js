// O operador de desigualdade estrito (!==) é o oposto lógico do operador de igualdade estrito. Significa que "não é estritamente igual" e retorna false onde a igualdade estrita retornaria true e vice-versa. O operador de desigualdade estrita não converterá tipos de dados.

// Configuração
function testStrictNotEqual(val) {
    if (val !== 17) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  const result1 = testStrictNotEqual(17);
  const result2 = testStrictNotEqual("17");
  const result3 = testStrictNotEqual(12);
  const result4 = testStrictNotEqual("Bob");
  
  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)