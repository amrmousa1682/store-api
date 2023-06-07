import { order } from "../models/order";
import express from "express";
import verify from "../verify";

const store = new order();

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
        const result = await store.create(req.body.status, req.body.user_id);
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }
}
const add_product = async (req: express.Request, res: express.Response) => {
    try {
        const cur_order = await store.show(parseInt(req.params.id));
        if (cur_order.status == "complete")
            throw new Error("order is closed");
        const result = await store.add_product(req.body.quantity, parseInt(req.params.id), req.body.products_id);
        res.json(result);

    }
    catch (err) {
        res.json(err);
    }
}
const user_orders = async (req: express.Request, res: express.Response) => {
    try {
        const result = await store.user_orders(parseInt(req.params.id));
        res.json(result);
    }
    catch (err) {
        res.json(err);
    }
}
const order_routes = (app: express.Application) => {
    app.get('/orders/:id', verify, show);
    app.get('/orders/user/:id', verify, user_orders);
    app.post('/orders', verify, create);
    app.post('/orders/:id/product', verify, add_product);
};
export default order_routes;