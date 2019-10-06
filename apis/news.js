const { News } = require('../models')

const getArticle = async (ctx, next) => {
	if (!ctx.params.id) {
        ctx.throw(404, 'create error')
    }

    var articelid = ctx.params.id
	let news = await News.findOne( { _id: articelid } ).lean()

	if (!news) {
		ctx.throw(404, 'no such blog data')
	}

    ctx.body = {
        status: 'success',
        news: news
    }
}

const getNewsList = async (ctx, next) => {
	let news = await News.find().sort( { updated: -1 } ).lean()

	if (!news.length) {
		ctx.throw(404, 'no such news data')
	}

    ctx.body = {
        status: 'success',
        news: news,
        
    }
    
}
const getNewsCounts = async (ctx, next) => {
	if (!ctx.params.counts) {
        ctx.throw(404, 'create error')
    }

    var counts = Number(ctx.params.counts)
	let news = await News.find().limit(counts)
    
	if (!news) {
		ctx.throw(404, 'no such news data')
	}

    ctx.body = {
        status: 'success',
        news: news
    }
}
const create = async (ctx, next) => {
    if (!ctx.request.body) {
        ctx.throw(404, 'create error')
    }

    var payload = ctx.request.body
        var data = {
            title: payload.title,
            content: payload.content,
            imagePath:payload.imagePath


        }
        var _news = new News(data)
        var error
    
        _news.save((err) => {
            error = err
        })
    
        if (error) {
            ctx.throw(404, 'create error' + error)
        }
    
        ctx.body = {
            status: 'success',
            news: _news.toObject()
        }

    }



const deleteOne = async (ctx, next) => {
	if (!ctx.params.entryid) {
        ctx.throw(404, 'delete error')
        return
    }

    var entryid = ctx.params.entryid
	var error

	await News.remove({ _id: entryid }, (err) => {
		error = err
	});

	if (error) {
		ctx.throw(404, 'no such blog data')
	}

    ctx.body = {
        status: 'success'
    }
}

module.exports = {
	getArticle: getArticle,
	getNewsList: getNewsList,
    getNewsCounts:getNewsCounts
}