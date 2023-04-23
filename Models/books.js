const mongoose=require('mongoose')

const userSchema =new mongoose.Schema({
    title: {type: String}, 
    isbn:{type:String},
    author:{type:String},
    description:{type:String},
    publisher:{type:String},
    publishDate:{type:String},
    userID:String,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  });
  const books = mongoose.model("books", userSchema);

  module.exports = books