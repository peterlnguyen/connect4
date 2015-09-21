var koa = require("koa");
var app = koa();
var router = require("router");

// logger

app.use(function *(next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});

// response

app.use(function *() {
  this.body = "hello world";
});

var server = app.listen(3000, function() {
  console.log("koa listening on *:3000");
});
