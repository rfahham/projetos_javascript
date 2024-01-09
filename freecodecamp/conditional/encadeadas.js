// Instruções if/else podem ser encadeadas por uma lógica complexa. Aqui está o pseudocódigo de várias instruções encadeadas if/else if:

function testSize(num) {

    if(num < 5) {
      return "The size is Tiny";
    } else if (num < 10) {
      return "The size is Small";
    } else if (num < 15) {
      return "The size is Medium";
    } else if (num < 20) {
      return "The size is Large";
    } else if (num >= 10) {
      return "The size is Huge";
    } 

  }
  
const result1 = testSize(0);
const result2 = testSize(4);
const result3 = testSize(5);
const result4 = testSize(8);
const result5 = testSize(10);
const result6 = testSize(14);
const result7 = testSize(15);
const result8 = testSize(17);
const result9 = testSize(20);
const result10 = testSize(25);


console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)
console.log(result8)
console.log(result9)
console.log(result10)