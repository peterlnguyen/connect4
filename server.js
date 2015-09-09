var System = require("es6-modular-loader").System;

System.import("./index").then(function(index) {
  index.run(__dirname);
}).catch(function(err) {
  console.log("err", err);
})
