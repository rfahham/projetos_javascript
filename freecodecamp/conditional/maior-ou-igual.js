// O operador maior ou igual que (>=) compara os valores de dois números. Se o número à esquerda é maior ou igual ao número à direita, ele retorna true. Caso contrário, ele retornará false.

// Tal como o operador de igualdade, o operador maior que converterá os tipos de dados de valores enquanto compara.

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Altere esta linha
      return "20 or Over";
    }
  
    if (val >= 10) {  // Altere esta linha
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  

  const result1 = testGreaterOrEqual(0);
    const result2 = testGreaterOrEqual(9);
    const result3 = testGreaterOrEqual(10);
    const result4 = testGreaterOrEqual(11);
    const result5 = testGreaterOrEqual(19);
    const result6 = testGreaterOrEqual(100);
    const result7 = testGreaterOrEqual(21);
  
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    console.log(result5)
    console.log(result6)
    console.log(result7)