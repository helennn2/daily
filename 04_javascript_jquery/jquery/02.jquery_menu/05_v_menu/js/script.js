$('.sub').hide();
$('.group .title').on("click focus",function(){
    $('.sub').stop().slideUp(500);
    $(this).next('.sub').stop().slideDown(500) //next or siblings
});