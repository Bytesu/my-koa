/**
 * cookie-parser
 * Created by byte_ on 2015/7/6.
 * url:
 * 1. https://github.com/expressjs/cookie-parser?_ga=1.48453412.365377666.1435907301
 */

var btye = require('./../../libs/byte.js');
var cookieParser = require('cookie-parser');
module.exports = cookieParser(btye.randomStr(10));
