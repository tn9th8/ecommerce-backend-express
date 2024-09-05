const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')


const app = express()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// init database

// init routes
app.get('/', (req, res, next) => {
    const strCompression = "Compression "
    return res.status(200).json({
        status: 200,
        message: 'Index page',
        data: strCompression.repeat(1000000),
    })
})

// handle error

module.exports = app