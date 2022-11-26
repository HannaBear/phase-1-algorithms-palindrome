
function isPalindrome(word) {
  
  let revWord = word.split("").reverse().join("");
  //splitting the word into an array of letters, reversing the array, and then joining the array
  
  if (word === revWord){
    return true
  } else {
    return false
  }
  // comparing if the word is the same when reversed
  }

console.log(isPalindrome("abba"))
console.log(isPalindrome("racecar"))
console.log(isPalindrome("a"))
console.log(isPalindrome("robot"))
console.log(isPalindrome("ab"))

/* 

takes in a string
makes string backwards
compares strings
if same, will return true,
if different, will return false
*/

/*

^

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
