/**
 * Created by byte_ on 2015/7/3.
 */
var config = {
    /***
     * 系统信息:系统名称\版本、开发者、开发者邮箱等信息
     */
    app: {
        name:'my koa',
        version:'1.0.0',
        author:'Bytesu',
        email:'byte_su@163.com',
        company:'创业公司'
    },
    path: {
        _static: ["app", ".tmp"]//静态文件路径
    }
};
//process.env.NODE_ENV = 'development'
console.log('process.env.NODE_ENV:',process.env.NODE_ENV);
console.log('process.env.NODE_ENV:',process.env.NODE_ENV);
module.exports = config;