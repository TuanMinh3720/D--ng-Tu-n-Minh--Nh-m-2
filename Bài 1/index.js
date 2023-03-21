function aBcd(n) {
  if (n < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function abcd() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var sum = 0;
  for (var i = a; i <= b; i++) {
    if (aBcd(i)) {
      sum += i;
    }
  }
  document.getElementById("Tong").innerHTML =
    "Tổng của các số nguyên tố" + a + " - " + b + " là " + sum;
}
