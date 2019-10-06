const { Comment } = require('../models')
const {Collection} = require('../models')
const getCommentList = async (ctx, next) => {
	let comment = await Comment.find().sort( { updated: -1 } ).lean()

	if (!comment.length) {
		ctx.throw(404, 'no such comment data')
	}

    ctx.body = {
        status: 'success',
        comment: comment
    }
}

const postComment = async (ctx, next) => {
    if (!ctx.request.body) {
        ctx.throw(404, 'create error')
    }

    var payload = ctx.request.body

    
    
        var data = {
            userAccount: payload.userAccount,
            comment: payload.comment,
        }
        var _comment = new Comment(data)
        var error
    
        _comment.save((err) => {
            error = err
        })
    
        if (error) {
            ctx.throw(404, 'create error' + error)
        }
    
        ctx.body = {
            status: 'success',
            comment: _comment.toObject()
        }

    }



module.exports = {
	getCommentList: getCommentList,
    postComment: postComment,
}