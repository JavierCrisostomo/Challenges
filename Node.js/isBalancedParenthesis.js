// Check the expression has balanced brakets ()[]{}
// input: "(ert{ewrt345[234]234}2345)" is valid
// input: "(})" is invalid
// input: "{(})" is invalid
// input: "{})" is invalid
// input: "}{" is invalid
// input: "{([]" is invalid
// input: "{(({([]" is invalid
// input: "{()[]()}" is valid
// Solve without regex

function isBalancedParenthesis(str) {
  const stack = [];
  const openBrackets = ["(", "{", "["];
  const closeBrackets = [")", "}", "]"];
  const bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closeBrackets.includes(str[i])) {
      const lastBracket = stack.pop();
      if (str[i] !== bracketMap[lastBracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Code to test the function
console.log(isBalancedParenthesis("(ert{ewrt345[234]234}2345)")); // true
console.log(isBalancedParenthesis("(})")); // false
console.log(isBalancedParenthesis("{(})")); // false
console.log(isBalancedParenthesis("{})")); // false
console.log(isBalancedParenthesis("}{")); // false
console.log(isBalancedParenthesis("{([]")); // false
console.log(isBalancedParenthesis("{(({([]")); // false
console.log(isBalancedParenthesis("{()[]()}")); // true

// Time complexity: O(n)
// Space complexity: O(n)
