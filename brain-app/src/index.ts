import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, userModel } from "./db"
import { userMiddleware } from "./middleware";
const JWT_USER_PASSWORD = "12345"
const app = express();
app.use(express.json());




app.post("/api/v1/signup", async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    // ZOD validation
try{
    // Hash password
    await userModel.create({
        username: username,
        password: password
    })
    res.status(200).json({
        message:"User signed up"
    })
}catch(error){
    res.status(411).json({
        message: error
    })
}
})

app.post("/api/v1/signin",async (req,res) => {
    const username = req.body.username
    const password = req.body.password

try{
    const user = await userModel.findOne({
        username: username,
        password: password
    })
    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD)
        res.json({
            token: token
        })
    }else{
        res.json(403).json({
            message: "Incorrect credentials"
        })
    }
}catch(e){
    res.json(411).json({
        message: e
    })
}

    
})


app.post("/api/v1/content", userMiddleware, async (req,res) => {
    const type = req.body.type
    const url = req.body.url
    const title = req.body.title
    // @ts-ignore
    const userId = req.userId
try{
    const content = await contentModel.create({
        type: type,
        url: url,
        title: title,
        tags: [],
        userId: userId
    })
    res.json({
        message: "content added successfully"
    })
}catch(error){
    res.status(511).json({
        message: error
    })
}

})
app.get("/api/v1/content", userMiddleware, async(req,res) => {
    //@ts-ignore
    const userId = req.userId
    const content = await contentModel.find({
        userId: userId 
    }).populate("userId","username")
    res.json({
        content
    })

})
app.delete("/api/v1/content",userMiddleware ,async (req,res) =>{
    const contentId = req.body.contentId;
    await contentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })

})

app.listen(3000);