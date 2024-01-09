// O operador lógico OR (||) retorna true se qualquer um dos operandos for true. Caso contrário, retorna false.

// O operador lógico ou é composto por dois símbolos de pipe: (||). Normalmente, ele pode ser encontrado entre as teclas Backspace e Enter.

// O padrão abaixo deve parecer familiar a partir de pontos de passagem anteriores.

function testLogicalOr(val) {
    
    if (val < 10 || val > 20) {
        return "Outside";
      }

    return "Inside";
  }

const result1 = testLogicalOr(0);
const result2 = testLogicalOr(9);
const result3 = testLogicalOr(10);
const result4 = testLogicalOr(15);
const result5 = testLogicalOr(19);
const result6 = testLogicalOr(20);
const result7 = testLogicalOr(21);
const result8 = testLogicalOr(21);

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)