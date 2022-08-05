let { DB } = require("./index.js");
let { readFileSync } = require("fs");
let db = new DB("test.json");
db.v.test = "If you see this and a JSON object, it works."
db.update();
console.log(db.v.test);
console.log(readFileSync("test.json", "utf8"));
