let n = prompt("Enter the number to be reversed");

// By reversing the number using while
// let temp = "",
//   rev = "";

// while (n > 0) {
//   temp = n % 10;
//   rev = rev * 10 + temp;
//   n = Math.floor(n / 10);
// }

// By using predefined functions - split(), reverse(), join()
let rev = n.split("").reverse().join("");

document.write(rev);
