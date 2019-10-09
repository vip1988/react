const mongoose = require('mongoose')
const collectionName = 'login'
//建立資料型態
var schema = mongoose.Schema({
    userAccount: String,
    userPassword:Number,
    userConfirm:Number,
    userEmail:String,
    userPhoneNumber:Number,
    userLogin:Boolean
    
    
	
})

var model = module.exports = mongoose.model(collectionName, schema, collectionName)