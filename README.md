# Sprint Challenge: Testing - TDD Video Games

## Description

In this challenge use `Test Driven Development` to build a RESTful API using Node.js and Express to create and list _games_. **Data can be stored in memory using a simple JS array**. No need to keep track of incrementing `id`s for this project's MVP, that is part of the Stretch Problem.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?
1. What is the point of `Test Driven Development`? What do you think about this approach?
1. Mention three types of automated tests.

## Project Set Up

- Fork and clone this repository.
- **CD into the folder** where you downloaded the repository.
- Run `yarn` or `npm i` to download all dependencies.
- Type `yarn test` or `npm test` to run the tests. The `test` script is already configured.

## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Use `jest` and `supertest` to write the tests.
- Write the **tests BEFORE** writing the route handlers.
- [x] Your API must have both `POST` and `GET` endpoints for `/games`.
- [x] Write a **minimum** of 3 tests per endpoint.

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
- Add an `id` property to the game schema and write code in the server to increment it automatically. After implementing this functionality work on the following:
  - Write a `GET /games/:id` endpoint that returns the information about a single game. Respond with a 404 status code when a game is not found for the provided `id`. Add the corresponding tests for it.
  - Add a `DELETE /games/:id` endpoint that can remove the corresponding game. If the game does not exist return a 404 status code. Write tests for this endpoint.
