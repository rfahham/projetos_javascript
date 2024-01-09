const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
      return "Hole-in-one!";
    } else if (strokes === 2) {
      return "Eagle";
    } else if (strokes === 3) {
      return "Birdie";
    } else if (par === 4 && strokes === 4) {
      return "Par";
    } else if (par ===4 && strokes ===5) {
      return "Bogey";
    } else if (par ===4 && strokes ===6) {
      return "Double Bogey";
    } else if (par >=4 && strokes >=7) {
      return "Go Home!";
    } else if (par ===5 && strokes ===5) {
      return "Par";
}
  return "Change Me";
}

const result1 = golfScore(4, 1);
const result2 = golfScore(4, 2);
const result3 = golfScore(5, 2);
const result4 = golfScore(4, 3);
const result5 = golfScore(4, 4);
const result6 = golfScore(1, 1);
const result7 = golfScore(5, 5);

console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)
console.log(result7)