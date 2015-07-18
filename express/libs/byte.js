/**
 * byte:工具模块
 * Created by byte_ on 2015/7/6.
 */
var single;
var crypto = require('crypto');
var byte = function () {
};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz023456789';

/***
 * 生成随机字符串
 * @param len 随机字符串长度，默认32位
 * @returns {string}
 */
byte.prototype.randomStr = function (len) {
    len = len ? len : 32;
    var randomStr = '';
    var maxPos = chars.length;
    for (i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomStr;
};
byte.prototype.obj2Arr = function () {
    var _ = require('underscore');
    console.log('----------------' + (  _.values({one: 3, two: 5, three: 1}).sort().length));
};


byte.prototype.sha1 = function (str) {
    if(typeof str !='string') throw  new TypeError('参数类型不匹配!')
    var sha1 = crypto.createHash('sha1');
    sha1.update(str);
    return sha1.digest('hex');
};
module.exports = function () {
    if (!single)single = new byte();
    //single.sha1();
    return single;
}();