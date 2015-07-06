/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  移动端子应用
 */
var app  = express();

app.get('/',function(req,res,next){

    console.log('app.mountpath --'+app.mountpath);
    res.send('移动端子应用首页，建设中...  ')
});
module.exports = app;