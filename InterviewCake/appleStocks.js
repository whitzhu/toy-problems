/*Suppose we could access yesterday's stock prices as an array, where:

The values are the price in dollars of Apple stock.
A higher index indicates a later time.
So if the stock cost $500 at 10:30am and $550 at 11:00am, then:

stockPricesYesterday[60] = 500;

Write an efficient function that takes stockPricesYesterday and returns the 
best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For Example:
var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)


No "shorting"—you must buy before you sell. You may not buy and sell 
in the same time step (at least 1 minute must pass).
*/


//****IMPLEMENTATION 1*****//
// const getMaxProfit = function(stockPricesYesterday) {
//   let buy = {
//     value: null, 
//     index: null,
//   }  

//   let sell = {
//     value: null, 
//     index: null,
//   }

//   let maxProfit;

//   stockPricesYesterday.forEach( (stock, index) => {
//     if ( index === 0) {
//       buy.value = stock;
//       buy.index = index;
//     } else {
//       sell.value = sell.value || stock;
//       sell.index = sell.index || index;
//       if ( stock > sell.value) {
//         sell.value = stock;
//         sell.index = index;
//       }
//       if ( stock < buy.value) {
//         if ( sell.index !== buy.index && sell.index > buy.index) {
//           maxProfit = Math.max(sell.value - buy.value, maxProfit) || sell.value-buy.value;  
//         }
//         buy.value = stock;
//         buy.index = index;
//         sell.value = null;
//         sell.index = null;
//       } else if ( sell.index !== buy.index && sell.index > buy.index) {
//         maxProfit = Math.max(sell.value - buy.value, maxProfit) || sell.value-buy.value;  
//       }
//     }
//   });

//   return maxProfit;
// }


//****IMPLEMENTATION 2*****//
function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) throw new Error('Need atleast 2 prices to get max profit!');

  let minPrice = stockPricesYesterday[0];
  let maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];
  
  for (let i = 1; i < stockPricesYesterday.length; i++) {
    let currPrice = stockPricesYesterday[i];
    let currProfit = currPrice - minPrice;
    
    maxProfit = Math.max(currProfit, maxProfit);
    minPrice = Math.min(currPrice, minPrice);
  }
  return maxProfit;
}

//****Testcases*****//
// const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// const stockPricesYesterday = [100, 180, 260, 310, 40, 535, 695];
// const stockPricesYesterday = [100, 98, 97, 30, 20, 10, 1];

// console.log(getMaxProfit(stockPricesYesterday));



//****What We Learned *****//
/*
//Greedy algorithm//
Greedy algorithm - iterates through the problem space taking the optimal solution
'so far', until it reaches the end

The greedy approach is only optimal if the problem has "optimal substructure," 
which means stitching together optimal solutions to subproblems yields an optimal solution.

//NOTE//
Greedy approaches are great because they're fast (usually just one pass through the input)
But they don't work for every problem.

Trying out a greedy approach should be one of the first ways you try to break down a new question.
*/
