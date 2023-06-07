# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index get request /product
- Show get request /product/:id
- Create [token required] post request /product
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users

- Index [token required] get request /user
- Show [token required] get request /user/:id
- Create N[token required] post request /user

#### Orders

- Current Order by user (args: user id)[token required] get request /orders/user/:id
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

  Table products(id: number , name: varchar , price: real)

#### User

- id
- firstName
- lastName
- password

  Table users(id: number , first_name: varchar , last_name: varchar , password: varchar)

#### Orders

- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

Table orders(id: number , status: varchar , user_id: number [foreign key to users table])

Table ordered_products(id: number , quantity: number , order_id: number [foreign key to orders table] , products_id: number[foreign key to products table])
