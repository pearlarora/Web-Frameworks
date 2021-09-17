const str = prompt("Enter a string");

let vowels = countVowels(str);

function countVowels(str) {
  // RegEx is used to find the number of vowels in the entered string
  // gi checks the match of the alphabets given to match globally and case-insensitive
  return str.match(/[aeiou]/gi).length;
}

document.write(vowels);
