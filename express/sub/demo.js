/**
 * Created by byte_ on 2015/7/6.
 */
/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
var router = express.Router();
var path = require('path');



var config = require('./../config/index');



/***
 *  demo 测试
 */
var demo = express();
[].map.call(config.path._static, function (val) {
    demo.use(express.static(val));
});
demo.set('views', path.join(__dirname, './../views'));
demo.set('view engine', 'html');
demo.engine('html', require('ejs-mate'));
demo.locals._layoutFile = 'tmpl.html';
//demo.set('trust proxy', 1)
//中间件
demo.use(require('./../middleware/authentication/')); //权限验证中间件
demo.use(require('./../middleware/cookie/')); //cookie
demo.use(require('./../middleware/body-parser/')); //body-parser
demo.use(require('./../middleware/csrf/'));
//demo.use(require('./../middleware/cookie-session/'));
demo.all('*', require('./../middleware/compression/')); //gzip压缩模块
// error handler
app.use(function (err, req, res, next) { //csrf 禁止访问页面
    if (err.code !== 'EBADCSRFTOKEN') return next(err)

    // handle CSRF token errors here
    res.status(403)
    res.send('form tampered with')
});
router.use(require('./../routers/demo/index'));//路由器
demo.use(router);
module.exports = demo;

demo.get('/', function (req, res, next) {
    console.log(res.locals);
    console.log(process.env.NODE_ENV);
    console.log('backend.mountpath --' + demo.mountpath);
    console.log('req.app.locals --' + req.app.get('env'));
    console.log('req.route --%j', req.route);
    console.log('req.xhr --', req.xhr);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    console.log('Accept --', req.get('Accept') + '==' + req.header('Accept'));
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('name', 'tobi', {domain: '.example.com', path: '/admin', secure: true});
    res.cookie('rememberme', '1', {expires: new Date(Date.now() + 900000), httpOnly: true});
    //res.send('sub app backend test !  ');
    //res.status(500).json({ error: 'message' })
    //res.format({
    //    text: function(){
    //        res.send('hey');
    //    },
    //
    //    html: function(){
    //        res.send('<p>hey</p>');
    //    },
    //
    //    json: function(){
    //        res.send({ message: 'hey' });
    //    }
    //});
    //res.redirect(200 ,'www.baidu.com')

    /* res.download(__dirname+'/index.js', function(err){
     if (err) {
     // Handle error, but keep in mind the response may be partially-sent
     // so check res.headersSent
     } else {
     // decrement a download credit, etc.
     }
     });*/

    //res.sendFile(path [, options] [, fn]);
    // res.sendFile(__dirname+'/index.js' );

    // res.vary('User-Agent').render('docs');
    res.send('适时启动服务器');

});
return false;
