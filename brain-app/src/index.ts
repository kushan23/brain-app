import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { contentModel, userModel, linkModel } from "./db"
import { userMiddleware } from "./middleware";
const JWT_USER_PASSWORD = "12345"
import { random } from "./util";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT ?? 3000;



app.post("/api/v1/signup", async (req,res) => {
    const username = req.body.username
    const password = req.body.password
    // ZOD validation
try{
    // Hash password
    const user = await userModel.create({
        username: username,
        password: password
    })
    const token = jwt.sign({
        id: user._id
    }, JWT_USER_PASSWORD)
    res.status(200).json({
        token: token
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
        console.log("hello");
        console.log(user);
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

app.post("/api/v1/brain/share",userMiddleware, async(req,res) => {
    const share = req.body.share;
    // console.log(share)
    if (share) {
        const existingLink = await linkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if (existingLink){
            res.json({
                hash: existingLink.hash
            })
            return;
        }
        const hash = random(10);
        await linkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })
        res.json({
            message: "/share/" + hash
        })
    }else{
        await linkModel.deleteOne({
             //@ts-ignore
            userId: req.userId
        })
        res.json({
            message: "Share link removed"
        })
    }
    

})

app.get("/api/v1/brain/:shareLink", async (req,res) => {
    const hash = req.params.shareLink;
    const link = await linkModel.findOne({
        hash: hash
    });
    if(!link){
        res.status(411).json({
            message:'incorrect input'
        })
        return;
    }

    const content = await contentModel.find({
        userId: link.userId
    })
    const user = await userModel.findOne({
        _id: link.userId
    })
    console.log(user);
    res.json({
        username: user?.username,
        content: content 
    }) 
})

app.get("/health", (req,res) => {
    res.status(200).json({
        message: "Backend Active"
    })
})

app.listen(port);