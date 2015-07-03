/**
 * Created by bytesu on 15-5-26.
 */
(function ($) {
    var _default = {
        date: new Date(),

        data: {}
    }
    var _cal, oneDay = 24 * 60 * 60 * 100;

        /**
         * 日历类
         * @constructor
         */
        function Calender() {
        //
        };
    /**
     * 获取month月的长度
     * @param year
     * @param month
     */
    Calender.prototype.getMonthLen = function (year, month) {
        var nextMonth = new Date(year, month + 1, 1); //获取下个月的第一天
        nextMonth.setHours(nextMonth.getHours() - 3); //由于获取的天是0时,所以减去3小时则可以得出该月的天数
        return nextMonth.getDate();
    };
    /* 获取year年month月的第一天为星期几
     * @param year
     * @param month
     */
    Calender.prototype.getFirstDay = function (year, month) {
        var firstDay = new Date(year, month + 1, 1);
        return firstDay.getDay(); //getDay()方法来获取
    };

    Calender.prototype.prev31 = function (date) {
        date = new Date(date - 31 * oneDay);
        return date;
    }
    Calender.prototype.next31 = function (date) {
        return new Date((date).valueOf() + 62 * oneDay);
    }
    Calender.prototype.getFormatData = function (date) {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    };
    Calender.prototype.getShowDate = function (date) {
        return date.getFullYear() + '.' + (date.getMonth() + 1) + '.' + date.getDate() + ' ' +date.getHours()+':'+date.getMinutes() ;
    };

    function _alert() {
        alert('请求异常,请查看是否配置错误!')
    }


    /**修复ie8及以下版本new Date('2015-02-12')==NaN
     * Parses string formatted as YYYY-MM-DD to a Date object.
     * If the supplied string does not match the format, an
     * invalid Date (value NaN) is returned.
     * @param {string} dateString format YYYY-MM-DD, with year in
     * range of 0000-9999, inclusive.
     * @return {Date} Date object representing the string.
     */
    Calender.prototype.toDate = function(dateString){
        /*if(Number.NaN){
            alert('NaN')
        }else{
            alert('NaN false')
        }*/
        /*if(new Date(dateString)){
            return new Date(dateString);
        }*/
        var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
            date = new Date(NaN), month,
            parts = isoExp.exec(dateString);
        if(parts) {
            month = +parts[2];
            date.setFullYear(parts[1], month - 1, parts[3]);
            if(month != date.getMonth() + 1) {
                date.setTime(NaN);
            }
        }
        return date;

    };

    Calender.prototype.init = function (_this, _date) {

        _date = this.toDate(_date);
        var that = this;
        var _ul = $('<ul></ul>');
        var _ul2 = $('<ul></ul>');
        var _ul3 = $('<ul></ul>');
        _ul.addClass('cal-ctner clearfix');
        _ul2.addClass('cal-ctner clearfix');
        _ul3.addClass('cal-ctner clearfix');
        //var cal = getSingleton();
        var mlen = that.getMonthLen(_date.getFullYear(), _date.getMonth() + 1);
        var prev31 = that.prev31(_date);
        var next31 = that.next31(_date);
        var i = 1;
        try {
            $.ajax({
                type: 'get',
                url: _default.url.set,
                data: {
                    startDay: that.getFormatData(new Date(new Date() - oneDay * 31)),
                    dayNum: 93
                }
            }).done(function (data, status, xhr) {
                if (data.ret) {
                    renderData(data.data);
                } else {
                    alert(data.msg);
                }
            });
        } catch (e) {
            _alert(e);
        }

        function renderData(argData) {
            var i = 0;
            for (var r in  argData) {
                var _val = argData[r];
                var date = that.toDate(r);
                var _li = $('<li></li>');
                var week = (that.getFirstDay(date.getFullYear(), date.getMonth() + 1) + (date.getDate())) % 7;
                week = getWeek(week);
                var _month;
                if (date.getDate() == 1) {
                    _month = getMonth(date.getMonth() + 1);
                } else {
                    _month = '&nbsp;';
                }
                _li.html(_month + '<a href="javascript:void(0)">' + (date.getDate()) + '</a>' + week).find('a').data('date', that.getFormatData(date));
                /***
                 * 在此判断是否符合给定条件 _defult
                 */
                if (_val > 0) {
                    _li.find('a').addClass('active');
                    _li.find('a').hover(function () {
                        var _that = this;
                        try {
                            $.ajax({
                                type: 'post',
                                url: _default.url.date,
                                data: {
                                    startDate: $(_that).data('date'),
                                    endDate: $(_that).data('date'),
                                    isJson: 1
                                }
                            }).done(function (data, status, xhr) {
                                if (data.ret) {
                                    tipsData(data.data);
                                } else {
                                    alert(data.msg);
                                }
                            });
                        } catch (e) {
                            alert(e);
                        }

                        function tipsData(data) {
                            var _tips = $('<div></div>'), _left;_left = $(_that).offset().left - 165;
                            var _ctntCtner = $('<div></div>');
                            var _downCtner = $('<div></div>');
                            $.each(data, function (idx, val) {
                                idx = idx!=0?'not-first':'';
                                var html = '<div class="cal-item clearfix '+idx+'"><img src=""  />\
                            <div class="cal-tips-ctnt2">\
                                <span class="cal-tips-title"></span>\
                            <br>\
                            <div class="cal-tips-ctnt-ctner">\
                            <span class="cal-tips-ctnt-time" ></span>\
                            </div>\
                            <a href="#" class="show-status"></a>\
                            </div></div>';
                                var _html1 = $(html);
                                _html1.find('img').attr('src',val.pic_url).siblings('.cal-tips-ctnt2');
                                _html1.find('.cal-tips-title').html(val.title);
                                _html1.find('.cal-tips-ctnt-time').html('时间:'+that.getShowDate(new Date(parseInt(val.show_time)))+' 票价:'+val.min_price+' - '+val.max_price+'元')
                                _html1.find('.show-status').addClass('show-status'+val.show_status).html((val.show_status==0)?'即将上演':(val.show_status==1?'订票':'预订'));
                                _ctntCtner.addClass('cal-tips-ctnt').append(_html1);

                            });
                            _downCtner.addClass('cal-tips-down');
                            _ctntCtner.append(_downCtner);
                            _tips.append(_ctntCtner);
                            //_tips.hide();
                            $(_that).append(_tips);
                            _tips.addClass('cal-tips').css({
                                top: $(_that).offset().top - _tips.height() - 15 + 'px',
                                left: _left + 'px'
                            }).fadeIn(300);

                        }

                    }, function () {
                         $('.cal-tips').remove();
                    })
                }
                _ul.append(_li);
                date.setHours(date.getHours() + 24);
            }
            var _ctner = $('<div></div>');
            _ctner.append(_ul).addClass('cal-ul-ctner');
            $(_this).html(_ctner);
            var _mius = $('<a class="cal-minus"></a>');
            _mius.click(function () {
                $(this).siblings('div').find('ul').animate({
                    left: 0
                }, 500, function () {
                    that.init(_this, that.prev31(_date))
                });
            });
            $(_this).append(_mius);
            var _plus = $('<a class="cal-plus"></a>');

            _plus.click(function () {
                $(this).siblings('div').find('ul').animate({
                    left: -_ul.find('li').width() * 62
                }, 500, function () {
                    that.init(_this, new Date((_date).valueOf() + 31 * oneDay))
                });
            });
            $(_this).append(_plus);
            _ul.css({left: -_ul.find('li').width() * 31});
        }
    };
    /***
     * 数字形式月份转化为汉字形式月份
     * @param month
     * @returns {string}
     */
    function getMonth(month) {
        var _day = '';
        switch (month) {
            case 1:
                _day += '一';
                break;
            case 2:
                _day += '二';
                break;
            case 3:
                _day += '三';
                break;
            case 4:
                _day += '四';
                break;
            case 5:
                _day += '五';
                break;
            case 6:
                _day += '六';
                break;
            case 7:
                _day += '七';
                break;
            case 8:
                _day += '八';
                break;
            case 9:
                _day += '九';
                break;
            case 10:
                _day += '十';
                break;
            case 11:
                _day += '十一';
                break;
            case 12:
                _day += '十二';
                break;
        }
        return _day + '月';
    }

    /***
     * 数字形式星期转换为汉字形式星期
     * @param day
     * @returns {string}
     */
    function getWeek(day) {
        var _day = '';
        switch (day) {
            case 0:
                _day += '一';
                break;
            case 1:
                _day += '二';
                break;
            case 2:
                _day += '三';
                break;
            case 3:
                _day += '四';
                break;
            case 4:
                _day += '五';
                break;
            case 5:
                _day += '六';
                break;
            case 6:
                _day += '日';
                break;
        }
        return _day;
    }

    /**
     * 获取Calender单例
     * @returns {*}
     */
    function getSingleton() {
        if (_cal)return _cal;
        _cal = new Calender(new Date());
        return _cal;
    }

    /**
     * $.calender初始化
     * @param opt
     */
    $.fn.calender = function (opt) {
        _default = $.extend(_default, opt);
        this.each(function () {
            getSingleton(opt).init(this, _default.date);
        });
    };
})($);