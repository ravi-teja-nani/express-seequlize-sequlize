const express = require('express')
const rootRouter = express.Router()

const users = require('./users')

//combine routers
rootRouter.use('/', users)

module.exports = rootRouter
