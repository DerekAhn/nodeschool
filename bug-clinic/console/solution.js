const fs = require("fs");

const peach = function (obj) {
  console.trace("traced");
  console.log(obj);
};

const bowser = function (callback) {
  fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

const koopa = function (err, file) {
  if (err) return console.error("Handle your errors folks.");

  peach(JSON.parse(file));
};

bowser(koopa);
