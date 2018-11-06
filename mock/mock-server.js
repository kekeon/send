const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser())


const home = require('./home')

app.use(router.routes())
router.get('/list', async(ctx, next) => {
    ctx.body = home
    await next()
})

router.post('/login', async(ctx, next) => {
    ctx.body = {
        code:0,
        message:"success",
        token:"1229999999"
    }
    await next()
})

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.listen(3000);  //这里的端口要和webpack里devServer的端口对应
console.log('app started at port 3000')