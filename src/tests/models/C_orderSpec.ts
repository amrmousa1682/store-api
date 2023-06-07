import { order } from "../../models/order";

describe("test order module", () => {
    const store = new order();
    it("test if create define", async () => {
        expect(store.create).toBeDefined();
    })
    it("test if show define", async () => {
        expect(store.show).toBeDefined();
    })
    it("test if add_product define", async () => {
        expect(store.add_product).toBeDefined();
    })
    it("test if user_orders define", async () => {
        expect(store.user_orders).toBeDefined();
    })
    it("test create and show in integration test", async () => {
        await store.create('active', 1);
        const test = await store.show(1);
        expect(test.user_id).toEqual(1);
    })
    it("test add_product and user_orders in integration test", async () => {
        await store.add_product(4, 1, 1);
        const test = await store.user_orders(1);
        expect(test).toEqual([{ order_id: 1, quantity: 4, products_id: 1, user_id: 1, status: 'active' }]);
    })
});