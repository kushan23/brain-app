"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const JWT_USER_PASSWORD = "12345";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    // ZOD validation
    try {
        // Hash password
        yield db_1.userModel.create({
            username: username,
            password: password
        });
        res.status(200).json({
            message: "User signed up"
        });
    }
    catch (error) {
        res.status(411).json({
            message: error
        });
    }
}));
app.post("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const user = yield db_1.userModel.findOne({
            username: username,
            password: password
        });
        if (user) {
            const token = jsonwebtoken_1.default.sign({
                id: user._id
            }, JWT_USER_PASSWORD);
            res.json({
                token: token
            });
        }
        else {
            res.json(403).json({
                message: "Incorrect credentials"
            });
        }
    }
    catch (e) {
        res.json(411).json({
            message: e
        });
    }
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const type = req.body.type;
    const url = req.body.url;
    const title = req.body.title;
    // @ts-ignore
    const userId = req.userId;
    try {
        const content = yield db_1.contentModel.create({
            type: type,
            url: url,
            title: title,
            tags: [],
            userId: userId
        });
        res.json({
            message: "content added successfully"
        });
    }
    catch (error) {
        res.status(511).json({
            message: error
        });
    }
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //@ts-ignore
    const userId = req.userId;
    const content = yield db_1.contentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        content
    });
}));
app.delete("/api/v1/content", (req, res) => {
});
app.listen(3000);
