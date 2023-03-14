// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Leetcode - Prob num - 70

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //it should be 1, 2, 3, 5, 8, 13...
    if(n === 1) return 1;
    
    let first = 1;
    let second = 1;
    let third;

    for(let i=2; i<=n; i++) {
        third = first + second;
        first = second;
        second = third;
    }

    return third;
};