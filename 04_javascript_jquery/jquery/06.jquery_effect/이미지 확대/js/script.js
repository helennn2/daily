$('.box').on({mouseover:function(){
    $(this).find('img').css({transform:'scale(1.5)',transition:'.3s'})
    $('.leftBox').stop().animate({top:0},500);
    $('.rightBox').stop().animate({top:0},500);
    $('.box span').stop().delay(500).animate({opacity:1},500);
},mouseout:function(){
    $(this).find('img').css({transform:'scale(1)'})
    $('.leftBox').stop().animate({top:'-100%'},500);
    $('.rightBox').stop().animate({top:'100%'},500);
    $('.box span').stop().animate({opacity:0},500);
}});