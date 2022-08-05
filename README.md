# jsondb

`jsondb` is a way to use JSON as a NoSQL database. It uses an ORM and is the only way to interact with the database.

## Loading a database

All you need to do is to use `loadDB`. Here is an example:

```javascript
let { DB } = require("jsondb");
let db = new DB("db.json");
```

## Setting values

You do it just like any JavaScript object. Here is an example:

```javascript
db.v["bits"] = 64;
db.v.bits = 64; // this also works
db.update();
```

## Getting values

Again, it's just like any JS object. Here is an example:

```javascript
let bits = db.v["bits"];
bits = db.v.bits; // that also works
```
