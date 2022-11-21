$(function(){
    $('nav>ul>li').hover(function(){
        $(this).find('ul').stop().slideDown(300); //this의 하위에 있는 애들 ul 
    },function(){
        $(this).find('ul').stop().slideUp(300); //stop을 넣어야 한번씩만 움직임. 아니면 마우스 떼도 남은게 움직임
    });
    //키보드 사용자 고려할 경우
    $('nav>ul>li').focusin(function(){
        $(this).find('ul').stop().slideDown(300);
    });
    $('nav>ul>li ul li:last-child').focusout(function(){
        $(this).parent('ul').stop().slideUp(300); //li 선택해서 부모 ul로 해야함
    });
});