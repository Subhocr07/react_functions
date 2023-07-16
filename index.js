const crypto = require("crypto");
let date = new Date();
let start = date.toLocaleTimeString();
console.log(start);
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1", Date.now() - start);
});
