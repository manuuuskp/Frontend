// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let cmPre = "";
    let compareStr = strs[0];

    for(let i=0; i<compareStr.length; i++) {
        for(let j=1; j<strs.length; j++) {
            if(strs[j][i] !== compareStr[i]){
                return cmPre;
            }
        }
        cmPre += compareStr[i];
    }
    return cmPre;
};