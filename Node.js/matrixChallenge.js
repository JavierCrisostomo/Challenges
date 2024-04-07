//  Problem Statement:
//  Have the function MatrixChallenge(strArr) take the strArr parameter being passed which will be a 2D matrix
//  of some arbitrary size filled with letters from tha alphabet, and determine if a 2x2 square composed entirely of
//  vowels exists in the matrix. For example: strArr is ["abcd", "eikr", "oufj"] then this matrix looks like
//  the following:
//  a b c d
//  e i k r
//  o u f j
//  Within this matrix there is a 2x2 square of vowels starting in the second row and first column, namely, ei, ou.
//  If a 2x2 square of vowels is found your program should return the top-left position (row-column) of the square,
//  so for this example your program should return 1-0. If no 2x2 square of vowels exists, then return the string not found.
//  If there are multiple squares of vowels, return the one that is at the most top-left position in the.whole
//  matrix. The input matrix will at least be of size 2x2.
//  Examples
//  Input: ["aqrst", "ukaei", "ffoia", "heioo"]
//  Output: 1-2
//  Input: ["gg", "ff"]
//  Output: not found
//  Solution:

// write the function with time complexity O(1(2)) and space complexity O(1)
function MatrixChallenge(strArr) {
  const vowels = "aeiou";
  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length - 1; j++) {
      if (
        vowels.includes(strArr[i][j]) &&
        vowels.includes(strArr[i][j + 1]) &&
        vowels.includes(strArr[i + 1][j]) &&
        vowels.includes(strArr[i + 1][j + 1])
      ) {
        return `${i}-${j}`;
      }
    }
  }
  return "not found";
}

// Testing:
console.log(MatrixChallenge(["abcd", "eikr", "oufj"])); // Output: 1-0
console.log(MatrixChallenge(["aqrst", "ukaei", "ffoia", "heioo"])); // 1-2
console.log(MatrixChallenge(["gg", "ff"])); // not found
console.log(MatrixChallenge(["ae", "io"])); // 0-0
