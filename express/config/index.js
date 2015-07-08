/**
 * Created by byte_ on 2015/7/3.
 */
    var util = require('./../libs/byte.js')
var config = {
    /***
     * 系统信息:系统名称\版本、开发者、开发者邮箱等信息
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
        _static: ["app", ".tmp",'labs']//静态文件路径
    }
};
module.exports = config;