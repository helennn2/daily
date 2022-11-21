$(function(){
    $('nav>ul').hover(function(){
        /* $(this).addClass("active") */ //주석으로 한 거 쓰거나 아래거 써도 됨.
        $(this).stop().animate({height:200},300);
    },function(){
        /* $(this).removeClass("active") */
        $(this).stop().animate({height:40},300);
    });
    
    //키보드 사용자 고려할 경우
    $('nav>ul').focusin(function(){
        $(this).addClass("active") 
    });
    $('nav>ul').focusout(function(){
        $(this).removeClass("active") //li 선택해서 부모 ul로 해야함
    });
});