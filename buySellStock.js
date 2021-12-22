
/* BUY & SELL STOCK 

You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:

 Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 

Example 2:

 Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. 


=========================================================================================== */

// SOLUTION 1 

function calculateMaxProfit(prices){
let maxProfit = 0;
let profit;
   prices.forEach((price, index) => {
         const rest = prices.slice(index+1);
         if(rest){
            const max = Math.max(...rest);
            max > price ? profit = max - price : null;
            profit > maxProfit ? maxProfit = profit : null;
         }
   });
   return maxProfit;
}

const prices = [7,1,5,3,6,4];
console.log( `Max Profit is ${calculateMaxProfit(prices)}`);

//Complexity O(n^2)

/* =========================================================================================== */

// SOLUTION 2 :

function maxProfit(prices){
    let maxProfit = 0;
    let min=Infinity;
    prices.forEach((price, i)=>{
        min = Math.min(price, min);
        maxProfit = Math.max(maxProfit, price - min);
    })
    return maxProfit;
}
console.log(`Max Profit is ${maxProfit([7,2,8,1,6,4])}`)

//Complexity O(n)