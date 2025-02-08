const { mongoose } = require('mongoose');
mongoose.connect("mongodb+srv://k23:okay@100x.t5t9o.mongodb.net/")
// const Schema = mongoose.Schema;
// const Model = mongoose.model
import { Schema} from "mongoose"

const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    username: {type:String, unique:true},
    password: {type: String}
})
export const userModel = mongoose.model("user",userSchema);

const contentSchema = new Schema({
    type: String,
    url: String,
    title: String,
    tags: [{type: ObjectId,  ref: 'Tag'}],
    userId: {type: ObjectId, ref: 'user', required: true}
})

export const contentModel = mongoose.model("content",contentSchema);
