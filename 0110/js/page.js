!!(function(){
    var isUglyIe6 = $.browser.msie && $.browser.version == 6;
    if(!isUglyIe6) {
        iniGlobal();
    }

    function iniGlobal() {
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

        if($('html').hasClass('no-touch')) {
            $('video').remove();
        }
    }
})();

