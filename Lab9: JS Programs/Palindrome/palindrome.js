const str = prompt("Enter the string");

let rev = str.split("").reverse().join("");

if (rev === str) {
  document.write("Yes");
}
else {
  document.write("No");
}