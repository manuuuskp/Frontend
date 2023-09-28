/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let current = prices[0];
    for(let i=1; i<prices.length; i++) {
        if(prices[i] - current < 0) {
            current = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - current);
        }
    }
    return maxProfit;
};