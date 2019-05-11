const Koa = require('koa')
const { Nuxt, Builder } = require('nuxt')

async function start() {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 3000

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  app.use(ctx => {
    ctx.status = 200
    ctx.set('X-XSS-Protection', '1; mode=block')
    ctx.set('X-Content-Type-Options', 'nosniff')
    ctx.set('Cache-Control', 'max-age=0, private, no-siteapp, no-transform')
    ctx.set('X-Frame-Options', 'DENY')
    ctx.set(
      'Content-Security-Policy',
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' *.calibur.tv hm.baidu.com *.geetest.com zz.bdstatic.com push.zhanzhang.baidu.com res2.wx.qq.com qzonestyle.gtimg.cn;`
    )

    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
