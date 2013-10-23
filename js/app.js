$(document).ready(function(){

    var isUglyIe = $.browser.msie && $.browser.version <= 8;
    var isMostUglyIe = $.browser.msie && $.browser.version <= 6 ;

    $(document.body).queryLoader2({
        onLoading : function( percentage ){
            console.log(percentage);
        },
        onComplete : function(){
            $('.loading-wrap').fadeOut();
            /* for animation */
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
                    if( isUglyIe && tarCss.opacity !== undefined ){
                        delete tarCss.opacity;
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



    skrollr.init({
        smoothScrollingDuration: 600,
        smoothScrolling:true,
        easing: 'easeInOutQuart'
    });

    $(window).scroll(function(){
        //console.log($(window).scrollTop());
    });

    $('.repair_btn').click(function(){
        $('.checkdiv input').each(function(index, obj){
            console.log($(obj).is(':checked'));
        });
    });

    //video
    $('.video').fancybox({
        type : 'iframe',
        'openEffect'	: 'fade',
        'closeEffect'	: 'fade',
        'openSpeed'      : 500,
        'closeSpeed'     : 500,
        width: 640,
        height: 360,
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
