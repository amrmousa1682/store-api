import express from "express";
import Jwt, { JsonWebTokenError } from "jsonwebtoken";
import "dotenv/config"
const verify = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        Jwt.verify((req.headers.authorization)?.split(' ')[1] as string, process.env.SECRET as string);
        next();
    }
    catch (err) {
        res.status(401);
        res.json(err);
    }
}

export default verify;