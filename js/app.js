
var isUglyIe = $.browser.msie && $.browser.version <= 8;
var isMostUglyIe = $.browser.msie && $.browser.version <= 6 ;
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


skrollr.init({
    smoothScrollingDuration: 600,
    smoothScrolling:true,
    easing: 'easeInOutQuart'
});

$(window).scroll(function(){
    console.log($(window).scrollTop());
});