const {Collection} = require('../models')

const getCollectionList = async (ctx, next) => {
	let collection = await Collection.find().sort( { updated: -1 } ).lean()

	if (!collection.length) {
		ctx.throw(404, 'no such comment data')
	}

    ctx.body = {
        status: 'success',
        collection: collection
    }
}

const postCollection = async (ctx, next) => {
    if (!ctx.request.body) {
        ctx.throw(404, 'create error')
    }

    var payload = ctx.request.body

    
    
        var data = {
            userAccount: payload.userAccount,
            article_id: payload.article_id,
            article_title:payload.article_title
        }
        var _collection = new Collection(data)
        var error
    
        _collection.save((err) => {
            error = err
        })
    
        if (error) {
            ctx.throw(404, 'create error' + error)
        }
    
        ctx.body = {
            status: 'success',
            collection: _collection.toObject()
        }

    }
    module.exports = {
        getCollectionList: getCollectionList,
        
        postCollection:postCollection
    }