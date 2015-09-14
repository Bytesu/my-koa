/**
 * Created by byte_ on 2015/7/6.
 */
var express = require('express');
var BackendRouter = require('./../../controller/backend/');
//var Wx = require('./../../controller/demo/wx.js');
var backend = new BackendRouter();
var router = express.Router();
/* router2.get('/', function (req, res, next) {
 res.send('test ' +'----------------');
 });*/
router.get('/',backend.index);
//router.get('/test',D.test);
//router.get('/blog',D.blog);
//router.get('/im',D.im);
//router.all('/wx/',function(req,res,next){
//        console.log(req.path);
//        next();
//    },
//    Wx.test);
module.exports = router;