function caseInSwitch(val) {
    
    let answer = "";

    switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
    return answer;
  }
  
  const result1 = caseInSwitch(1);
  const result2 = caseInSwitch(2);
  const result3 = caseInSwitch(3);
  const result4 = caseInSwitch(4);

  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)