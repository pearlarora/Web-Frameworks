const n = parseInt(prompt("Enter a number"));

let bool = isPrime(n);

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

document.write(bool);
