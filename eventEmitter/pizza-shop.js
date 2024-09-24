const EventEmitter = require("events");

// using inheritance here
class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  orderSummary() {
    console.log(`Order number is ${this.orderNumber}`);
  }
}
module.exports = PizzaShop;
