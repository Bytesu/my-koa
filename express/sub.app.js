/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
/***
 *  �ƶ�����Ӧ��
 */
var app  = express();

app.get('/',function(req,res,next){

    console.log('app.mountpath --'+app.mountpath);
    res.send('�ƶ���Ӧ����ҳ ��������...  ')
});
module.exports = app;