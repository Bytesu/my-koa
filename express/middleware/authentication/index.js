/**
 * 权限验证页面
 * Created by byte on 2015/7/5.
 */

function authenication(req, res, next) {
    //res.locals.var_test = '相应变量';//变量通过res.locals在中间件之间传值测试
    //console.log('此处进行了权限验证，验证未通过时直接返回无权访问提示页面!')
    next()//验证通过时传递给下一个
}
module.exports = authenication;