!!(function(){

    iniGlobal();

    function iniGlobal() {




//        $('.section1_ball').hover(function(){
//            $(this).find('.ball_round').addClass('actived');
//        },function(){
//            $(this).find('.ball_round').removeClass('actived');
//        });
//
//        var sliderInt;
//        var runSlider = function() {
//            var on = $('.ball_slider').find('.on');
//            on.fadeOut().removeClass('on');
//            if($('.ball_slider img').index(on) != 2) {
//                on.fadeOut().next().fadeIn().addClass('on');
//            }
//            else {
//                $('.ball_slider img').eq(0).fadeIn().addClass('on');
//            }
//        }
        $('.section1_ball5_btn').hover(function(){
            var on = $('.ball_slider').find('.on');
            sliderInt = setInterval(runSlider,1000);
            runSlider();
        },function(){
            clearInterval(sliderInt);
        });

        $('.section1_ball5_btn').click(function(){
            $('html,body').animate({scrollTop:680});
        });

        $('.section10_s').hover(function(){
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeIn();
        },function(){
            var id = $(this).data('pid');
            $('.section10_p'+id).fadeOut();
        });



    }




})();

