/**
 * Created by byte_ on 2015/7/6.
 */
var cookieSession = require('cookie-session')
var express = require('express')

var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
    name: 'ssid',
    keys: ['key1']
}))

app.use(function (req, res, next) {
    console.log(req.session)
    var n = req.session.views || 0
    req.session.views = n++
    res.end(n + ' views')
})

app.listen(3000)