const { mongoose } = require('mongoose');
const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
    throw new Error("DATABASE_URL not set!");
  }
  
mongoose.connect(dbUrl)

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

const linkSchema = new Schema({
    hash: String,
    userId: {type: ObjectId, ref: 'user', required: true, unique: true}
})

export const linkModel = mongoose.model('links',linkSchema)