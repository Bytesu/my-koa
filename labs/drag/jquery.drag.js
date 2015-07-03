/**
 * Created by bytesu on 15-6-23.
 */
(function ($) {
        var default_ = {};
        $.fn.drag = function (options) {
            return this.each(function () {
                new Drag(this, options);
            });
        };

        function Drag(ctner, opt) {
            this.opt = opt ? $.extend({}, default_, opt) : default_;
            this.arg = {ele: null, tar: null, x: 0, y: 0, h: 0, half: 0};
            this.endPos = {x: 0, y: 0, x1: 0, y1: 0};
            this.tarPos = {x: 0, y: 0, x1: 0, y1: 0};
            this.move = false;
            this.init(ctner);
        }

        Drag.prototype.init = function (ctner) {
            var that = this;
            $(ctner).children().each(function () {
                $(this).mousedown(function (e) {
                    that.arg.ele = this;
                    var ele = this, $ele = $(this);
                    that.arg.x = e.pageX - $ele.offset().left;
                    that.arg.y = e.pageY - $ele.offset().top;
                    that.arg.h = $ele.height();
                    that.arg.half = that.arg.h / 2;
                    $ele.attr('class', 'maindash');
                    that.move = true;
                    $('<div>').addClass('dash').insertBefore($ele);
                });

            });

            $(document).mousemove(function (e) {
                if (!that.move)return false;
                that.endPos.x = e.pageX - that.arg.x;
                that.endPos.y = e.pageY - that.arg.y;
                that.endPos.y1 = that.endPos.x - that.arg.h;
                $(that.arg.ele).css({left: that.endPos.x, top: that.endPos.y});
                var $main = $('.main'), $temp = $('.dash');
                $main.each(function () {
                        that.arg.tar = this;
                        that.tarPos.x = $(that.arg.tar).offset().left;
                        that.tarPos.y = $(that.arg.tar).offset().top;
                        that.tarPos.y1 = that.tarPos.y + that.arg.h / 2;
                        that.arg.tarFirst = $main.eq(0);
                        that.arg.tarFirstY = that.arg.tarFirst.offset().top + that.arg.half;
                        if (that.endPos.y <= that.arg.tarFirstY)$temp.insertBefore(that.arg.tarFirst);
                        if (that.endPos.y >= that.tarPos.y - that.arg.half && that.endPos.y1 >= that.tarPos.y1)$temp.insertAfter($(that.arg.tar));
                    }
                );
            }).mouseup(function(e){
                var $dash = $('.dash');
                if(!$(that.arg.ele)&&!$dash)return false;

                $(that.arg.ele).insertBefore($dash);
                $(that.arg.ele).attr('class','main');
                $dash.remove();
                that.move =  false;
            });
        }
    })
(jQuery);