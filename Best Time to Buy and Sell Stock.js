//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/?envType=study-plan-v2&envId=top-interview-150

let maxProfit = function(prices) {
    let minNumber = prices[0];
    let maxNumber = prices[0];
    let difference = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minNumber) {
            minNumber = prices[i];
            maxNumber = prices[i];
        } else {
            if(prices[i] > maxNumber) {
                maxNumber = prices[i];
                if((maxNumber - minNumber) > difference) {
                    difference = maxNumber - minNumber
                }
            }
        }
    }

    return difference;
};

maxProfit([3,2,6,5,0,3]); //4
maxProfit([2,4,1]); //2
maxProfit([7, 1, 5, 3, 6, 4]); //5 day, 6