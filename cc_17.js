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


//  Task 2: SalesRep Class
class SalesRep {
  constructor(name) {
    this.name = name;
    this.clients = [];
  }

  addClient(customer) {
    this.clients.push(customer);
  }

  getClientTotal(name) {
    const client = this.clients.find(c => c.name === name);
    return client ? client.getTotalSpent() : 0;
  }
}

//  Log Task 2
const salesRep = new SalesRep("John");
salesRep.addClient(customer1);
console.log(`SalesRep: ${salesRep.name}, Client: ${customer1.name}, Total Spent: $${salesRep.getClientTotal("Ali")}`);


