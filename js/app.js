$('.cal-sq.unopened').click(function(){
    $('.cal-popup').show();
});

$('.close-btn').click(function(){
    $('.cal-popup').hide();
});

$('.click-open').click(function(){
    $('.landing-main').hide();
    $('.left-pane').addClass('slide-left');
    $('.right-pane').addClass('slide-right');
    $('.pane-anim').delay(1000).fadeOut('fast');
    $('.story-sec').show();
});


if($(window).width() > 991){
    $('.click-open').click(function(){
        console.log('desktop');
        $('.landing-main').fadeOut('slow');
    })
}
