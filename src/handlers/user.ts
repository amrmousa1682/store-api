import { user } from "../models/user";
import express from "express";
import bcrypt from "bcrypt";
import "dotenv/config";
import jwt, { Secret } from "jsonwebtoken";
import verify from "../verify";


const store = new user();
const index = async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
        res.json(err);
        res.json(err);
    }
}
const show = async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.show(parseInt(req.params.id));
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }
}
const create = async (req: express.Request, res: express.Response) => {
    try {
        const hashed_password = await bcrypt.hash(req.body.password + process.env.PEPPER, parseInt(process.env.SALT_ROUNDS as string));
        const result = await store.create(req.body.first_name, req.body.last_name, hashed_password);
        const token = jwt.sign({ first_name: req.body.first_name, last_name: req.body.last_name }, process.env.SECRET as Secret);
        res.setHeader('Authorization', `Bearer ${token}`);
        res.send(token);
    }
    catch (err) {
        res.json(err);
    }

}
const user_routes = (app: express.Application) => {
    app.get('/users', verify, index);
    app.get('/users/:id', verify, show);
    app.post('/users', create);
};

export default user_routes;