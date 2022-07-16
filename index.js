let fs = require("fs");
function loadDB(databaseFile) {
  let _db;
  if (fs.existsSync(databaseFile)) {
    _db = JSON.parse(fs.readFileSync(databaseFile, "utf8"));
  } else {
    fs.writeFileSync(databaseFile, JSON.stringify({}));
    _db = {};
  }
  return new Proxy(_db, {
    set: function (target, key, value) {
      target[key] = value;
      fs.writeFileSync(databaseFile, JSON.stringify(target));
    },
  });
}
exports.loadDB = loadDB;
