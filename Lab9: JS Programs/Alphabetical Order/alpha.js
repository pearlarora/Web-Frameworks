const str = prompt("Enter the string");

let alpha = sortAlpha(str);

function sortAlpha(str) {
  return str.split("").sort().join("");
}

document.write(alpha);