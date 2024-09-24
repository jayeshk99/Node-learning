const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
  console.log("Close queue callback");
});

setImmediate(() => console.log("SetImmediate callback"));
setTimeout(() => console.log("setTimeout callbaCK"));
Promise.resolve().then(() => console.log("Promise callback"));
process.nextTick(() => console.log("nextTick callback"));
