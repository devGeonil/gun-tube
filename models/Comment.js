import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text:{
    type:String,
    required:"Text is required"
  },
  createAt:{
    type:Date,
    default:Date.now
  }
})

const model =mongoose.model("Comment",CommentSchema);
export default model;


//연결 시키는 방법은 과여~~~ 비디오 아이디를 이요하장!!
