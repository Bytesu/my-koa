/**
 * Created by byte on 2015/7/13.
 */
//΢�����ò���
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
            url:'https://api.weixin.qq.com/cgi-bin/user/info?access_token='+token+'&openid='+openid+'&lang=zh_CN'//����openid��ȡ�û���Ϣurl
        }
    },
    kf:function(){

        return {
          //��ȡ�ͷ�������Ϣurl
          list:'https://api.weixin.qq.com/cgi-bin/customservice/getkflist?access_token=ACCESS_TOKEN',
            //��ȡ���߿ͷ��б�
            online:'https://api.weixin.qq.com/cgi-bin/customservice/getonlinekflist?access_token=ACCESS_TOKEN',
            //��ӿͷ�
            add:'https://api.weixin.qq.com/customservice/kfaccount/add?access_token=ACCESS_TOKEN',
            //���¿ͷ���Ϣ
            update:'https://api.weixin.qq.com/customservice/kfaccount/update?access_token=ACCESS_TOKEN',
            //ɾ���ͷ���Ϣ
            delete:'https://api.weixin.qq.com/customservice/kfaccount/del?access_token=ACCESS_TOKEN&kf_account=KFACCOUNT'
        };
    },
    test:{
        token:'Bytesu211064'
    }

};
/***
 * ����key��ȡ��ְ
 * @param key
 */
function get(key){
    if(typeof key !== 'string')throw new TypeError('�������ʹ���!');
    if(wx[key]==undefined)throw new Error('�Ҳ���'+key+'!');
    return wx[key];
}

module.exports = wx;