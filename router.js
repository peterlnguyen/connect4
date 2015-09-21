var router = require("koa-router")();

router.get("/", function *(next) {
  this.body = "hello world";
});

exports = module.exports = {
  routes: routes
};
