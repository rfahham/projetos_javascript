// Quando uma condição para uma instrução if for verdadeira, o bloco de código seguinte será executado. E quando a condição for falsa? Normalmente, nada aconteceria. Com uma instrução else, um bloco de código alternativo pode ser executado.

function testElse(val) {
    let result = "";
    // Altere apenas o código abaixo desta linha
  
    if (val > 5) {
      return "Bigger than 5";
    } else {
      return "5 or Smaller";
    }
  
    // Altere apenas o código acima desta linha
    return result;
  }
  
  const result1 = testElse(4);
  const result2 = testElse(5);
  const result3 = testElse(6);
  const result4 = testElse(10);
  
  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)