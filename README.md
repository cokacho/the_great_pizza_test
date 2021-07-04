# The Great Pizza Test (D'Carlo)
This is a little service for manage your pizzas.
Can you use the next optons:
- List, add, update and delete pizzas
- List, add, update and delete ingredents
- List, add, update and delete distinct combinations between pizzas and ingredents

Characteristics:
- Express 4.*
- Winston 3.*
- Mysql2 2.*
- Sequelize 6.*
- swagger-jsdoc 6.*
- swagger-ui-express 4.*

Server requirements:
- Docker version 3.4.*
- Engine version 20.*
- mysql 8^
- nodejs 14^

Server hardware (Docker) requerements:
- 2 Cpu's
- 3 GB ram
- 1 GB Swap
- 30 GB Disk image size

# Installation 2 Ways

## Before
Clone the repository

```cmd
git clone git@github.com:cokacho/the_great_pizza_test.git
cd the_great_pizza_test
```

## Way #1 Using Docker
Install docker in your pc, mac or power OS based in linux following the next steps: https://www.docker.com/get-started

In a terminal execute (over root project):

```cmd
install.sh
```
And in same path execute:

```cmd
docker-compose up --build --d
```
You need whatch a similar result

```cmd
d_carlo-api      |
d_carlo-api      | > d_carlo_api@1.0.0 start /code/d_carlo
d_carlo-api      | > nodemon -r dotenv/config index.js
d_carlo-api      |
d_carlo-api      | [nodemon] 2.0.9
d_carlo-api      | [nodemon] to restart at any time, enter `rs`
d_carlo-api      | [nodemon] watching path(s): *.*
d_carlo-api      | [nodemon] watching extensions: js,mjs,json
d_carlo-api      | [nodemon] starting 'node -r dotenv/config index.js'
d_carlo-api      | Server running using port: 3000...
```
## Way #2 Without Docker

In your mysql server (version 8.*) execute the sql dump file [d_carlo_db.sql](https://github.com/cokacho/the_great_pizza_test/blob/api_pizza_ingredents/src/services/mysql/dumps/d_carlo_db.sql)

You need change the mysql vars in file [api.mysql.example.env](https://github.com/cokacho/the_great_pizza_test/blob/api_pizza_ingredents/environments/api.mysql.example.env) for your mysql configuration.

In a terminal execute (over root project):
```cmd
install.sh
```

Running server:
```cmd
cd src/services/api
npm install
npm start
```

Now the server running in http://localhost:3000

# Documentation

The documentation is in http://localhost:3000/api-docs

You can check this in respectives files in in the path "./src/services/api/routes/*.js"