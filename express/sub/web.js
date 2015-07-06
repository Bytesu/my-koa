/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  PC
 */
var web  = express();

web.get('/',function(req,res,next){

    console.log('web.mountpath --'+web.mountpath);
    res.send('PC home page  ...  ');
});
module.exports = web;