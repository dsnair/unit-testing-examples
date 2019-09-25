# Server-Testing

## Assignment

For this project, you will use `Test Driven Development` to create a RESTful API using `Node.js` and `Express.js` that publishes a set of endpoints to manage a _resource_ of your choosing. Data can be stored in memory, adding a **test database is optional**.

## Requirements

1.  use `jest` and `supertest` to write the tests.
1.  Your API must be able to **create** and **delete** a _resource_ of your choosing.
1.  Write a minimum of two tests per route handler.
1.  Add tests to verify that the endpoints return the correct HTTP status codes.
1.  Write the **tests BEFORE** writing the route handlers.

## Steps

1.

```bash
yarn init -y # creates package.json
yarn add jest supertest nodemon -D  # install as dev dependency
yarn add express pg knex faker helmet dotenv
```

2. In `package.json`, add

```js
"server": {
    "server": "nodemon index.js",  // for local
    "start": "node index.js",  // for production
    "test" : "DB_ENV=testing jest --watch" // for testing
}
```

3.

- Write `index.js`
- Write `server.js`
- **NOTE**: Write `app.listen()` in `index.js` and not in `server.js`. Jest spins-up a new server instance at every test. Since Jest is hooked up to read `server.js` and `app.listen()` is in `index.js`, it won't give the error that the port is already occupied (`Error: listen EADDRINUSE: address already in use :::5000`).

4. Set-up Database

```bash
mkdir db db/migrations db/seeds db/seeds/development db/seeds/testing
touch db/knex.js
./node_modules/.bin/knex init  # creates 'knexfile.js'

createdb random
createdb random_test

./node_modules/.bin/knex migrate:make random  # creates /db/migrations/[timestamp]_random.js

./node_modules/.bin/knex seed:make 01_random --env development # creates /db/seeds/development/01_random.js
./node_modules/.bin/knex seed:make 01_random --env testing
```

- Fill-in `knex.js`
- Fill-in `knexfile.js`
- Fill-in table schema in `/db/migrations/[timestamp]_random.js`
- Fill-in seed data in `/db/seeds/development/01_random.js` and `/db/seeds/testing/01_random.js`

```bash
# apply migrations to both databases
./node_modules/.bin/knex migrate:latest --env development 
./node_modules/.bin/knex migrate:latest --env testing

# seed both databases
./node_modules/.bin/knex seed:run --env development
./node_modules/.bin/knex seed:run --env testing
```

## Test Coverage

Type the command below in the terminal to see the test coverage report:

```bash
yarn test --coverage --watchAll=false
```

The report gives the following breakdown:

1. Statement coverage - has each statement in the app been executed?
1. Branch coverage - has each branch in each control structure (eg: if/else, switch/case) been executed?
1. Function coverage - has each function/subroutine in the app been called?
1. Line coverage - has each executable line been executed?

Open `coverage/lcov-report/index.html` in a browser for more details on what's not covered:
- Pink - statements not covered
- Orange - functions not covered
- Yellow - branches not covered