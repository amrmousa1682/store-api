import client from "../database";

export type Order = {
    id?: number;
    status: string;
    user_id: number;
}
export type Ordered_Products = {
    id?: number;
    quantity: number;
    order_id: number;
    products_id: number;
    user_id?: number;
    status?: string;
}
export class order {
    async show(id: number): Promise<Order> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`SELECT * FROM orders WHERE id = '${id}'`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async create(status: string, user_id: number): Promise<Order> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`INSERT INTO orders(status,user_id) VALUES('${status}','${user_id}')`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async add_product(quantity: number, order_id: number, products_id: number): Promise<Ordered_Products> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`INSERT INTO ordered_products(quantity,order_id,products_id) VALUES('${quantity}','${order_id}','${products_id}')`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async user_orders(id: number): Promise<Ordered_Products[]> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`select order_id as order_id,quantity as quantity,products_id as products_id,user_id as user_id,status as status from ordered_products LEFT join orders on orders.id=order_id  WHERE user_id=${id};`);
            conn.release();
            return res.rows;
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
}