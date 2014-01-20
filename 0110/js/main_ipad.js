!!(function(){
    var s;
    var skrollr_scale = 1;
    var menu_steps = [1571*skrollr_scale , 3556*skrollr_scale , 5112*skrollr_scale , 6314*skrollr_scale, 7942*skrollr_scale,
        9133*skrollr_scale, 10952*skrollr_scale, 13041*skrollr_scale, 15106*skrollr_scale, 17350*skrollr_scale, 18913*skrollr_scale, 20642*skrollr_scale, 22300*skrollr_scale];
    var animate_steps = [0, 1571*skrollr_scale , 3556*skrollr_scale , 5112*skrollr_scale , 6314*skrollr_scale, 7942*skrollr_scale,
        9133*skrollr_scale, 10952*skrollr_scale, 13041*skrollr_scale, 14200*skrollr_scale, 15106*skrollr_scale, 17350*skrollr_scale, 18913*skrollr_scale, 20642*skrollr_scale, 22300*skrollr_scale];
    // for prev page and next page

    var moving = false;
    var lastScrollTop = 0;
    var animatestep = 0;
    var currentstep = 0;
    var slider10 = false;
    var slider10runInt;
    var slider10runTimeout;
    var direction;

    var isUglyIe6 = $.browser.msie && $.browser.version == 6;
    if(!isUglyIe6) {
        iniGlobal();
    }

    function iniGlobal() {
        $(document.body).queryLoader2({
            onLoading : function( percentage ){
                var per = parseInt(percentage);
                $('.loading-percentage').html(per+'%');
                $('.loading-bar').css({'width':per+'%'});
            },
            onComplete : function(){
                $('.loading-wrap').fadeOut();
                /* for animation */
                var isUglyIe = $.browser.msie && $.browser.version <= 8;
                if(isUglyIe && $('#scheme').length > 0)
                    return;
                var ANIMATE_NAME = "data-animate";
                $('[' + ANIMATE_NAME + ']')
                    .each(function(){
                        var $dom = $(this);
                        var tar = $dom.data('animate');
                        var browser = $dom.data('browser');
                        var style = $dom.data('style');
                        var time = parseInt( $dom.data('time') );
                        var delay = $dom.data('delay') || 0;
                        var easing = $dom.data('easing');
                        var begin = $dom.data('begin');
                        tar = tar.split(';');
                        var tarCss = {} , tmp;
                        if(browser == 'uglyie' && isUglyIe) {
                            return;
                        }
                        for (var i = tar.length - 1; i >= 0; i--) {
                            tmp = tar[i].split(':');
                            if( tmp.length == 2 )
                                tarCss[ tmp[0] ] = $.trim(tmp[1]);
                        }
                        if( isUglyIe && tarCss.opacity !== undefined ){
                            delete tarCss.opacity;
                        }


                        style = style.split(';');
                        var styleCss = {} , tmp;
                        for (var i = style.length - 1; i >= 0; i--) {
                            tmp = style[i].split(':');
                            if( tmp.length == 2 )
                                styleCss[ tmp[0] ] = $.trim(tmp[1]);
                        }
                        if( isUglyIe && styleCss.opacity !== undefined ){
                            delete styleCss.opacity;
                        }
                        $dom.css(styleCss).delay( delay )
                            .animate( tarCss , time , easing );
                        if( begin ){
                            setTimeout(function(){
                                animation_begins[begin].call( $dom );
                            } , delay);
                        }
                    });

                var timeoffset = isUglyIe?0:2000;
                setTimeout(function(){
                    $('.section,.ball_round').fadeIn();
                    s = skrollr.init({
                        smoothScrollingDuration:0,
                        smoothScrolling:true,
                        easing:'outCubic',
                        scale:1,
                        forceHeight:false
                    });
                    $('.section2_wrap').show();

                },timeoffset);
            }
        });




        $('.section1_ball5_btn').click(function(){
            s.animateTo(700);
        });

        $('.section10_s').hover(function(){
            clearInterval(slider10runInt);
            $('.section10_p').stop().hide();
            $('.section10_s').removeClass('on');
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeIn();
            clearTimeout(slider10runTimeout);
        },function(){
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeOut();
            slider10runTimeout = setTimeout(slider10run,1000);
        });


        $('.menu li').click(function(){
            moving = true;
            var index = $.inArray(this,$('.menu li'));
            var next_step = menu_steps[index] ;
            if(next_step != 0) {
                next_step = next_step + 100;
            }
            $('html,body').stop( true , true ).animate({
                scrollTop: next_step
            } , 2500, function(){
                setTimeout(function(){
                    moving = false;
                },1500);
            });
            var scrollTop = menu_steps[index];
            $.each(animate_steps , function( i , step){
                if( scrollTop > step ){
                    animatestep = i+1;
                }
            });

            return false;
        });

        $(window).scroll(function(e){
            var st = $(this).scrollTop();
            console.log(st);
            $.each(menu_steps , function( i , step){
                if( st + 100 > step ){
                    if(currentstep != i) {
                        currentstep = i;
                        $('.menu li').removeClass('menu_itemon');
                        $('.menu li').eq(i).addClass('menu_itemon');

                    }
                }
            });


        });


//        $(".section1_bg").backstretch("img/section1_bg.jpg");
//        $(".section2_bg").backstretch("img/section2_bg.jpg");
//        $(".section2_bg2").backstretch("img/section2_bg2.jpg");
//        $(".section2_cloud").backstretch("img/section2_cloud.png");
//        $(".section3_bg").backstretch("img/section3_bg.jpg");
//        $(".section4_bg").backstretch("img/section4_bg.jpg");
//        $(".section4_cloud").backstretch("img/section4_cloud.png");
//        $(".section5_bg").backstretch("img/section5_bg.jpg");
//        $(".section6_bg").backstretch("img/section6_bg.jpg");
//        $(".section7_bg").backstretch("img/section7_bg.jpg");
//        $(".section7_rain").backstretch("img/section7_rain.png");
//        $(".section7_water").backstretch("img/section7_water.png");
//        $(".section8_bg").backstretch("img/section8_bg.jpg");
//        $(".section9_bg").backstretch("img/section9_bg1.jpg");
    }

    for(i=1;i<33;i++){
        var n = 19800 + (i * 26);
        //console.log('<div class="section_bg section10_2_bg'+i+'" data-0="display:none;" data-'+n+'="display:block;"  data-'+(n+30)+'="display:none;"></div>');
        //console.log('.section1_2_bg'+i+' {z-index:7;background-image:url(../img/video2/'+i+'.jpg);background-repeat:no-repeat;background-size: cover;}');
    }

    function slider10run(){
        slider10runInt = setInterval(_slider10run,4000);
        setTimeout(_slider10run, 1000);
    }

    function _slider10run(){
        var on = $('.section10_p.on');
        if(on.length == 0) {
            on = $('.section10_p').eq(0);
        }
        var index = $('.section10_p').index(on);
        on.fadeOut().removeClass('on');
        if(index != 2) {
            on.fadeOut().next().fadeIn().addClass('on');
        }
        else {
            $('.section10_p').eq(0).fadeIn().addClass('on');
        }


        $('.section10_s').removeClass('on');
        $('.section10_s').eq(index).addClass('on');

    }


})();

