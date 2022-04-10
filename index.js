// require things
const express = require('express')
const app = express()

const fs = require('fs')
const morgan = require('morgan')
const coin = require('./modules/coin')
const db = require('./src/services/database.js')
const midware = require('./src/middleware/mymiddleware.js')

const args = require('minimist')(process.argv.slice(2), {
    default: {port: 5000, debug: false, log: true},
    alias: {p: 'port', d: 'debug', l: 'log', h: 'help'}
})
// initialize the args
const help = args.help
const port = args.port
const debug = args.debug
const log = args.log

if (help) {
    console.log(`
    node server.js [options]

    --port, -p	Set the port number for the server to listen on. Must be an integer
                between 1 and 65535. Defaults to 5000.

    --debug, -d If set to true, creates endlpoints /app/log/access/ which returns
                a JSON access log from the database and /app/error which throws 
                an error with the message "Error test successful." Defaults to 
                false.

    --log, -l   If set to false, no log files are written. Defaults to true.
                Logs are always written to database.

    --help, -h	Return this message and exit.
    `)
    process.exit(0)
}

// create app server
const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace("%PORT%", port))
})

// middleware adds data to table
app.use( (req, res, next) => {
    midware.addData(req, res, next)
    res.status(200)
})

// if debug is true
if (debug) {
    // endpoint /app/log/access
    app.get('/app/log/access', (req, res) => {
        // return stuff in db
        const getprep = db.prepare(`SELECT * FROM accesslog`).all()
        res.status(200).json(getprep)
    })

    // endpoint /app/error
    app.get('/app/error', (req, res) => {
        // error out
        throw new Error("Error test successful.")
    })
}

// if log is true
if (log == true) {
    // Use morgan for logging to files
    // Create a write stream to append (flags: 'a') to a file
    const accessLog = fs.createWriteStream('./data/log/access.log', { flags: 'a' })
    // Set up the access logging middleware
    app.use(morgan('combined', { stream: accessLog }))
}

