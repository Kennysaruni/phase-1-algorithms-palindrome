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
//initialise a variable that holds the string length
//use the string length on the for loop to iterate to half the words length
//in the for loop include an if to check whether corresponding characters in the two halves are equal
// if they are return true
//if not return false

/*
  Add written explanation of your solution here
*/
//The length of the string is calculated using the length built in function
//the for loop iterates to half of the string 
//the if checks whether the correspinding last and forst characters are the same 
// if they arent equal it is considered a palindrome

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
