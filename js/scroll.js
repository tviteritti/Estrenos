$(window).scroll(function(){
$('nav').toggleClass(' scrolled',$(this).scrollTop()>250);

});
$(window).scroll(function(){
    $('.main').toggleClass(' scrolled',$(this).scrollTop()>450);
        
});