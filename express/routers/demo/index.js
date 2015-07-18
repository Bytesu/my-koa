/**
 * Created by byte_ on 2015/7/6.
 */
var express = require('express');
var D = require('./../../controller/demo/');
var Wx = require('./../../controller/demo/wx.js');
var router = express.Router();
/*var router2 = express.Router();
router2.get('/', function (req, res, next) {
    res.send('test ' +'----------------');
});*/

router.get('/test',D.test);
router.get('/im',D.im);
router.all('/wx/',function(req,res,next){
        console.log(req.path)
        next();
    },
    Wx.test);
router.all('/im',Wx.test);
module.exports = router;