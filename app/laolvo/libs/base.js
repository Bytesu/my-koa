/**
 * Created by byte_ on 2015/7/4.
 */
(function () {
    var single;

    function SuUtil() {
    }


    SuUtil.prototype.random = function (t) {
        var i = "",
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        t = t || 10;
        for (var n = 0; t > n; n++) i += o.charAt(Math.floor(Math.random() * o.length));
        return i
    }
    /**
     * �ж�ios,androidƽ̨
     */
    SuUtil.prototype.platform = function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //�ƶ��ն�������汾��Ϣ
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios�ն�
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android�ն˻�uc�����
            iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone����QQHD�����
            iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
        };
    }();

    return function () {
        if (!single)single = new SuUtil();
        return single;
    }
})();
