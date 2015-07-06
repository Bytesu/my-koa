/**
 * Created by byte_ on 2015/7/6.
 */
var express = require('express');
var D = require('./../../controller/demo/');
var router = express.Router();
/*var router2 = express.Router();
router2.get('/', function (req, res, next) {
    res.send('test ' +'----------------');
});*/

router.get('/test',D.test);
module.exports = router;