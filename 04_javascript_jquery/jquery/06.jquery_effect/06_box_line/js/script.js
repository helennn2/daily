
setInterval(function(){
    $('.top').css('left','-100%').animate({left:0},500);
    $('.bottom').css('left','100%').animate({left:0},500);
    $('.right').css('bottom','100%').animate({bottom:0},500);
    $('.left').css('top','100%').animate({top:0},500);
},2000);
//css 쓴게 중요. 이거에 따라 달라짐