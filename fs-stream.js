const fs = require("fs");

console.log("at the start -----------");

let syncFileBuffer = fs.readFileSync("./file.txt");
let syncFile = fs.readFileSync("./file.txt", "utf-8");
console.log("after read file synchronously:", syncFileBuffer);
console.log("sync file human readable format", syncFile);
// it will read file synchronously blocking next steps

fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("error", error);
  }
  if (data) console.log("data", data);
});
console.log("after read file asynchrounously:");
// this will allow next code to run until file is read

fs.writeFileSync("file.txt", "writing from write file sync");
fs.writeFile(
  "file.txt",
  "hello from write file only",
  { flag: "a" },
  (err, data) => {
    if (err) {
      console.log("error ,", error);
    } else {
      console.log("data", data);
    }
  }
);
// flag: "a" is for telling write stream to append the data by default it will overwrite

// ====================  ------  %%%%%%%%% ------- =============================

const readableStream = fs.createReadStream("./file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});
// High watermark option is provided to reduce the size of the buffer(36 kb default).
// we converted it to 2 kb as our file is small
console.log("after readable stream ");
const writableStream = fs.createWriteStream("./file2.txt", { flags: "a" });

// streams extended from eventEmitter class it allows us to add listeners on events

console.log("after writable stream ");

readableStream.on("data", (chunk) => {
  console.log("chunk of data", chunk);
  writableStream.write(chunk);
});

console.log("at the end --------------");

// ------------------ FS PROMISE ------------

// const fs = require("fs/promises");
// console.log("before readfile");
// async function readfile() {
//   try {
//     let data = await fs.readFile("./backend.yml", "utf-8");
//     console.log("data:", data);
//   } catch (error) {
//     console.log("error", error);
//   }
// }
// readfile();
// console.log("after async readfile");
