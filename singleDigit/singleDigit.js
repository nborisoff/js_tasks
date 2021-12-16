function singleDigit(n) {
  let sum = n.toString(2).replace(/0/g, "").length;
  
  if ((n+'').length == 1) {
    return n;
  } else {
    while (sum > 9) {
      sum = sum.toString(2).replace(/0/g, "").length;
    }
    return sum;
  }
}