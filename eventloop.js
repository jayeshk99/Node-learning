// let fun = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("jk");
//     }, 5000);
//   });
// };
// let promise = fun();

// console.log("before promise resolve ---------------------------");

// promise.then(function (res) {
//   console.log("res", res);
// });

// console.log("after promise resolved ----------------------- ");

// const fs = require('fs');
// // console.log('before exec');
// console.log('------------------------------------------');
// fs.readFile(__filename, () => {
//   //   console.log('iniside fs');
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('immediate');
//   });
//   process.nextTick(() => {
//     console.log('next tick callback ');
//   });
//   fs.readFile(__filename, () => {
//     console.log('INNER readfile');
//   });
// });
// fs.readFile(__filename, () => {
//   console.log('OUTER readfile');
//   fs.readFile(__filename, () => {
//     console.log('INNER 2 readfile');
//   });
//   process.nextTick(() => {
//     console.log('next ticke INNer');
//   });
// });

console.log("1111111111111111111");
const abc = () => {
  return new Promise((resolve, rej) => {
    resolve("promise resolved heeheheh");
  });
};

const bc = async () => {
  const pr = await abc();
  console.log("inside pr");
};

const cd = () => {
  abc()
    .then(() => console.log("inside cd"))
    .catch((err) => console.log(err));
  console.log("  cd");
};

bc();
cd();
console.log("2222222222222222222222222");

// const eventEmitter = require('events');

// const emitter = new eventEmitter();

// console.log('before on --- ');

// emitter.on('order pizza', () => {
//   console.log('pizza ordered, making pizza');
// });

// console.log('after on -------');
// emitter;
// // setTimeout(() => emitter.emit('order pizza'), 1000);
// emitter.emit('order pizza');

// console.log('at the end -------');

const fs = require("fs/promises");
console.log("before readfile");
async function readfile() {
  try {
    let data = await fs.readFile("./backend.yml", "utf-8");
    console.log("data:", data);
  } catch (error) {
    console.log("error", error);
  }
}
readfile();
console.log("after async readfile");
