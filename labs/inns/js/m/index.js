KISSY.add('m/index', function (S, Node, Base, Anim) {


    var defaults = {
        calling: {
            num1: 'images/calling1.jpg',
            num2: 'images/calling2.jpg',
        },
        body: {
            num1: 'images/android/body1.png',
            num2: 'images/android/body2.png'
        },
        androidRecordingImg: {
            num1: 'images/android/recording/recording1.jpg',
            num2: 'images/android/recording/recording2.jpg'
        },
        header: {
            num1: 'images/recoding/header1.jpg',
            num2: 'images/recoding/header2.jpg'
        },
        recoding: {//iphone录音
            num1: 'sound/Helium.mp3',//仙剑之父
            num2: 'sound/Helium.mp3'//
        },
        tips: 'sound/msg-iphone.mp3',
        soundCalling: {
            android: 'sound/Helium.ogg',
            iphone: 'sound/iphone.mp3'
        },
        androidRecording: { //安卓录音
            num1: 'sound/Helium.ogg',//仙剑之父
            num2: 'sound/Helium.ogg'
        },
        wx: {
            num1: 'images/wx/wx1.jpg',
            num2: 'images/wx/wx2.jpg'
        }
    };
    var $ = Node.all;

    function Rcording(opt) {
        this.defaluts = S.merge(defaults, opt || {});
        this.rander = this.random();
        this.audio = $('.section1 audio');
        this.tips = $('.section3 .tips');
        this.tips1 = $('.section3 .tips-1');
        this.tips2 = $('.section3 .tips-2');
        this.section3 = $('.section3');
        this.tipBg = $('.section3 .desk-top');
        this.layer = $('.section3 .layer');
        this.section4 = $('.section4');

        if (this.isAndroid()) {
            this.android1 = $('.section1-android');
            this.android2 = $('.section2-android');
            this.android1.show();
            this.rander == 2 ? $('.body', this.android1).attr('src', this.defaluts.body['num' + this.rander]) : '';
            this.recordingbtn = $('.btn-recording');
            this.recordingBottom = $('.section1-android  .bottom-0');
            this.audio[0].src = this.defaluts.soundCalling.android;
            this.init();
        } else {
            this.receive = $('.btn-receive');
            this.section1 = $('.section1');
            this.calling = $('.section1 .iphone-calling');
            this.calling.attr('src', this.defaluts.calling['num' + this.rander]);
            this.rander == 2 ? $('h3', this.section1).html('仙剑之弟 - 吴磊') : '';
            this.section2 = $('.section2');
            this.refuseImg = $('.section2 .bottom-0');
            this.refuse = $('.section2 .refuse');


            var that = this;
            that.section1.addClass('flex-ctner');

            this.receive.on('click', function () {
                that.section1.removeClass('flex-ctner');
                that.seconds();
                that.audio[0].loop = false;
                that.audio.on('ended',function(){
                    that.audio.remove('ended');
                    that.section2.removeClass('flex-ctner');
                    that.desktop();
                });
                that.audio[0].src = that.defaluts.recoding['num' + that.rander];
                that.rander == 2 ? $('h3', that.section2).html('仙剑之弟-吴磊') : '';
                that.rander == 2 ? $('img.fr', that.section2).attr('src', that.defaluts.header['num' + that.rander]) : '';
                that.section2.addClass('flex-ctner');
                that.refuse.css({
                    left: that.refuseImg.width() * 0.32 + 'px',
                    bottom: that.refuseImg.height() * 0.10 + 'px',
                    height: that.refuseImg.height() * 0.26 + 'px',
                    width: that.refuseImg.width() * 0.36 + 'px'
                }).on('click', function () {
                    that.audio.remove('ended');
                    that.section2.removeClass('flex-ctner');
                    that.desktop();
                })
            });
        }
    }
    S.extend(Rcording, Base, {
        desktop: function () {
            var that = this;
            that.audio[0].pause();
            that.tips.width(w * 0.20 + 'px');

            that.section3.addClass('flex-ctner');
            var w = that.tipBg.width() * 0.183;
            var h = that.tipBg.height() * 0.183;

            that.tips1.css({
                left: (that.tipBg.width() * 0.237) + 'px'
            });
            that.tips2.css({
                left: (that.tipBg.width() * 0.473) + 'px'
            });
            that.tips.css({
                width: '0px',
                zIndex: 11,
                top: (that.tipBg.height() * 0.70) + 'px'
            }).addClass('tips-animate');
            setTimeout(function () {
                that.audio[0].src = that.defaluts.tips;
                that.audio[0].loop = false;
                that.tips2.css({
                    width: w * 0.30 + 'px',
                    top: (that.tipBg.height() * 0.70 - h * 0.30 / 2) + 'px',
                    left: (that.tipBg.width() * 0.473 - w * 0.30 / 2) + 'px'
                });
            }, 1000);
            setTimeout(function () {
                that.audio[0].src = that.defaluts.tips;
                that.tips1.css({
                    width: w * 0.30 + 'px',
                    top: (that.tipBg.height() * 0.70 - h * 0.30 / 2) + 'px',
                    left: (that.tipBg.width() * 0.237 - w * 0.30 / 2) + 'px'
                });
            }, 2000);
            setTimeout(function () {
                try {
                    that.layer.show();
                    $('img', that.layer[0]).on('click', function () {
                        that.section3.removeClass('flex-ctner');
                        $($('img', that.section4)[0]).attr('src', that.defaluts.wx['num' + that.rander]).on('click', function () {
                            window.location.href = 'share.html';
                        });
                        that.section4.addClass('flex-ctner');
                    });
                } catch (e) {
                    alert(e)
                }
            },3000);
        },

        seconds: function () {
            var that = this;
            var secTips = $('.recoding-seconds');
            var sec = 0, min = 0, msg = {sec: null, min: null};
            setInterval(function () {
                sec++;
                if (sec < 10) {
                    msg.sec = '0';
                } else if (sec > 59) {
                    sec = 0;
                    msg.sec = '0';
                    min++;
                } else {
                    msg.sec = '';
                }
                msg.min = min < 10 ? '0' : '';
                msg.sec += sec;
                msg.min += min;
                if (secTips && secTips.html)secTips.html(msg.min + ' : ' + msg.sec);
            }, 1000);
        },
        init: function () {
            var that = this;
            that.recordingbtn.css({
                right: that.recordingBottom.width() * 0.03 + 'px',
                bottom: that.recordingBottom.height() * 0.16 + 'px',
                height: that.recordingBottom.height() * 0.37 + 'px',
                width: that.recordingBottom.width() * 0.452 + 'px'
            }).on('click', function () {
                that.android1.hide();
                that.audio[0].loop = false;
                that.audio.on('ended',function(){
                    that.audio.remove('ended');
                    that.section2.removeClass('flex-ctner');
                    that.desktop();
                });
                that.audio[0].src = that.defaluts.androidRecording['num' + that.rander];
                $($('img', that.android2)[0]).attr('src', that.defaluts.androidRecordingImg['num' + that.rander]);
                that.audio[0].src = that.defaluts.androidRecording['num' + that.rander];
                that.android2.show();
                $('.bottom-0', that.android2).on('click', function () {
                    that.android2.hide();
                    that.desktop();
                });
            })
        },
        animate: function () {

        },
        random: function () {
            return Math.random() * 2 > 1 ? 1 : 2;
        },
        isAndroid: function () {
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                return false;
            } else if (/android/.test(ua)) {
                return true;
            }
        }
    });

    return Rcording;
}, {requires: ['node', 'base', 'anim']});
