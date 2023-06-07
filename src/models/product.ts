import client from "../database";

export type Product = {
    id?: number;
    name: string;
    price: number;
}

export class product {
    async index(): Promise<Product[]> {
        try {
            const conn = await client.connect();
            const res = await conn.query('SELECT * FROM "products"');
            conn.release();
            return res.rows;
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async show(id: number): Promise<Product> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`SELECT * FROM "products" WHERE id='${id}'`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async create(name: string, price: number): Promise<Product> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`INSERT INTO "products"(name,price) VALUES('${name}','${price}')`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
}