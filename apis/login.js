const { Login } = require('../models')

const getOne = async (ctx, next) => {
	if (!ctx.params.entryid) {
        ctx.throw(404, 'create error')
    }

    var userid = ctx.params.userid

	let login = await Login.findOne( { _id: userid } ).lean()

	if (!login) {
		ctx.throw(404, 'no such blog data')
	}

    ctx.body = {
        status: 'success',
        login: login
    }
}
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
const create = async (ctx, next) => {
    if (!ctx.request.body) {
        ctx.throw(404, 'create error')
    }

    var payload = ctx.request.body

    
    
        var data = {
            userAccount: payload.userAccount,
            userPassword: payload.userPassword,
        }
        var _login = new Login(data)
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
    getOne:getOne,
	getAccountList: getAccountList,
    create: create
}