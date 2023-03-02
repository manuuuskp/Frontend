// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()[]{}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openMap = new Map([
        ["{", "}"],
        ["(", ")"],
        ["[", "]"]
    ]);

    let brackStack = [];
    for(let brack of s) {
        if(openMap.has(brack)){
            brackStack.push(openMap.get(brack));
        } else {
            if(brackStack.pop() !== brack) {
                return false;
            }
        }
    }
    return brackStack.length === 0;
};