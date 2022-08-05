let fs = require("fs");
class DB {
    constructor(databaseFile) {
      let _db;
      if (fs.existsSync(databaseFile)) {
        _db = JSON.parse(fs.readFileSync(databaseFile, "utf8"));
      } else {
        fs.writeFileSync(databaseFile, JSON.stringify({}));
        _db = {};
      }
      this.v = _db
      this.update = function() {
        fs.writeFileSync(databaseFile, JSON.stringify(this.v));
      }
  }
}
exports.DB = DB;
