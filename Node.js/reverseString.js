/*
Problem Statement:
Write a function that reverses a string. The input string is given as an array of
 characters s. You must do this by modifying the input array in-place with O(1) 
extra memory.

Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
  s[i] is a printable ascii character.

  */
// Solution:
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    // Swap characters
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    // Move towards the middle
    start++;
    end--;
  }
};

// Test the function
let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s); // ["o","l","l","e","h"]

s = ["H", "a", "n", "n", "a", "h"];
reverseString(s);
console.log(s); // ["h","a","n","n","a","H"]
