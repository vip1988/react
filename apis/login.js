const { Login } = require('../models')

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
    registerCreate:registerCreate
}