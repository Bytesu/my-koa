/**
 * Created by byte_ on 2015/7/3.
 */
var express = require('express');
var logger = require('morgan');

var router = express.Router();
router.use(logger);

module.exports = router;