"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
var verify = function (req, res, next) {
    var _a;
    try {
        jsonwebtoken_1.default.verify((_a = (req.headers.authorization)) === null || _a === void 0 ? void 0 : _a.split(' ')[1], process.env.SECRET);
        next();
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
};
exports.default = verify;
