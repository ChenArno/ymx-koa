const Router = require("koa-router")
const router = new Router();

router.prefix('/test'
);

router.get('/', async (ctx, next) => {
  console.log(ctx.params)
  ctx.response.status = 200;
  ctx.body = {
    code: 2000,
    msg: "获取数据成功",
    data: {}
  }

  const fn = () => {
    return new Promise((reslove, reject) => {
      console.log(7);
      const p = () => {
        return new Promise((reslove, reject) => {
          console.log(4)
          setTimeout(() => {
            console.log(5)
            reslove(2)
          }, 0)
          reslove(6)
        })
      }
      reslove(8)
      p().then(res => {
        console.log(res)
      })
    })
  }
  fn().then(r => {
    console.log(r)
  })
  console.log(1)
  await next();
})

module.exports = router;