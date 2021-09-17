// Write a JavaScript function which returns the n rows by n columns identity matrix

const n = parseInt(prompt("Enter the number of rows and columns"));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i == j) {
      document.write("1 ");
      continue;
    }
    document.write("0 ");
  }
  document.write("<br>");
}