/**
 * Created by byte_ on 2015/7/6.
 */
var demoConfig = require('./../../config/demo.js'),
    log = require('./../../libs/logger'),
    config = require('./../../config/wx/'),
    _ = require('underscore'),
    EventProxy =  require('eventproxy'),
    wxUser =  require('./../../libs/wx/User.js'),
    wxApi =  require('./../../libs/wx/API.js'),
    io = require('./../../libs/socket.io.js'),
    mongodb = require('./../../libs/mongoose/'),
    util = require('./../../libs/byte.js');
var single;
function Wx() {
};

Wx.prototype.test = function (req, res, next) {
    if (!!req.query.echostr) {
        var echostr = validSignature(req.query);
        res.send(echostr);
        res.end();
    }else if (req.body.xml) {
        handleXml(req.body.xml);
        res.send('Finish Received !');
        res.end();
    }else{
        res.send('Finish Received !');
        res.end();
    }

};
//对应消息类型：文本、图片、音频、视频、小视频、链接、地理位置、事件
//对应事件：关注、取消关注、上报地理位置、扫描、点击菜单拉取消息、点击菜单跳转链接
var MsgType = {TEXT:'TEXT',IMAGE:'IMAGE',VOICE:'VOICE',VIDEO:'VIDEO',SHORTVIDEO:'SHORTVIDEO',LINK:'LINK',LOCATION:'LOCATION',EVENT:'EVENT'},
    EventType = {SUBSCRIBE:'SUBSCRIBE',UNSUBSCRIBE:'UNSUBSCRIBE',LOCATION:'LOCATION',SCAN:'SCAN',CLICK:'CLICK',VIEW:'VIEW',
        //客服会话状态通知事件
        KF_SWITCH_SESSION:"KF_SWITCH_SESSION",//转接会话
        KF_CLOSE_SESSION:"KF_CLOSE_SESSION",//关闭会话
        KF_CREATE_SESSION:"KF_CREATE_SESSION",//接入会话
    };
    EventType = {SUBSCRIBE:'SUBSCRIBE',UNSUBSCRIBE:'UNSUBSCRIBE',LOCATION:'LOCATION',SCAN:'SCAN',CLICK:'CLICK',VIEW:'VIEW'};


/**
 * 处理xml消息
 * @param xml：xml对象
 * todo:做优化
 */
function handleXml(xml) {
    console.log(xml)
    console.log('00000000000000')
    switch(xml.msgtype[0].toUpperCase()) {
        case MsgType.EVENT:
            console.log(xml);
            eventType(xml);
            break;
    }
    io.emit('chat.wx',xml);
};

function eventType (xml){

    switch(xml.event[0].toUpperCase())
    {
        case EventType.SUBSCRIBE:
            saveNewUser(xml);
            break;
    }

    return false;
};
/***
 * 保存新用户
 * @param User：新用户
 */
function saveNewUser(User){
    var ep = new EventProxy();

    ep.all('wx.token',function(token){
        console.log(token);

        wxUser.getUserInfo({
            token:token.access_token,
            openid:User.fromusername[0]
        },function(res){
            var user =   _.extend(User,JSON.parse(res));
            user.subscribe_time *= 1000;
            console.log(user);
            mongodb.UserModel.findOne({openid:user.openid},function(err,res_){
                if(err||!res_){
                    var UserEntity = new mongodb.UserModel(user);
                    UserEntity.save();
                }else if(res_){
                    console.log('--------------------');
                    console.log(res_);
                  //  res.save();
                }
            });

        })
     });
    wxApi.getToken(function(token){
        ep.emit('wx.token',token);
    });
}
/**
 * 验证签名
 * obj
 */
function validSignature(obj) {
    var query = obj;
    var joinStr = [query.timestamp, query.nonce, config.test.token];
    joinStr = joinStr.sort().join('');
    joinStr = util.sha1(joinStr);
    if (joinStr == query.signature) return query.echostr;
    return false;
};
module.exports = function () {
    if (!single)single = new Wx();
    return single;
}();
