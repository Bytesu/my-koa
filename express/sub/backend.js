/**
 * Created by byte on 2015/7/5.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('./../config/index');
/***
 *  后台管理程序
 */
var backend = express();
router.use(require('./../routers/backend/index'));//路由器
module.exports = backend;





