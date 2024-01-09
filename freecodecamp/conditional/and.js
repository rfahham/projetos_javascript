// Às vezes, você precisará testar mais de uma coisa de cada vez. O operador lógico AND (&&) retornará true apenas se os operadores à esquerda e à direita forem verdadeiros.

// O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outro if.

function testLogicalAnd(num) {
  
    if (num <= 50 && num >= 25) {
    return "Yes";
  }
  
    return "No";
  }
  

  const result1 = testLogicalAnd(0);
  const result2 = testLogicalAnd(24);
  const result3 = testLogicalAnd(25);
  const result4 = testLogicalAnd(30);
  const result5 = testLogicalAnd(50);
  const result6 = testLogicalAnd(51);
  const result7 = testLogicalAnd(75);
  const result8 = testLogicalAnd(80);

  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)
  console.log(result5)
  console.log(result6)
  console.log(result7)
  console.log(result8)