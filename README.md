# jsondb

`jsondb` is a way to use JSON as a NoSQL database. It uses an ORM and is the only way to interact with the database.

## Loading a database

All you need to do is to use `loadDB`. Here is an example:

```javascript
let { loadDB } = require("jsondb");
let db = loadDB("db.json");
```

## Setting values

You do it just like any JavaScript object. Here is an example:

```javascript
db["bits"] = 64;
db.bits = 64; // this also works
```

## Getting values

Again, it's just like any JS object. Here is an example:

```javascript
let bits = db["bits"];
bits = db.bits; // that also works
```
