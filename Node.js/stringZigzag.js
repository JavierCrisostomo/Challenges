/*
Problem Statement:
Have the function StringZigzag(strArr) read the array of strings stored in strArr, which will 
contain two elements, the first some sort of string and the second element will be a number 
ranging from 1 to 6. The number represents how many rows to print the string on so that it forms
a zig-zag pattern.  For example: if strArr is ["coderbyte", "3"] then this word will look like 
the following if you print it in a zig-zag pattern with 3 rows:
               c      r       e
                o   e   b   t
                  d       y  
Your program should return the word formed by combining the characters as you iterate through each row, so for this example your program should return the string creoebtdy.
Examples
      Input: ["cat", "5"]
      Output: cat

      Input: ["kaamvjjfl", "4"]
      Output: kjajfavlm
*/
// Solution:
function stringZigzag(strArr) {
  const str = strArr[0];
  const numRows = parseInt(strArr[1], 10);

  if (numRows === 1 || numRows >= str.length) {
    return str;
  }

  const zigzag = Array(numRows).fill("");
  let row = 0;
  let direction = 1;

  for (let i = 0; i < str.length; i++) {
    zigzag[row] += str[i];
    if (row === 0) {
      direction = 1;
    } else if (row === numRows - 1) {
      direction = -1;
    }
    row += direction;
  }

  return zigzag.join("");
}

// Test the function
console.log(stringZigzag(["coderbyte", "3"])); // "creoebtdy"
console.log(stringZigzag(["cat", "5"])); // "cat"
console.log(stringZigzag(["kaamvjjfl", "4"])); // "kjajfavlm"
