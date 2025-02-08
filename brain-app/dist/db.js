"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkModel = exports.contentModel = exports.userModel = void 0;
const { mongoose } = require('mongoose');
mongoose.connect("mongodb+srv://k23:okay@100x.t5t9o.mongodb.net/");
// const Schema = mongoose.Schema;
// const Model = mongoose.model
const mongoose_1 = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const userSchema = new mongoose_1.Schema({
    username: { type: String, unique: true },
    password: { type: String }
});
exports.userModel = mongoose.model("user", userSchema);
const contentSchema = new mongoose_1.Schema({
    type: String,
    url: String,
    title: String,
    tags: [{ type: ObjectId, ref: 'Tag' }],
    userId: { type: ObjectId, ref: 'user', required: true }
});
exports.contentModel = mongoose.model("content", contentSchema);
const linkSchema = new mongoose_1.Schema({
    hash: String,
    userId: { type: ObjectId, ref: 'user', required: true, unique: true }
});
exports.linkModel = mongoose.model('links', linkSchema);
