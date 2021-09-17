const str = prompt("Enter the string");

let longest = longestString(str);

function longestString(str) {
  let arr = str.split(" ");
  let result = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (result < arr[i].length) {
      result = arr[i];
    }
  }
  return result;
}

document.write(longest);