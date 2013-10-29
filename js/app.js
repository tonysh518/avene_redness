$(document).ready(function(){
    var windowWidth;
    var isUglyIe = $.browser.msie && $.browser.version <= 8;
    var isMostUglyIe = $.browser.msie && $.browser.version <= 6 ;
    var isIpad = (function(){
        return !!navigator.userAgent.toLowerCase().match(/ipad/i) ;
    })();
    var isTouch = $('html').hasClass('touch');

    if(isIpad)
    {
        $('head').append('<meta name="viewport" content="width=1024, minimum-scale=0.5, maximum-scale=1.0" /><link href="css/ipad.css" rel="stylesheet" type="text/css" />');
        $('html').addClass('ipad');
    }

    var windowResize = function(){
        windowWidth = $(window).width();
    };

    $(window).on('resize',windowResize).resize();

    $('.navbtn').on('click' , function(){
        if($('.nav').css('display')=='none')
            $('.nav').fadeIn();
        else
            $('.nav').fadeOut();
        return false;
    });

    $(document).on('click' , function(){
        if(windowWidth <= 640)
        {
            $('.nav').fadeOut();
        }
    })

    if(!(isTouch && !isIpad))
    {
        $(document.body).queryLoader2({
            onLoading : function( percentage ){
                var per = parseInt(percentage);
                $('.loading-percentage').html(per+'%');
                $('.loading-bar').animate({'width':per+'%'});
            },
            onComplete : function(){
                $('.loading-wrap').fadeOut();
                /* for animation */
                if(isUglyIe && $('#scheme').length > 0)
                    return;
                var ANIMATE_NAME = "data-animate";
                $('[' + ANIMATE_NAME + ']')
                    .each(function(){
                        var $dom = $(this);
                        var tar = $dom.data('animate');
                        var style = $dom.data('style');
                        var time = parseInt( $dom.data('time') );
                        var delay = $dom.data('delay') || 0;
                        var easing = $dom.data('easing');
                        var begin = $dom.data('begin');
                        tar = tar.split(';');
                        var tarCss = {} , tmp;
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
            }
        });
    }


    if(!isTouch)
    {
        skrollr.init({
            smoothScrollingDuration: 600,
            smoothScrolling:true,
            easing: 'easeInOutQuart'
        });
        //$('.fadeEle').css({opacity:1});
    }
    if(!isTouch || isIpad)
    {
        //video
        $('.home_video').fancybox({
            type : 'iframe',
            'openEffect'	: 'fade',
            'closeEffect'	: 'fade',
            'openSpeed'      : 500,
            'closeSpeed'     : 500,
            width: 800,
            height: 450,
            scrolling : 'no',
            autoSize:true,
            preload   : true,
            helpers : {
                overlay : {
                    css : {
                        'background' : '#fff',
                        'opacity' : 0.8
                    },
                    showEarly  : true,
                    locked: false
                }
            }
        });
    }

    // bind knowledge video
    $('.kl_movie').attr('src','video.php?id=1&width=640&height=360');

    if(isTouch && !isIpad)
    {

        $('.header .logo').attr('href','index.php');
        $('.bxslider').bxSlider({'pager':false});
        $('body').click(function(){
            $('.qrcode').fadeOut();
        });
    }

    $('.repair_img2').click(function(){
        $(window).scrollTo(800,500);
    });
    $('.kl_next').click(function(){
        $(window).scrollTo(630,500);
    });

    $('.share_intro').jScrollPane();

    $('input[type="checkbox"]').uniform();

    $(window).scroll(function(){
        //console.log($(window).scrollTop());
    });

    $('.repair_btn').click(function(){
        var score = 0;
        $('.checkdiv input').each(function(index, obj){
            if($(obj).is(':checked')){
                score += 10;
            }
        });
        if(isTouch && !isIpad)
        {
            if($('.checkdiv').css('display') == 'none')
            {
                $('.checkdiv').fadeIn();
                $('.repair_answer').fadeOut();
                $('.repair_btn').removeClass('again');
                return;
            }
            $('.checkdiv').fadeOut();
            $('.repair_btn').addClass('again');
        }
        else
        {
            $('.repair_btn').addClass('again').animate({top:651});
            $('.repair_next').animate({top:700});
            $('.repair_answer').fadeOut();
        }
        if(score <= 30)
        {
            $('.repair_answer1').fadeIn();
        }
        else
        {
            $('.repair_answer2').fadeIn();
        }
    });

    $('.scheme_weixin,.kl_weixin').hover(function(){
        $(this).find('.qrcode').fadeIn();
    },function(){
        $(this).find('.qrcode').fadeOut();
    });

    //mail
    $('#mobilemail').fancybox({
        closeBtn:false,
        scrolling : false,
        padding: 0,
        scrolling: 'no'
    });
    $("#backbtn").click(function(){
        parent.$.fancybox.close();
    });
    var SetMailForm=function(form,afterComplete){
        form.ajaxForm({
            beforeSubmit:  function(){
                return form.valid();
            },
            complete: function(xhr) {
                if(!afterComplete){
                    if(xhr.responseText == 'state0')
                    {
                        $('.newsletter_popup .state0').show();
                        $('.newsletter_popup .state1').hide();
                        $('.newsletter_popup,.newsletter_overlay').fadeIn();
                    }
                    if(xhr.responseText == 'state1' || xhr.responseText == 'state-1')
                    {
                        $('.newsletter_popup .state1').show();
                        $('.newsletter_popup .state0').hide();
                        $('.newsletter_popup,.newsletter_overlay').fadeIn();
                    }
                }else{
                    afterComplete(xhr)
                }
            }
        });
        form.validate(
        {
            rules: {
                email: { required: true, email:true}
            },
            messages: {
                email: { required: '请填写邮箱', email:'请填写正确的邮箱' }
            }
        });
    }

    SetMailForm($("#newsletter"));
    SetMailForm($("#mobilenewsletter"),function(xhr){

        $('#backbtn').click();
        if(xhr.responseText == 'state0')
        {
            $('.newsletter_popup .state0').show();
            $('.newsletter_popup .state1').hide();
            $('.newsletter_popup,.newsletter_overlay').fadeIn();
        }
        if(xhr.responseText == 'state1')
        {
            $('.newsletter_popup .state1').show();
            $('.newsletter_popup .state0').hide();
            $('.newsletter_popup,.newsletter_overlay').fadeIn();
        }
    });

    $('.newsletter_overlay, .newsletter_popup_close').click(function(){
        $('.newsletter_popup,.newsletter_overlay').fadeOut();
    });
});
