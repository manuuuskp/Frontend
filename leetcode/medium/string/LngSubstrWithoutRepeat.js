// Given a string s, find the length of the longest 
// substring
// without repeating characters.

//  Example:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Leetcode - Prob num - 3

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let ptr1 = 0;
    let maxCharLn = 0;
    while(ptr1 < s.length && (s.length - ptr1) > maxCharLn) {
        let curLen = 0;
        for(let i=ptr1; i< s.length; i++) {
            if(!map.has(s[i])) {
                map.set(s[i], i);
                curLen++;
            } else {
                ptr1 = map.get(s[i]) + 1;
                map.clear();
                break;
            }
            maxCharLn = maxCharLn > curLen ? maxCharLn : curLen;
        }
    }
    return maxCharLn;
};