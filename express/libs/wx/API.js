/**
 * Created by byte on 2015/7/17.
 */
var single;
var config = require('./../../config/wx/');
var request = require('request');
var EventProxy = require('eventproxy');
var moment = require('moment');
var js2xmlparser = require("js2xmlparser");
var data = {
    "firstName": "John",
    "lastName": "Smith"
};

console.log(js2xmlparser("person", data));
/**
 * todo:
 * 1. request
 * 2. bluebird
 * 3. xml2json
 * 4. json2xml
 */

/***
 * 微信接口API类
 * @constructor
 */
function API() {
    this.token = {};
    this.initToken();
}

/**
 * 初始化token
 */
API.prototype.initToken = function (cb) {
    var that = this;
    var ep = new EventProxy();
    ep.all('wx.token', function (res) {
        res =  JSON.parse(res)
        var date = new Date();
        console.log(res)
        res.expires_in = new Date(date.getTime() + (res.expires_in - 200) * 1000);
        that.token = res;
        if (typeof cb == 'function') {
            cb(that.token);
        }
        ///return that.token;
    });
    request.get(config.token().url, function (error, response, body) {
        if (error)throw new Error('获取微信TOKEN失败!')
        if (!error && response.statusCode == 200) {
            ep.emit('wx.token', body);
        }
    });
};
/**
 * 获取有效token
 * @param cb 有效回调，
 * @returns {boolean}
 */
API.prototype.getToken = function (cb) {

    if (typeof cb !== 'function') {
        throw new TypeError('参数类型不对');
        return false;
    }
    if (!this.token.expires_in || !this.token.token || moment().isBefore(this.token.expires_in)) {//无效是重新获取
        this.initToken(cb);
        return false;
    }

    cb(this.token)
};
module.exports = function () {
    if (!single)single = new API();
    return single;
}();


