/**
 * Created by Jason on 15/5/27.
 */
(function ($) {
    "use strict";

    var defaults = {
        zoomStep: .1, //每次放大缩小的步进(单位%,0.1代表10%),
        animateTime:200

    };

    function Imager(target, options) {
        this.$target = $(target);
        this.percTips = '';
        this.options = options;
        this.$panel = this.initPanel();
        this.init();
        this.width = this.$target.width();
        this.height = this.$target.height();
        this.$toolbar = this.appendToolbar(this.$panel);
        this.$target.on('tmc.toolbar', this.toolbarListener());
    }

    Imager.prototype.toolbarListener = function () {
        var that = this;
        return function (event, actionName) {
            switch (actionName) {
                case 'rotate.left':
                    that.actionRotate(false);
                    break;
                case 'rotate.right':
                    that.actionRotate(true);
                    break;
                case 'zoom.in':
                    that.actionZoom(true);
                    break;
                case 'zoom.out':
                    that.actionZoom(false);
                    break;
                case 'zoom.restore':
                    that.actionZoomRestore();
                    break;
                default :
                    throw new Error('The action name \'' + actionName + '\' is not handle!');
            }
        }
    };
    Imager.prototype.init = function () {
        var that = this;
        this.$target[0].oncontextmenu = function (e) {
            e.preventDefault();
        };
        this.$target[0].onmousewheel = function (e) {
            if (e.wheelDelta == -120) {//zoomin
                that.actionZoom(true);
            } else if (e.wheelDelta == 120) {//zoomout
                that.actionZoom(false);
            }
        }
    };
    Imager.prototype.actionRotate = function (toRight) {
        var that = this;
        console.log($(that).css('translate'));

    };

    Imager.prototype.actionZoom = function (largen) {
        var that = this;
        var imageWidth = this.$target.width();
        var imageHeight = this.$target.height();
        var widthOffset = imageWidth * this.options.zoomStep;
        var heightOffset = imageHeight * this.options.zoomStep;
        var top = this.$target.position().top;
        var left = this.$target.position().left;
        widthOffset = largen ? widthOffset : 0 - widthOffset;
        heightOffset = largen ? heightOffset : 0 - heightOffset;
        imageWidth += widthOffset;
        imageHeight += heightOffset;
        var rate = imageWidth / that.width;
        rate = (rate * 100 + '');
        if (rate.indexOf('.') > -1) {
            rate = rate.substr(0, rate.indexOf('.')) + '%';
        } else {
            rate = '100%';
        }
        that.zoomTips(rate);
        if (imageWidth <= this.width) {
            this.actionZoomRestore();
        } else {
            this.$target.css({
                position: 'relative',
                width: imageWidth,
                height: imageHeight,
                top: top - (heightOffset / 2),
                left: left - (widthOffset / 2)
            })
        }
    };

    /**
     * 放大提示
     */
    Imager.prototype.zoomTips = function (pec) {
        var that = this;
        var _tips = $('.imager-tips');
        if (_tips.length == 0) {
            _tips = $('<div>');
            _tips.addClass('imager-tips flag-tips').text('100%');
            _tips.css(that.position());
            that.$target.closest('div').append(_tips);
        } else {
            _tips.text(pec);
        }
        return _tips;
    };
    Imager.prototype.position = function () {
        var that = this;
        return {
            top: (that.parent.height() - 20) / 2,
            left: (that.parent.width() - 50) / 2,
            display: 'none'
        };
    };
    Imager.prototype.actionZoomRestore = function () {
        this.percTips.text('100%');
        this.$target.css({
            width: this.width,
            height: this.height,
            top: 0,
            left: 0
        });
    };

    Imager.prototype.initPanel = function () {
        var target = this.$target;
        var that = this;
        target.parent().css({
            position: 'relative', width: target.width(),
            height: target.height()
        });
        var panel = $('<div>').addClass('imager-panel').css({
            width: target.width(),
            height: target.height(),
            overflow: 'hidden',
            left: 0,
            top: 0,
            cursor: 'pointer',
            position: 'absolute'
        });
        that.$target.wrap(panel);
        that.parent = that.$target.parent();
        that.percTips = that.zoomTips();
        target[0].ondragstart = function (event) {
            event.preventDefault();
        };
        var canMove = false;
        that.parent.mousedown(function (event) {
            canMove = {
                x: event.pageX,
                y: event.pageY,
                tx: that.$target.position().left,
                ty: that.$target.position().top
            };


             console.log('mousedown:',canMove);
        });
        //$(document).mouseup(function () {
        this.parent.mouseup(function () {
            ///console.log('mouseup:', canMove);
            canMove = false;
        });
        that.parent.mousemove(function (event) {
            if (event.pageX <= that.parent.offset().left || (event.pageX >= (that.parent.offset().left + that.parent.width())))canMove = false;
            if (event.pageY <= that.parent.offset().top || (event.pageY >= (that.parent.offset().tossp + that.parent.height())))canMove = false;
            if (that.$target.offset().left >= that.parent.offset().left)canMove = false;
            if ((that.$target.offset().left + that.$target.width()) <= (that.parent.offset().left + that.parent.width()))canMove = false;
            if (!canMove)return;
            canMove = that.onPanelMouseMove(event, canMove);
            return true;
        });
        return that.parent;
    };

    Imager.prototype.onPanelMouseMove = function (event, startPos) {

        console.log(event.pageX + 'mousemov-----> ' + startPos.x + ' <----- e--->' + startPos.tx);
        var mouseX = event.pageX - startPos.x + startPos.tx;
        var mouseY = event.pageY - startPos.y + startPos.ty;
        this.$target.css({
            position: 'absolute',
            top: mouseY,
            left: mouseX
        });
        return startPos;
    };

    Imager.prototype.appendToolbar = function () {
        var that = this;
        var $toolbar = $('<div class="btn-group"> \
                <button class="btn btn-sm btn-default" data-action="rotate.left"><i class="fa fa-rotate-left"></i></button>\
                <button class="btn btn-sm btn-default" data-action="zoom.out"><i class="fa fa-search-minus"></i></button>\
                <button class="btn btn-sm btn-default" data-action="zoom.restore"><i class="fa fa-compress"></i></button>\
                <button class="btn btn-sm btn-default" data-action="zoom.in"><i class="fa fa-search-plus"></i></button>\
                <button class="btn btn-sm btn-default" data-action="rotate.right"><i class="fa fa-rotate-right"></i></button>\
            </div>');

        that.$target.closest('div').append($toolbar);
        $toolbar.css({
            position: 'absolute',
            left: (that.parent.width() - $toolbar.width()) / 2,
            bottom: 0,
            display: 'none'
        });

        this.$target.closest('div').hover(function () {
            $toolbar.stop().fadeIn(that.options.animateTime);
            that.percTips.stop().fadeIn(that.options.animateTime);
        }, function () {
            $toolbar.stop().fadeOut(that.options.animateTime);
            that.percTips.stop().fadeOut(that.options.animateTime);
        });
        $toolbar.find('button').click(function (e) {
            that.$target.trigger('tmc.toolbar', $(this).data('action'));
            e.stopPropagation();
        });
        $toolbar.mousemove(function (event) {
            event.stopPropagation();
        });
        return $toolbar;
    };

    $.fn.imager = function (options) {
        return this.each(function () {
            var settings = $.extend({}, defaults, options || {});
            new Imager(this, settings);
        })
    };

}(window.jQuery))