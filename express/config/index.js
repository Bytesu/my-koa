/**
 * Created by byte_ on 2015/7/3.
 */
    var util = require('./../libs/byte.js')
var config = {
    /***
     * ϵͳ��Ϣ:ϵͳ����\�汾�������ߡ��������������Ϣ
     */
    app: {
        name:'my koa',
        version:'1.0.0',
        author:'Bytesu',
        email:'byte_su@163.com',
        company:'3W'
    },
    cookie:{
      secret:util.randomStr(10)
    },
    path: {
        _static: ["app", ".tmp"]//��̬�ļ�·��
    }
};
module.exports = config;