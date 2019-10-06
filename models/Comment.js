const mongoose = require('mongoose')
const collectionName = 'comment'
//建立資料型態
var schema = mongoose.Schema({
    userAccount: String,
	comment: String,
	updated: { type: Date, default: Date.now }
})

var model = module.exports = mongoose.model(collectionName, schema, collectionName)