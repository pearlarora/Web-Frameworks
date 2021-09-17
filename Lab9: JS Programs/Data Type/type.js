// Write a JavaScript function which accepts an argument and returns the type

const variable = prompt("Enter the variable");

let type = checkType(variable);

function checkType(variable) {
  return typeof variable;
}

document.write(type);
