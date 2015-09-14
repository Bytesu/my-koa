/**
 * Created by byte_ on 2015/7/3.
 */
var express = require("express"),
    path = require("path"),
    config = require('./config/');
var router = express.Router();
app = express();
app.set('case sensitive routing', true);//·���Ƿ��Сд����
app.set('env', 'development');
//process.env.NODE_ENV = 'development';
[].map.call(config.path._static, function (val) {
    console.log('public:'+val);
    app.use(express.static(val));
});

/**
 * set tmpl engine
 */
app.locals.app  =config.app;
app.set('view engine', 'html');
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';

app.set('views', path.join(__dirname, 'views'));
//app.use(['/web'],require('./sub/web.js'));
//app.use(['/app'],require('./sub/app.js'));
app.use(['/backend'],require('./controller/backend'));
app.use(['/d'],require('./sub/demo.js'));
app.use('/dev',router);
app.use(function (req, res, next) {
    var err = new Error('Not Found 404 !');
    err.status = 404;
    next(err);
});
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
        message: err.message,
        error: {}
    });
});

/**
 * Register the route with Express
 */
module.exports = app;