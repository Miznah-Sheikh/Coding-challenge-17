//  Task 1: Customer Class
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.purchaseHistory = [];
  }

  addPurchase(amount) {
    if (amount > 0) {
      this.purchaseHistory.push(amount);
    }
  }

  getTotalSpent() {
    return this.purchaseHistory.reduce((sum, amount) => sum + amount, 0);
  }
}

// Log Task 1
const customer1 = new Customer("Ali", "ali@example.com");
customer1.addPurchase(150);
customer1.addPurchase(200);
console.log(`Customer: ${customer1.name}, Total Spent: $${customer1.getTotalSpent()}`);

