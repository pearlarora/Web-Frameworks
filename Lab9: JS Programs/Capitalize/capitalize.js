const str = prompt("Enter the string to capitalize");

let cap = capitalizeString(str);

function capitalizeString(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    // Capitalizing the alphabet at 0th index of the array and concatinating the rest of the string using slice from 1st index position
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

document.write(cap);