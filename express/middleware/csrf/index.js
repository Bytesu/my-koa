/**
 * Created by byte_ on 2015/7/6.
 */
var csrf = require('csurf');
module .exports = csrf({cookie:true});