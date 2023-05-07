// Declare the myGlobal variable below this line
const myGlobal = 10;
const oopsGlobal = 5;

// Only change code above this line

function fun() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun()