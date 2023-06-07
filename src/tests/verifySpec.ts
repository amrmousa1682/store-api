import verify from "../verify";
import supertest from "supertest";
import app from "..";

const request = supertest(app);
describe("test verify jwt middleware", () => {
    it("test if verify middleware define", () => {
        expect(verify).toBeDefined();
    })
    it("test verify middleware on wrong jwt", async () => {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        const res = await request.get('/users').set('Authorization', token);
        expect(res.status).toBe(401);
    })
    it("test verify middleware on right jwt", async () => {
        const response = await request.post('/users').send({
            "first_name": "amr",
            "last_name": "mousa",
            "password": "123456789"
        });
        const res = await request.get('/users').set('Authorization', response.header.authorization);
        expect(res.status).toBe(200);
    })
})