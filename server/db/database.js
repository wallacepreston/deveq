'use strict'

// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

const {DATABASE_NAME = pkg.name} = process.env
const {
  DATABASE_URL = `postgres://localhost:5432/${DATABASE_NAME}`
} = process.env

const env = process.env.NODE_ENV || 'development'

const dialectOptions =
  env === 'production'
    ? {
        ssl: {
          rejectUnauthorized: false
        }
      }
    : {}

const db = new Sequelize(DATABASE_URL, {
  logging: false,
  dialectOptions
})
module.exports = db
