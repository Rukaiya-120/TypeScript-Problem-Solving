// 13. Extract Digits and Calculate Discounted Total

const paragraph: string =
  "A Core i7 laptop price is 85000 tk and a gaming mouse price is 2500 tk. If I buy the laptop and 1 piece of mouse, what will be my total cost after giving 15% discount?";

function calculateDiscountedTotal(text: string): string {
  // Only capture numbers that are immediately followed by "tk" (i.e. actual prices)
  const priceMatches = [...text.matchAll(/(\d+)\s*tk/g)].map((m) => Number(m[1]));
  const total = priceMatches.reduce((sum, price) => sum + price, 0);

  const discountMatch = text.match(/(\d+)%\s*discount/);
  const discountPercent = discountMatch ? Number(discountMatch[1]) : 0;

  const finalTotal = total - (total * discountPercent) / 100;
  return `${finalTotal} tk`;
}

console.log(calculateDiscountedTotal(paragraph)); // Expected: 74375 tk

export {};
