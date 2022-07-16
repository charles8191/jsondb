let { loadDB } = require("./index.js");
let db = loadDB("test.json");
console.log(db.test);
