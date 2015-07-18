/**
 * Created by byte on 2015/7/17.
 */
var single ;
var config = require('./../../config/wx/');
var request = require('request');
var EventProxy =  require('eventproxy');
var  moment= require('moment');
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
 * ΢�Žӿ�API��
 * @constructor
 */
function API(){
    this.token = {};
    this.initToken();
}




/**
 * ��ʼ��token
 */
API.prototype.initToken = function(){
    var that = this;
    var ep  = new EventProxy();
    ep.all('wx.token',function(res){
        console.log(res);
        var date = new Date();
        res.expires_in = new Date(date.getTime()+(res.expires_in-200)*1000);
        that.token = res;
        return that.token;
    });
    request.get(config.token().url,function (error, response, body) {
        if(error)throw new Error('��ȡ΢��TOKENʧ��!')
        if (!error && response.statusCode == 200) {
            ep.emit('wx.token',body);
        }
    });
};
/**
 * �ж�token�Ƿ���Ч��ʧЧʱ���»�ȡ
 * @returns {boolean}
 */
API.prototype.judgeValid = function(){
    if(!this.token.expires_in||!this.token.token)return false;
    if(moment().isBefore(this.token.expires_in))return false;
    return this.initToken();
};
module.exports = function(){
    //if(!single)single = new API();
    return single;
}();


