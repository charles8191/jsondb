let fs = require("fs");
function DB(databaseFile) {
  let _db;
  if (fs.existsSync(databaseFile)) {
    _db = JSON.parse(fs.readFileSync(databaseFile, "utf8"));
  } else {
    fs.writeFileSync(databaseFile, JSON.stringify({}));
    _db = {};
  }
  return class {
    constructor() {
      this.v = _db
      this.update = function() {
        fs.writeFileSync(databaseFile, JSON.stringify(this.v));
      }
    }
  }
}
exports.DB = DB;
