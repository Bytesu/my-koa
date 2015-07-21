/**
 * Created by byte on 2015/7/13.
 */
//微信配置参数
var wx = {
    appID: 'wxfa5b64127daa92f0',
    appsecret: '8deeacfdbd94f65290205a1e38a3b32c',
    token: function(){
        return  {
            url:'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='+this.appID + '&secret=' + this.appsecret,
                expires:7200
        }
    },
    user:function(token,openid){//
        return {
            url:'https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+'&openid='+openid+'&lang=zh_CN'//根据openid获取用户信息url
        }
    },
    kf:function(){

        return {
          //获取客服基本信息url
          list:'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=ACCESS_TOKEN',
            //获取在线客服列表
            online:'https://api.weixin.qq.com/cgi-bin/customservice/getonlinekflist?access_token=ACCESS_TOKEN',
            //添加客服
            add:'https://api.weixin.qq.com/customservice/kfaccount/add?access_token=ACCESS_TOKEN',
            //更新客服信息
            update:'https://api.weixin.qq.com/customservice/kfaccount/update?access_token=ACCESS_TOKEN',
            //删除客服信息
            delete:'https://api.weixin.qq.com/customservice/kfaccount/del?access_token=ACCESS_TOKEN&kf_account=KFACCOUNT'
        };
    },
    test:{
        token:'Bytesu211064'
    }

};
/***
 * 根据key获取兼职
 * @param key
 */
function get(key){
    if(typeof key !== 'string')throw new TypeError('参数类型错误!');
    if(wx[key]==undefined)throw new Error('找不到'+key+'!');
    return wx[key];
}

module.exports = wx;