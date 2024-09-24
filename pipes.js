const fs = require("fs");

const readableStream = fs.createReadStream("file.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

const writableStream = fs.createWriteStream("file2.txt", { flags: "a" });

// readableStream.pipe(writableStream);

// ------------ CHAINING ------------

const zlib = require("zlib");
const gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(fs.WriteStream("file2.txt.gz"));
