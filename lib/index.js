const express = require('express')
const app = express()
const logger = require('./logger')
const rootRouter = require('./routes')

const PORT = process.env.PORT || 8000
//middle-wares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//listen api calls
app.use('/', rootRouter)

//starting server
app
  .listen(PORT, () => {
    logger.info(`app is running at ${PORT}`)
  })
  .on('error', (e) => {
    logger.error(e.message)
  })
