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