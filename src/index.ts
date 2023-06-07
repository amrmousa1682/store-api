import express from "express";
import user_routes from "./handlers/user";
import product_routes from "./handlers/product";
import order_routes from "./handlers/order";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json())
user_routes(app);
product_routes(app);
order_routes(app);

app.listen(port);

export default app;