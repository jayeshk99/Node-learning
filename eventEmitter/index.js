const DrinkMachine = require("./drink-machine");
const PizzaShop = require("./pizza-shop");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();
pizzaShop.on("order", (size, topping) => {
  console.log(
    `Order recieved! Baking a ${size} pizza with ${topping} toppings`
  );
  drinkMachine.serveDrink(size);
});
console.log("111");
pizzaShop.order("large", "paneer");
pizzaShop.orderSummary();
