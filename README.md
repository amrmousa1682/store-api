scripts :-
script for test with test database: npm run test
script for build typescript files: npm run build
script for migrate dev database : npm run migrate
script for start with dev database: npm run start
script for migrate dev database and start : npm run start:dev
------------------------------------------------------------------------------------------------------------------------------------------------------------------
endpointes :-
1-http://localhost:3000/users                   post request with user data return jwt token and add user to database
2-http://localhost:3000/users                   get request with token return users list
3-http://localhost:3000/users/:id               get request with token return users with the id in endpoint
4-http://localhost:3000/products                post request with product data and token  add product to database 
5-http://localhost:3000/products                get request return products list
6-http://localhost:3000/products/:id            get request return product with the id in endpoint
6-http://localhost:3000/orders                  post request with orders data and token  add order to database 
7-http://localhost:3000/orders/:id              get request return order with the id in endpoint
8-http://localhost:3000/orders/:id/product      post request with ordered_product data and token add product to the order with the id in endpoint in database
9-http://localhost:3000/orders/user/:id         get request with toke return order of the user with the id in endpoint
------------------------------------------------------------------------------------------------------------------------------------------------------------------
ports :-
database port for 5431
server port 3000
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Package installation instructions :-
use npm install to install all project dependencies
use npm install -g db-migrate to instal db_migrate
------------------------------------------------------------------------------------------------------------------------------------------------------------------
Setup db and server instructions :-
1- install Packeges using previous instructions
2- start database on docker use docker-compose up after installing docker and this will create database and users
3- test project use npm run test or start project by useing npm start:dev and test i by postman
------------------------------------------------------------------------------------------------------------------------------------------------------------------
envoirnemt variables :-
POSTGRES_HOST=localhost
POSTGRES_DB_DEV=app
POSTGRES_DB_TEST=app_test
ENV=dev
POSTGRES_USER=app
POSTGRES_PASSWORD=123456789
SALT_ROUNDS=10
PEPPER=Yk3)[8Kc=u>/XK
SECRET=7>WQCNJ^fk{PmUB
------------------------------------------------------------------------------------------------------------------------------------------------------------------
 set up database :-
    CREATE USER app with password '123456789'; 
    CREATE DATABASE app_test;
    CREATE DATABASE app;
    GRANT ALL PRIVILEGES ON DATABASE app_test TO app;
    GRANT ALL PRIVILEGES ON DATABASE app TO app;
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------