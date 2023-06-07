import pg from "pg"
import "dotenv/config";

const { ENV, POSTGRES_HOST,
    POSTGRES_DB_DEV,
    POSTGRES_DB_TEST,
    POSTGRES_USER,
    POSTGRES_PASSWORD, } = process.env;
var client: pg.Pool;
if (ENV == "dev") {
    client = new pg.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB_DEV,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: 5431
    });
}
else {
    client = new pg.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB_TEST,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: 5431
    });
}
export default client;