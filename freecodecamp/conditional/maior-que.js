// O operador maior que (>) compara os valores de dois números. Se o número à esquerda for maior que o número à direita, ele retorna true. Caso contrário, ele retorna false.

// Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.

function testGreaterThan(val) {
    if (val > 100) {  // Altere esta linha
      return "Over 100";
    }
  
    if (val > 10) {  // Altere esta linha
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
    const result1 = testGreaterThan(0);
    const result2 = testGreaterThan(10);
    const result3 = testGreaterThan(11);
    const result4 = testGreaterThan(99);
    const result5 = testGreaterThan(101);
    const result6 = testGreaterThan(150);
  
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    console.log(result5)
    console.log(result6)