function maxProfit(prices) {
  let minPrice = prices[0],
      currentPrice,
      profit = 0;

  for (let i = 0; i < prices.length; i++) {
  	currentPrice = prices[i];
    if (prices[i] < minPrice) minPrice = currentPrice;
    if (currentPrice - minPrice > profit) profit = currentPrice - minPrice;
  }
  return profit;
}