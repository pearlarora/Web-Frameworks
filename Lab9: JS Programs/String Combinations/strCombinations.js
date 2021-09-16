const str = prompt("Enter the string to get all of its combinations");

let combinations = [];
for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j <= str.length; j++) {
    // .push is used to push an element in an array in javascript
    // .slice returns the specific element of an array to another array in javascript
    combinations.push(str.slice(i, j));
  }
}

document.write(combinations);