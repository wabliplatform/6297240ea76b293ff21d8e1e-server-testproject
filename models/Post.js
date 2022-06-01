
const { PostPimageSchema } =require('./PostPimage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
Underscoreid:String , 


sdate:Date , 


pimage:  
PostPimageSchema
 , 


ptext:String , 


ptitle:String 



})

module.exports = {
  Post : mongoose.model('post', postSchema),
}

