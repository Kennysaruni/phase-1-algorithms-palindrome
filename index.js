function isPalindrome(word) {
  // Write your algorithm here
  // Get the strings or numbers from the user.
  // Take a temporary variable that holds the numbers. 
  // Reverse the given number.
  // Compare the original number with the reversed number
  // If the temporary and original number are same, it the number or string is a Palindrome.
  // Else the given string or number is not the Palindrome.
    const len = word.length
    for(let i=0; i<len/2;i++){
      if (word[i] !== word[len - 1 - i]){
        return false
      }
    }
    return true
}  

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
