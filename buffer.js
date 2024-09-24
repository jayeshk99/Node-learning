const buffer = new Buffer().from("jayesh");

buffer.write("abc");
console.log(buffer);
// buffer is actually holds binary data, but on the terminal it show <Buffer 45, 454, 4> something like this,
// this is in the base16 format so that terminal doesn't overflood
console.log(buffer.toString());
console.log(buffer.toJSON());

// buffer has a limited space
// buffer is used in fs, streams under the hood
// we are less likely to use buffer directly
