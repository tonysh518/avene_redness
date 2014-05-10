/**
 *
 * Avene 1000 Family
 * zx 2014 05 10
 *
 */
(function ($) {
    var Index={
        /**
         * 初始化方法,用于功能函数的入口
         * @param {string}
         * @example
         **/
        init:function(){
            //事件绑定
            this.bindEvent();
        },
        /**
         * 事件绑定
         * @param {string}
         * @example
         **/
        bindEvent:function(){
            $('.CDAbox').live({
                'mouseenter':function(){
                    $(this).children('.CDApop').show()
                },
                'mouseleave':function(){
                    $(this).children('.CDApop').hide()
                }
            })
            //home_infor
            $('.home_infor').live({
                'mouseenter':function(){
                    $(this).children('.home_infopop').show()
                },
                'mouseleave':function(){
                    $(this).children('.home_infopop').hide()
                }
            })
            //
            $('.ft_weixin').live({
                'mouseenter':function(){
                    $(this).children('.weixin_pop').show()
                },
                'mouseleave':function(){
                    $(this).children('.weixin_pop').hide()
                }
            })
        }
    };
    Index.init();  
})(jQuery);




