# Sprint Challenge: Testing - TDD Video Games

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

> The difference between them is just code organization, and thus subjective. `Describe` usually contains a collection of `it` or `test` that all test the same endpoint. This way the test results are all easier to read.

1. What is the point of `Test Driven Development`? What do you think about this approach?

> The point of TDD is to test your code as you develop it to test your assumptions and catch unpredictable behavior or unaccounted errors. It's a lot more code writing!

1. Mention three types of automated tests.

> Unit tests, integration tests, end-to-end tests

## Project Set Up

- Run `yarn` or `npm i` to download all dependencies.
- Type `yarn test` or `npm test` to run the tests. The `test` script is already configured.
- **NOTE**: Write `app.listen()` in `index.js` and not in `server.js`. Jest spins-up a new server instance at every test. Since Jest is hooked up to read `server.js` and `app.listen()` is in `index.js`, it won't give the error that the port is already occupied (`Error: listen EADDRINUSE: address already in use :::5000`).

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Use `jest` and `supertest` to write the tests.
- Write the **tests BEFORE** writing the route handlers.
- [x] Your API must have both `POST` and `GET` endpoints for `/games`.
- [x] Write a _minimum_ of 3 tests per endpoint.

Below is a product specification covering the requirements for your endpoints.

### POST /games

- [x] The `POST /games` endpoint should take in an object that looks like this

  ```js
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  }
  ```

- [x] In the route handler, validate that the required fields are included inside the body. If the information is incomplete, return a `422` status code.
- [x] Write tests to verify that the endpoint returns the correct HTTP status code when receiving correct and incorrect game data.

### GET /games

- [x] The `GET /games` endpoint should return the list of games and HTTP status code 200.
- [x] Write a test to make sure this endpoint always returns an array, even if there are no games stored. If there are no games to return, the endpoint should return an empty array.

## Stretch Problems

The following exercises are optional, but we suggest that you tackle them if you finish the MVP early.

- [x] Validate that the game `title` is unique. If the client tries to create a duplicate game, return a status code 405 (Not Allowed). Write a test that checks for this.
- [x] Add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - Add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exist return a 404 status code. Write tests for this endpoint.
