import { NextFunction, Request, Response } from "express"
const JWT_USER_PASSWORD = "12345"
const jwt = require("jsonwebtoken")

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD)
    if(decoded){
        //@ts-ignore
        req.userId = decoded.id
        next();
    }
    else{
        res.status(511).json({
            message: "You are not signed in"
        })
    }
}