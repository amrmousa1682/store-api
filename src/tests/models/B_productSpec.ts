import { product } from "../../models/product";

describe("test product module", () => {
    const store = new product();
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
        await store.create('test', 1.5);
        const test = await store.show(1);
        expect(test.name).toEqual('test');
    })
    it("test index in integration test", async () => {
        const test = await store.index();
        expect(test).toEqual([{ id: 1, name: 'test', price: 1.5 }]);
    })
});