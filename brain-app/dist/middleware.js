"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const JWT_USER_PASSWORD = "12345";
const jwt = require("jsonwebtoken");
const userMiddleware = (req, res, next) => {
    const token = req.headers.token;
    const decoded = jwt.verify(token, JWT_USER_PASSWORD);
    if (decoded) {
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    else {
        res.status(511).json({
            message: "You are not signed in"
        });
    }
};
exports.userMiddleware = userMiddleware;
