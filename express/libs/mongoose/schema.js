/**
 * Created by byte on 2015/7/19.
 * App DB Schema
 */
module.exports.user = {
    nickname:String,//昵称
    name:String,//姓名
    sex:Number,//1为男，2为女，0为未知
    headimgurl:String,//用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空。若用户更换头像，原有头像URL将失效
    age:Number,//年龄
    phone:String,//手机
    city:'',//所在城市
    province:'',//所在省份
    country:'',//所在国家
    tousername:String,//关注的公众号
    openid:String,//openid
    unionid:String,//只有在用户将公众号绑定到微信开放平台帐号后，才会出现该字段
    remark:String,//公众号运营者对粉丝的备注，公众号运营者可在微信公众平台用户管理界面对粉丝添加备注
    groupid:String,//用户所在的分组ID
    subscribe_time:String//用户关注时间，为时间戳。如果用户曾多次关注，则取最后关注时间,单位为毫秒
};