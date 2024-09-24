const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("pizza-order", (size, topping) => {
  console.log(
    `Order recieved, baking pizza of size ${size} with topping of ${topping}`
  );
});

emitter.on("pizza-order", (size) => {
  setTimeout(() => {
    console.log(`Order recieved in 2nd listener for size ${size}`);
  }, 3000);
});
console.log("before emitting event");

emitter.emit("pizza-order", "medium", "mushroom");

console.log("after emittting event");
// it works in non-blocking manner

// nodejs design patterns 
//  observer ,  reactive,  mediator ,  chain of responsibility
// https://medium.com/@RomarioDiaz25/the-observer-pattern-2562c23894d3