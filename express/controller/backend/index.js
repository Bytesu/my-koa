/**
 * 后台管理控制器
 * Created by bytesu on 15/9/13.
 */

var express = require('express');
var router = express.Router();
var ctr = require('./indexCtr');
var ctrInstance = new ctr();

router.get('/',ctrInstance.index);

module.exports = router;