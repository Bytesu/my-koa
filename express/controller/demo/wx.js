/**
 * Created by byte_ on 2015/7/6.
 */
var demoConfig = require('./../../config/demo.js'),
    log = require('./../../libs/logger'),
    config = require('./../../config/wx/'),
    _ = require('underscore'),
    util = require('./../../libs/byte.js');
var single;
function Wx() {
};

Wx.prototype.test = function (req, res, next) {
    console.log((!!req.query.echostr) + '-------------------------------' + req.query.echostr);
    if (!!req.query.echostr) {
        var echostr = validSignature(req.query);
        console.log('-------------------------------' + echostr);
        res.send(echostr);
        res.end();
    }
    if (req.body.xml) {
        handleXml(req.body.xml);
    }
    res.send('Finish Received !');
    res.end();
};
//对应消息类型：文本、图片、音频、视频、小视频、链接、地理位置、事件
//对应事件：关注、取消关注、上报地理位置、扫描、点击菜单拉取消息、点击菜单跳转链接
var EventType = ['TEXT','IMAGE','VOICE','VIDEO','SHORTVIDEO','LINK','LOCATION','EVENT'],
    MsgType = ['SUBSCRIBE','UNSUBSCRIBE','LOCATION','SCAN','CLICK','VIEW'];


/**
 * 处理xml消息
 * @param xml：xml对象
 */
function handleXml(xml) {
    console.log(xml);
};
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
