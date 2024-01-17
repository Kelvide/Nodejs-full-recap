const koa = require('koa')

const app = new koa()
const PORT = 3500

app.use(async ctx => {
    ctx.body = 'Welcome to Koa JS';
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))