import client from "../database";

it('test database connection', async () => {
    expect(client).toBeDefined();
});