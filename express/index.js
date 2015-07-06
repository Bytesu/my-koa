/**
 * Created by byte_ on 2015/7/3.
 */
var express = require("express"),
    path = require("path"),
    config = require('./config/');
var router = express.Router();
app = express();
//app.set('case sensitive routing', true);//路由是否大小写敏感
app.set('env', 'development');
console.log(app.get('env')+'------');
//process.env.NODE_ENV = 'development';
//
[].map.call(config.path._static, function (val) {
    app.use(express.static(val));
});

/**
 * set tmpl engine
 */

//app.use(express.static('app'));
//app.use(express.static('.tmp'));
app.locals.app  =config.app;
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'tmpl.html';

app.set('views', path.join(__dirname, 'views'));
router.get("/", function (req, res) {
    res.render('index');
});


app.use(['/web'],require('./sub/web.js'));
app.use(['/app'],require('./sub/app.js'));
app.use(['/backend'],require('./sub/backend.js'));
app.use(['/d'],require('./sub/demo.js'));

app.use('/dev',router);
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
    console.log('erroorrr ----------------');
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