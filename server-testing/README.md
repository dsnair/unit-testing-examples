# Server-Testing

## Topics

- automated testing.
- jest testing framework.
- supertest module.

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

Optional: add Jest configurations in `package.json` with the "jest" key OR

```bash
./node_modules/.bin/jest --init # creates jest.config.js
```

2. In `package.json`, add

```js
"server": {
    "server": "nodemon index.js",  // for local
    "start": "node index.js",  // for production
    "test" : "DB_ENV=testing jest --watch"
}
```

3. 
- Write `index.js`
- Write `server.js`
- NOTE: Include `app.listen()` in `index.js`, and not in `server.js`. Jest spins-up a new server instance at every test. Since Jest is hooked up to read `server.js` in the app and `app.listen()` is in `index.js`, it won't give the error that the port is already occupied.


4. Set-up Database

```bash
mkdir db db/migrations db/seeds
touch db/knex.js
./node_modules/.bin/knex init  # creates 'knexfile.js'
./node_modules/.bin/knex migrate:make random # creates /db/migrations/[timestamp]_random.js
./node_modules/.bin/knex seed:make 01_random # creates /db/seeds/01_random.js
```

- Fill-in `knex.js`
- Fill-in `knexfile.js`
- Fill-in table schema in `/db/migrations/[timestamp]_random.js`
- Fill-in seed data in `/db/seeds/01_random.js`

```bash
createdb random
./node_modules/.bin/knex migrate:latest
./node_modules/.bin/knex seed:run
```