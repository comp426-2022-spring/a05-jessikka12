// require things
const express = require('express')
const app = express()

const args = require('minimist')(process.argv.slice(2), {
    default: {port: 5000, debug: false, log: true},
    alias: {p: port, d: debug, l: log, h: help}
})
// initialize the args
const help = args.help
const port = args.port
const debug = args.debug
const log = args.log

const coin = require('./modules/coin')



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

