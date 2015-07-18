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
//��Ӧ��Ϣ���ͣ��ı���ͼƬ����Ƶ����Ƶ��С��Ƶ�����ӡ�����λ�á��¼�
//��Ӧ�¼�����ע��ȡ����ע���ϱ�����λ�á�ɨ�衢����˵���ȡ��Ϣ������˵���ת����
var EventType = ['TEXT','IMAGE','VOICE','VIDEO','SHORTVIDEO','LINK','LOCATION','EVENT'],
    MsgType = ['SUBSCRIBE','UNSUBSCRIBE','LOCATION','SCAN','CLICK','VIEW'];


/**
 * ����xml��Ϣ
 * @param xml��xml����
 */
function handleXml(xml) {
    console.log(xml);
};
/**
 * ��֤ǩ��
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
