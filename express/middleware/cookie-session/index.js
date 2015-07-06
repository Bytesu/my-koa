/**
 * 简单的基于cookie的session中间件
 * Created by byte_ on 2015/7/6.
 * url:
 * 1. https://github.com/expressjs/cookie-session?_ga=1.219247643.365377666.1435907301
 *
 */
var cookieSession = require('cookie-session');
module.exports= cookieSession({
   name:'session',
    keys:['key1','key2']
});