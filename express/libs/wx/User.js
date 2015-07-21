/**
 * Created by byte on 2015/7/19.
 */
var User = function(){},single,
    request =  require('request');
var EventProxy =  require('eventproxy');
var config = require('./../../config/wx/');
var  moment= require('moment');
var js2xmlparser = require("js2xmlparser");

User.prototype.getUserInfo = function(obj,cb){
    var ep  = new EventProxy();
    ep.all('user.info',function(res){
        cb(res);
    });
    /**
     * todo:���Ż�,��ȡ����ֱ��Ϊjson����
     */
    request.get(config.user(obj.token,obj.openid).url,function (error, response, body) {
        if(error)throw new Error('��ȡ΢��openidΪ'+obj.token+'�û���Ϣʧ��!')
        if (!error && response.statusCode == 200) {
            ep.emit('user.info',body);
        }
    });
};


module.exports = function(){
    if(!single)single = new User();
    return single;
}();

