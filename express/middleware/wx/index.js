/**
 * Created by byte on 2015/7/13.
 */
var _config = require('./../../config/wx/');


function wx(req, res, next) {

    var request = require('request');
    request( appsecret.url.token, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
        }else{
            next('');
        }
    })
    res.locals.var_test = '��Ӧ����';//����ͨ��res.locals���м��֮�䴫ֵ����
    console.log('�˴�������Ȩ����֤����֤δͨ��ʱֱ�ӷ�����Ȩ������ʾҳ��!')
    next()//��֤ͨ��ʱ���ݸ���һ��
}
module.exports = wx;