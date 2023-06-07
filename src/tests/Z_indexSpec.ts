import supertest from "supertest";
import app from "..";

const request = supertest(app);
describe("test endpoint in api", () => {
    let token: string;
    it("test post request /users", async () => {
        const res = await request.post('/users').send({
            "first_name": "amr",
            "last_name": "mousa",
            "password": "123456789"
        });
        token = res.header.authorization;
        expect(res.status).toBe(200);
    })
    it("test get request /users", async () => {
        const res = await request.get('/users').set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test get request /users/:id", async () => {
        const res = await request.get('/users/1').set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test post request /products", async () => {
        const res = await request.post('/products').send({
            "name": "test",
            "price": "5.6"
        }).set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test post get /products", async () => {
        const res = await request.get('/products');
        expect(res.status).toBe(200);
    })
    it("test get request /products/:id", async () => {
        const res = await request.get('/products/1');
        expect(res.status).toBe(200);
    })
    it("test post request /orders", async () => {
        const res = await request.post('/orders').send({
            "status": "active",
            "user_id": "1"
        }).set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test get request /orders/:id", async () => {
        const res = await request.get('/orders/1').set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test post request /orders/:id/product", async () => {
        const res = await request.post('/orders/1/product').send({
            "quantity": "4",
            "products_id": "1"
        }).set('Authorization', token);
        expect(res.status).toBe(200);
    })
    it("test get request /orders/user/:id", async () => {
        const res = await request.get('/orders/user/1').set('Authorization', token);
        expect(res.status).toBe(200);
    })
})