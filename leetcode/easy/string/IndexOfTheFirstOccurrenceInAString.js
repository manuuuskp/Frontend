// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

//Problem number - 28

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let needIdx = 0;
    for(let i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[needIdx]) {
            needIdx++;
        } else {
            i = i-needIdx;
            needIdx = 0;
        }
        if(needIdx === needle.length) {
            return i - (needIdx - 1);
        }
    }
    return -1;
};
