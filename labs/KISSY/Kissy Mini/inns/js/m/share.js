KISSY.add('m/share', function (S, Node, Base) {

    var defaults = {
        down:'/',
        focus:'/',
        website:'/'
    };
    var $ = Node.all;

    function Share(opt) {
        this.defualts = S.merge(defaults,opt||{})
        this.s1 = $('.share1');
        this.s2 = $('.share2');
        this.s3 = $('.share3');
        this.s4 = $('.share4');
        this.s5 = $('.share5');
        this.btn = $('.share-btn');
        this.arrow = $('.share-arrow');
        this.cl = $('.share-cloud-left');
        this.cr = $('.share-cloud-right');
        this.down = $('.btn-down');
        this.focus = $('.btn-focus');
        this.website = $('.btn-website');
        this.init();
        this.animate();
    };
    S.extend(Share, Base, {
        init: function () {
            var that = this;
            //this.s5.css({left:(window.innerWidth - this.s5.width())/2+'px'});
            this.btn.on('load',function(){
                that.down.css({width:that.btn.width()*52%+'px',height:that.btn.height()*19%+'px'});
            });

        },
        animate:function(){
            var that = this;
            this.s1.css({left:0});
            setTimeout(function(){
                that.s2.css({right:0});
            },1000);
            setTimeout(function(){
                that.s3.css({left:'2%'});
            },2000);
            setTimeout(function(){
                that.s4.css({right:'0'});
            },3000);
            setTimeout(function(){
                that.s5.css({left:(window.innerWidth - that.s5.width())/2+'px'});
                that.cr.addClass('cloud-r');
                that.cl.addClass('cloud-l');
            },3500);
            setTimeout(function(){
                that.btn.show();
                that.down.css({width:that.btn.width()*0.43+'px',height:that.btn.height()*0.20+'px',bottom:0.63*that.btn.height()+'px',left:0.275*that.btn.width()+'px'}).on('click',function(){
                    window.location.href = that.defualts.down
                });
                that.focus.css({width:that.btn.width()*0.278+'px',height:that.btn.height()*0.16+'px',bottom:0.384*that.btn.height()+'px',left:0.185*that.btn.width()+'px'}).on('click',function(){
                    that.arrow.show();
                });
                that.website.css({width:that.btn.width()*0.278+'px',height:that.btn.height()*0.16+'px',bottom:0.384*that.btn.height()+'px',left:0.529*that.btn.width()+'px'}).on('click',function(){
                    window.location = that.defualts.website
                });
            },4500);
        }
    });
    return Share;
}, {requires: ['node', 'base', 'anim']});
