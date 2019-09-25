module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/random', // postgres DB name is random
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/development'
    }
  },
  testing: {
    client: 'pg',
    connection: 'postgres://localhost/random_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/testing'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DB_ENV,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
}
