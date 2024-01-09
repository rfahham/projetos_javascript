// O operador menor que (<) compara os valores de dois números. Se o número à esquerda for menos que o número à direita, retornará true. Caso contrário, retorna false. Assim como o operador de igualdade, o operador menor que converte os tipos de dados enquanto compara.

function testLessThan(val) {
    if (val < 25) {  // Altere esta linha
      return "Under 25";
    }
  
    if (val < 55 ) {  // Altere esta linha
      return "Under 55";
    }
  
    return "55 or Over";
  }
  

    const result1 = testLessThan(0);
    const result2 = testLessThan(24);
    const result3 = testLessThan(25);
    const result4 = testLessThan(54);
    const result5 = testLessThan(55);
    const result6 = testLessThan(99);
  
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
    console.log(result5)
    console.log(result6)