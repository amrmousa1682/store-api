import client from "../database";

export type User = {
    id?: number;
    first_name: string;
    last_name: string;
    password: string;
}

export class user {
    async index(): Promise<User[]> {
        try {
            const conn = await client.connect();
            const res = await conn.query('SELECT * FROM "users"');
            conn.release();
            return res.rows;
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async show(id:number): Promise<User> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`SELECT * FROM "users" WHERE id='${id}'`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
    async create(first_name:string,last_name:string,password:string): Promise<User> {
        try {
            const conn = await client.connect();
            const res = await conn.query(`INSERT INTO "users"(first_name,last_name,password) VALUES('${first_name}','${last_name}','${password}')`);
            conn.release();
            return res.rows[0];
        }
        catch (err) {
            throw new Error(`An error occurred in the database : ${err}`);
        }
    }
}