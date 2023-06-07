import { product } from "../models/product";
import express from "express";
import verify from "../verify";

const store = new product();
const index = async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.index();
        res.json(result);
    }
    catch (err) {
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
        const result = await store.create(req.body.name, req.body.price);
        res.json(result);
    }
    catch (err) {
        res.json(err);

    }
}
const product_routes = (app: express.Application) => {
    app.get('/products', index);
    app.get('/products/:id', show);
    app.post('/products', verify, create);
};
export default product_routes;