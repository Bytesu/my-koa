/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  ǰ̨��Ӧ��
 */
var web  = express();

web.get('/',function(req,res,next){

    console.log('web.mountpath --'+web.mountpath);
    res.send('PCǰ����Ӧ����ҳ ��������...  ');
});
module.exports = web;