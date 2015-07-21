/**
 * Created by byte_ on 2015/7/6.
 */
var demoConfig = require('./../../config/demo.js')
var single;

function Demo() {

}
Demo.prototype.test = function (req, res, next) {
    //bodyparser
    console.log('req.body--%j',req.body);
    //req
    console.log('req.hostname--' + req.hostname)
    console.log('req.ip--' + req.ip)
    console.log('req.originalUrl--' + req.originalUrl)

    //cookie
    console.log('cookie -----------%j', req.cookies);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    res.cookie('name', 'tobi', {path: '/', secure: true}); //Marks the cookie to be used with HTTPS only.
    res.cookie('name1', 'tobi', {path: '/', signed: true}); //Indicates if the cookie should be signed.
    res.cookie('rememberme', '1', {expires: new Date(Date.now() + 900000), httpOnly: true}); //Path for the cookie. Defaults to “/”.
    res.clearCookie('foo', {path: '/'});

    //session
//    var n = req.session.views || 0;
  //  req.session.views = n++;
    console.log('--------------------here');
    //console.log('req.session.views--'+req.session.views);
    //res.render('index');

   res.json({
        firstName: 'Mohandas'
        , lastName: 'Gandhi'
        , aliases: [{
            firstName: 'Mahatma'
            , lastName: 'Gandhi'
        }, {
            firstName: 'Bapu'
        }]
    });


    //res.end(n+' views')
};
Demo.prototype.index = function (req, res, next) {
    res.render('index')
};
Demo.prototype.blog = function (req, res, next) {
    res.render('blog')
};
Demo.prototype.im = function (req, res, next) {
    res.render('im')
};
module.exports = function () {
    if (!single)single = new Demo();
    return single;
}();
