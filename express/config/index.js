/**
 * Created by byte_ on 2015/7/3.
 */
var config = {
    /***
     * ϵͳ��Ϣ:ϵͳ����\�汾�������ߡ��������������Ϣ
     */
    app: {
        name:'my koa',
        version:'1.0.0',
        author:'Bytesu',
        email:'byte_su@163.com',
        company:'��ҵ��˾'
    },
    path: {
        _static: ["app", ".tmp"]//��̬�ļ�·��
    }
};
//process.env.NODE_ENV = 'development'
console.log('process.env.NODE_ENV:',process.env.NODE_ENV);
console.log('process.env.NODE_ENV:',process.env.NODE_ENV);
module.exports = config;