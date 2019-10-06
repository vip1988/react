const mongoose = require('mongoose')
const collectionName = 'collection'
//建立資料型態
var schema = mongoose.Schema({
    userAccount: String,
    article_id: String,
    article_title:String
})

var model = module.exports = mongoose.model(collectionName, schema, collectionName)