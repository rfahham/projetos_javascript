// Se você tem múltiplas condições que precisam ser resolvidas, você pode encadear as instruções if junto com instruções else if.

function testElseIf(val) {
  
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  
const result = testElseIf(15);

console.log(result)