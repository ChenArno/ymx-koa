const Router = require("koa-router")
const router = new Router();

router.prefix('/test');

router.get('/', async (ctx, next) => {
  console.log(ctx.params)
  ctx.response.status = 200;
  ctx.body = {
    code: 2000,
    msg: "获取数据成功",
    data: {}
  }
  await next();
})

module.exports = router;