// Problem 2
// Write a function that calculates the discounted price of a product.
// The function takes two parameters: price and discountPercentage.
// If discountPercentage is not provided, it should default to 10%.
//
// Formula: discountedPrice = price - (price * discountPercentage / 100)
//
// Input: price = 1000, discountPercentage = 20
// Expected output: 800
//
// Input: price = 500 (no discount percentage given)
// Expected output: 450 (because 10% default discount)


function calculateDiscount(price, discountPercentage = 10) {
    const discountedPrice = price - (price * discountPercentage / 100);

    return discountedPrice;
}

console.log(calculateDiscount(1000, 20));
console.log(calculateDiscount(500));