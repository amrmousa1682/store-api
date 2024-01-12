# Node.js E-commerce API

This is a Node.js-based API for an e-commerce website. The API allows users to sign up, view products, place orders, and view their order history. The API is built using TypeScript and uses PostgreSQL as its database.

## Installation

To install the necessary packages, run:

```
npm install
```

To install the db-migrate package, run:

```
npm install -g db-migrate
```

## Usage

To start the server with the dev database, run:

```
npm run start:dev
```

To build the TypeScript files, run:

```
npm run build
```

To migrate the dev database, run:

```
npm run migrate
```

To start the server with the test database, run:

```
npm run test
```

## Endpoints

- POST /users: Creates a new user and returns a JWT token.
- GET /users: Returns a list of all users.
- GET /users/:id: Returns the user with the specified ID.
- POST /products: Creates a new product.
- GET /products: Returns a list of all products.
- GET /products/:id: Returns the product with the specified ID.
- POST /orders: Creates a new order.
- GET /orders/:id: Returns the order with the specified ID.
- POST /orders/:id/product: Adds a product to the order with the specified ID.
- GET /orders/user/:id: Returns the order history for the user with the specified ID.

## Ports

- Database: 5431
- Server: 3000

## Environment Variables

- POSTGRES_HOST: The host of the PostgreSQL server.
- POSTGRES_DB_DEV: The name of the development database.
- POSTGRES_DB_TEST: The name of the test database.
- ENV: The environment (either "dev" or "test").
- POSTGRES_USER: The username of the PostgreSQL user.
- POSTGRES_PASSWORD: The password of the PostgreSQL user.
- SALT_ROUNDS: The number of salt rounds used for password hashing.
- PEPPER: A pepper value used for password hashing.
- SECRET: A secret value used for JWT token generation.

## Database Setup

To set up the database, run the following commands:

```
CREATE USER app WITH PASSWORD '123456789';
CREATE DATABASE app_test;
CREATE DATABASE app;
GRANT ALL PRIVILEGES ON DATABASE app_test TO app;
GRANT ALL PRIVILEGES ON DATABASE app TO app;
```
