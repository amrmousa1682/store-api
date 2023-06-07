import { user } from "../../models/user";

describe("test user module", () => {
    const store = new user();
    it("test if create define", async () => {
        expect(store.create).toBeDefined();
    })
    it("test if index define", async () => {
        expect(store.index).toBeDefined();
    })
    it("test if show define", async () => {
        expect(store.show).toBeDefined();
    })
    it("test if index retur correct value", async () => {
        const test = await store.index();
        expect(test).toEqual([]);
    })
    it("test if show retur correct value", async () => {
        const test = await store.show(1);
        expect(test).toBeUndefined();
    })

    it("test create and show in integration test", async () => {
        await store.create('ali', 'ahmed', '123456789');
        const test = await store.show(1);
        expect(test.first_name).toEqual('ali');
    })
    it("test index in integration test", async () => {
        const test = await store.index();
        expect(test).toEqual([{ id: 1, first_name: 'ali', last_name: 'ahmed', password: '123456789' }]);
    })
});