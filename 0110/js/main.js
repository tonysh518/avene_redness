!!(function(){

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

                setTimeout(function(){
                    $('.section,.ball_round').show();
                    skrollr.init({smoothScrolling:true});
                },1300);
            }
        });


        $(window).resize(function(){
            $('.section6_drop_wrap,.bg_inner').height($(window).height());

        });

        $(window).trigger('resize');

        $('.section1_ball').hover(function(){
            $(this).find('.ball_round').addClass('actived');
        },function(){
            $(this).find('.ball_round').removeClass('actived');
        });

        var sliderInt;
        var runSlider = function() {
            var on = $('.ball_slider').find('.on');
            on.fadeOut().removeClass('on');
            if($('.ball_slider img').index(on) != 2) {
                on.fadeOut().next().fadeIn().addClass('on');
            }
            else {
                $('.ball_slider img').eq(0).fadeIn().addClass('on');
            }
        }
        $('.section1_ball5_btn').hover(function(){
            var on = $('.ball_slider').find('.on');
            sliderInt = setInterval(runSlider,1000);
            runSlider();
        },function(){
            clearInterval(sliderInt);
        });

        $('.section1_ball5_btn').click(function(){
            $('.menu li').eq(0).click();
        });

        $('.section10_s').hover(function(){
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeIn();
        },function(){
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeOut();
        });


        var menu_steps = [1571 , 3556 , 5112 , 6314, 7942, 9133, 10952, 13041, 15106, 17350, 18913, 20070, 22300];
        // for prev page and next page

        $('.menu li').click(function(){
            var index = $.inArray(this,$('.menu li'));
            var next_step = menu_steps[index] ;
            if(next_step != 0) {
                next_step = next_step + 100;
            }
            $('html,body').stop( true , true ).animate({
                scrollTop: next_step
            } , 1000 );
            $('.menu li').removeClass('menu_itemon');
            $(this).addClass('menu_itemon');
            return false;
        });

        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            var currentstep = $('body').data('currentstep');
            var menu_step = null;
            $.each(menu_steps , function( i , step){
                if( scrollTop + 100 > step ){
                    menu_step = i;
                }
            });
            if(menu_step && currentstep != menu_step) {
                $('.menu li').removeClass('menu_itemon');
                $('.menu li').eq(menu_step).addClass('menu_itemon');
                $('body').data('currentstep',menu_step);
            }
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

//    for(i=2;i<31;i++){
//        var n = 16800 + (i * 25);
//        console.log('<div class="section_bg section9_bg'+i+'" data-0="display:none;" data-'+n+'="display:block;"  data-'+(n+25)+'="display:none;"></div>');
//    }


    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms

// Align top-left
    stats.domElement.style.position = 'fixed';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = '99999';

    document.body.appendChild( stats.domElement );

    setInterval( function () {

        stats.begin();

        // your code goes here

        stats.end();

    }, 1000 / 60 );


})();

