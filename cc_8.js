// Task 1: Function Declaration - Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate) {
    // Compute the net salary based on the given formula
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    
    // Format the output to two decimal places
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test cases
console.log(calculateSalary(5000, 500, 0.1));  // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2: Function Expression - Product Price After Discount
const calculateDiscount = function(price, discountRate) {
    // Calculate the final price after applying the discount
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
};

console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3: Arrow Function - Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    // Determine the fee percentage based on service type
    const feeRates = { Premium: 0.15, Standard: 0.10, Basic: 0.05 };
    let fee = amount * (feeRates[serviceType] || 0);
    return `Service Fee: $${fee.toFixed(2)}`;
};

console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

// Task 4: Parameters and Arguments - Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    // Define daily rental rates
    const rates = { Economy: 40, Standard: 60, Luxury: 100 };
    let cost = days * (rates[carType] || 0);
    if (insurance) cost += days * 20; // Add insurance cost if selected
    return `Total Rental Cost: $${cost}`;
}

console.log(calculateRentalCost(3, "Economy", true)); // Expected output: "Total Rental Cost: $180"
console.log(calculateRentalCost(5, "Luxury", false)); // Expected output: "Total Rental Cost: $500"

// Task 5: Returning Values - Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {
    // Calculate the total loan payment
    let totalPayment = principal + (principal * rate * time);
    return `Total Payment: $${totalPayment.toFixed(2)}`;
}

console.log(calculateLoanPayment(1000, 0.05, 2)); // Expected output: "Total Payment: $1100.00"
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output: "Total Payment: $6050.00"

// Task 6: Higher-Order Functions - Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500];
const filterLargeTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction);
};

// Test case
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output: [1500, 3200, 2500]

// Task 7: Closures - Shopping Cart Tracker
function createCartTracker() {
    let total = 0; // Maintain a running total
    return function(amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}

let cart = createCartTracker();
console.log(cart(20)); // Expected output: "Total Cart Value: $20"
console.log(cart(35)); // Expected output: "Total Cart Value: $55"

// Task 8: Recursion - Savings Growth Projection
function calculateSavings(years, amount) {
    if (years >= 10) return `Projected Savings: $${amount.toFixed(2)}`;
    return calculateSavings(years + 1, amount * 1.05); // Increase savings by 5% each year
}

console.log(calculateSavings(8, 1000)); // Expected output: "Projected Savings: $1102.50"
console.log(calculateSavings(5, 5000)); // Expected output: "Projected Savings: $6381.41"