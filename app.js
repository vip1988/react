const Koa = require('koa')
const convert = require('koa-convert')
const bodyParser = require('koa-bodyparser')
const serve = require("koa-static")
const Router = require('koa-router')
const views = require('koa-views')
const logger = require('koa-logger')
const path = require('path')
const config = require('config')

var smtpTransport = require('nodemailer-smtp-transport');

//const cookieParser =require('cookie-parser')
const app = new Koa()
app.use(logger())
app.use(bodyParser())
  

const router = new Router()
const database = require('./database')()

// Static file path
app.use(convert(serve(path.join(__dirname, 'public'))))

app.use(views(path.join(__dirname, 'views'), { extension: 'pug' }))

// client
router.get('/', async (ctx, next) => {
	await ctx.render('index')
})

// apis
const Login = require('./apis/login')

router.get('/api/login/getAccountList', Login.getAccountList)
router.post('/api/login/registerCreate', Login.registerCreate)
router.post('/api/login/checkLoginInfo', Login.checkLoginInfo)
router.post('/api/login/checkForgotPassword', Login.checkForgotPassword)
router.post('/api/login/logout', Login.logout)
router.post('/api/login/sendMail', Login.sendMail)
router.post('/api/login/resetPassword', Login.resetPassword)



const News = require('./apis/news')

router.get('/api/news/getNewsList', News.getNewsList)
router.get('/api/news/getNewsCounts/:counts', News.getNewsCounts)
router.get('/api/news/getArticle/:id', News.getArticle)
// router.post('/api/news/create', News.create)

const Comment = require('./apis/comment')

router.get('/api/comment/getCommentList', Comment.getCommentList)
router.post('/api/comment/postComment', Comment.postComment)


const Collection = require('./apis/collection')

router.post('/api/collection/postCollection', Collection.postCollection)
router.get('/api/collection/getCollectionList', Collection.getCollectionList)

app.use(router.routes())

app.listen(config.server.port, () => {
	console.log("server starting on " + config.server.port)
})