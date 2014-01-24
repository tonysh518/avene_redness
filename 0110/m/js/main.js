!!(function(){

    $('.thumbnails li').click(function(){
        var index = $.inArray(this,$('.thumbnails li'));
        $('.thumbnails li').removeClass('on');
        $(this).addClass('on');
        $('.slider_item').fadeOut();
        $('.slider_item').eq(index).delay(550).fadeIn();
    });

    $('.navbtn').click(function(){
        if($('.nav').css('display') == 'none'){
            $('.nav').fadeIn();
        }
        else {
            $('.nav').fadeOut();
        }

    });
    $('.page,.header').on('click',function(e){
        if(e.target.className.indexOf('navbtn') == 0) {
            return false;
        }
        $('.nav').fadeOut();
    });
})();

