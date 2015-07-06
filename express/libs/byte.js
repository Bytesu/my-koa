/**
 * byte:工具模块
 * Created by byte_ on 2015/7/6.
 *
 */
    var single ;
var byte = function () {
};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz023456789';

/***
 * 生成随机字符串
 * @param len 随机字符串长度，默认32位
 * @returns {string}
 */
byte.prototype.randomStr = function(len){
    len = len ? len : 32;
    var randomStr = '';
    var maxPos = chars.length;
    for (i = 0; i < len; i++) {
        randomStr += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return randomStr;
};

module.exports = function(){
    if(!single)single = new byte();
    return single;
}();