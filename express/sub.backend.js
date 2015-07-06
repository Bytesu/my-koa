/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  ��̨��Ӧ��
 */
var backend  = express();
backend.all('*',require('./authentication'));
backend.get('/',function(req,res,next){
    console.log(res.locals);
    console.log(process.env.NODE_ENV);
    console.log('backend.mountpath --'+backend.mountpath);
    console.log('req.app.locals --'+req.app.get('env'));
    console.log('req.route --%j',req.route);
    console.log('req.xhr --',req.xhr);
    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
    console.log('Accept --',req.get('Accept')+'=='+req.header('Accept'));
    res.append('Warning', '199 Miscellaneous warning');
    res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true });
    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
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

    res.download('./index.js', function(err){
        if (err) {
            console.log('下载错误')
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
        } else {
            // decrement a download credit, etc.
        }
    });


});
module.exports = backend;