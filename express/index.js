/**
 * Created by byte_ on 2015/7/3.
 */
var express = require("express"),
    path = require("path"),
    config = require('./config/');
require('./config/env_config').setEnv();
var router = express.Router();
var app = express();

[].map.call(config.path._static, function (val) {
    app.use(express.static(val));
});
app.use(express.static('app'));
app.use(express.static('.tmp'));


/**
 * set tmpl engine
 */
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'tmpl.html';

app.set('views', path.join(__dirname, 'views'));

router.get("/dev", function (req, res) {
    console.log('dev-----------------');
    res.render('index');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found 404 !');
    err.status = 404;
    next(err);
});
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log('erroorrr ----------------')
    res.render('404', {
        message: err.message,
        error: {}
    });
});

/**
 * Register the route with Express
 */
//app.use(router);

module.exports = app;