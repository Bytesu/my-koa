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
     * ÅÐ¶Ïios,androidÆ½Ì¨
     */
    SuUtil.prototype.platform = function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { //ÒÆ¶¯ÖÕ¶Ëä¯ÀÀÆ÷°æ±¾ÐÅÏ¢
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //iosÖÕ¶Ë
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //androidÖÕ¶Ë»òucä¯ÀÀÆ÷
            iPhone: u.indexOf('iPhone') > -1, //ÊÇ·ñÎªiPhone»òÕßQQHDä¯ÀÀÆ÷
            iPad: u.indexOf('iPad') > -1, //ÊÇ·ñiPad
        };
    }();

    return function () {
        if (!single)single = new SuUtil();
        return single;
    }
})();
