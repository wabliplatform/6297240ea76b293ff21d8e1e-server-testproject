
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostPimageSchema = new Schema({
data:String , 
name:String 
});

module.exports = { PostPimageSchema };

