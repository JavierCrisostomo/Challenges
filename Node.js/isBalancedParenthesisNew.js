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

function isBalancedParenthesis(expn) {
  const stk = [];
  for (let index = 0; index < expn.length; index++) {
    const ch = expn[index];
    switch (ch) {
      case "{":
      case "[":
      case "(":
        stk.push(ch);
        break;
      case "}":
        if (stk.pop() !== "{") {
          return false;
        }
        break;
      case "]":
        if (stk.pop() !== "[") {
          return false;
        }
        break;
      case ")":
        if (stk.pop() !== "(") {
          return false;
        }
        break;
    }
  }
  return stk.length === 0;
}

// Testing code
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
