const mongoose = require('mongoose')
const collectionName = 'News'
//建立資料型態
var schema = mongoose.Schema({
    title: String,
	content: String,
    updated: { type: Date, default: Date.now },
    imagePath:String
})

var model = module.exports = mongoose.model(collectionName, schema, collectionName)