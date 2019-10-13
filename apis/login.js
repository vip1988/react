const { Login } = require('../models')
const nodemailer = require('nodemailer');
const config = require('config')
const getAccountList = async (ctx, next) => {
	let login = await Login.find().sort( { updated: -1 } ).lean()

	if (!login.length) {
		ctx.throw(404, 'no such login data')
	}

    ctx.body = {
        status: 'success',
        login: login
    }
}
const exists = async (userAccount) => {
	let login = await Login.find({userAccount: userAccount}).lean()

    if (!login.length)
        return false

    return true
}
const logout = async (ctx, next) => {
    let login = await Login.find({userAccount:ctx.request.body.userAccount}).lean()
    if (!login.length)
        {
            ctx.body = {
                status: 'error',
                
            }
        }
        else{
            let login = await Login.updateOne({'userAccount':ctx.request.body.userAccount},{$set:{"userLogin":false}})
            let getLogout = await Login.findOne( {'userAccount':ctx.request.body.userAccount} )
            ctx.body = {
                status: 'success',
                login: getLogout
            }
        } 
}
const sendMail = async (ctx, next) => {
    console.log('account:'+config.email.account)
    console.log('password:'+config.email.password)
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.email.account,
            pass: config.email.password
        }
    });
    var options = {
        from: config.email.account, // sender address
        to: ctx.request.body.userEmail, // list of receivers
        subject: 'React-News ', // Subject line
          text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
          + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
          + `http://localhost:3001/#/resetPassword/${ctx.request.body.token}\n\n`
          + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
    };
    
    //發送信件方法
    transporter.sendMail(options, function(error, info){
        if(error){
            console.log(error); 
            return    
        }else{
            console.log('訊息發送: ' + info.response);    
        }
    });
        return ctx.body = {
            status: 'success',
        };
   
}
const checkForgotPassword = async (ctx, next) => {
    let login = await Login.find({userAccount: ctx.request.body.userAccount,userEmail:ctx.request.body.userEmail}).lean()  
    if (!login.length)
        {
            ctx.body = {
                status: 'error',
                
            }
        }
        else{
            ctx.body = {
                status: 'success',
                login: login
            }
        }
}
const checkLoginInfo = async (ctx, next) => {
    let login = await Login.find({userAccount: ctx.request.body.userAccount,userPassword:ctx.request.body.userPassword}).lean()
    var payload = ctx.request.body
    
    if (!login.length)
        {
            ctx.body = {
                status: 'error',
                
            }
        }
        else{
            let login = await Login.updateOne({'userAccount':payload.userAccount},{$set:{"userLogin":true}})
            let getLogin = await Login.findOne( {'userAccount':payload.userAccount} )
            ctx.body = {
                status: 'success',
                login: getLogin
            }
        }
}
const resetPassword = async (ctx, next) => {
    let login = await Login.find({userAccount: ctx.request.body.userAccount}).lean()
    var payload = ctx.request.body
    if (!login.length)
        {
            ctx.body = {
                status: 'error',
                
            }
        }
        else{
            let login = await Login.updateOne({'userAccount':payload.userAccount},{$set:{"userPassword":payload.userPassword,"userConfirm":payload.userConfirm}})
            if(login)
            {
                ctx.body = {
                    status: 'success',
                }
            }
           
        }
}
    const registerCreate = async (ctx, next) => {
        if (!ctx.request.body) {
            ctx.throw(404, 'create error')
        }
        var payload = ctx.request.body
        let exits = await exists(payload.userAccount)
        if (exits) {
            ctx.body = {
                status: 'userAccount exits'
            }
            return
        }
            var data = {
                userAccount: payload.userAccount,
                userPassword: payload.userPassword,
                userConfirm:payload.userConfirm,
                userEmail: payload.userEmail,
                userPhoneNumber:payload.userPhoneNumber,
                userLogin:payload.userLogin
            }
            var _login= new Login(data)
            var error
        
            _login.save((err) => {
                error = err
            })
        
            if (error) {
                ctx.throw(404, 'create error' + error)
            }
        
            ctx.body = {
                status: 'success',
                login: _login.toObject()
            }
    
        }
    
module.exports = {
	getAccountList: getAccountList,
    checkLoginInfo:checkLoginInfo,
    logout:logout,
    registerCreate:registerCreate,
    checkForgotPassword:checkForgotPassword,
    sendMail:sendMail,
    resetPassword:resetPassword
}