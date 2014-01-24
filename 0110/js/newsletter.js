!!(function(){
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
                    if(xhr.responseText == 'state1' || xhr.responseText == 'state-1' || xhr.responseText == 'state-11')
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
                    email: { required: '&#35831;&#22635;&#20889;&#37038;&#31665;', email:'&#35831;&#22635;&#20889;&#27491;&#30830;&#30340;&#37038;&#31665;'}
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
})();
