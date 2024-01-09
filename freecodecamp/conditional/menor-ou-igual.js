// O operador menor ou igual (<=) compara os valores de dois números. Se o número à esquerda for menor ou igual ao número à direita, retornará true. Se o número à esquerda for maior que o número a direita, retornará false. Assim como o operador de igualdade, o operador de menor ou igual que converte os tipos de dados.

function testLessOrEqual(val) {
    if (val <= 12) {  // Altere esta linha
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Altere esta linha
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  

  const result1 = testLessOrEqual(0);
    const result2 = testLessOrEqual(11);
    const result3 = testLessOrEqual(12);
    const result4 = testLessOrEqual(23);
    const result5 = testLessOrEqual(24);
    const result6 = testLessOrEqual(25);
    const result7 = testLessOrEqual(55);
  
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    console.log(result5)
    console.log(result6)
    console.log(result7)