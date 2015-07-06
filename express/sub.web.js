/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  前台子应用
 */
var web  = express();

web.get('/',function(req,res,next){

    console.log('web.mountpath --'+web.mountpath);
    res.send('PC前端子应用首页 ，建设中...  ');
});
module.exports = web;