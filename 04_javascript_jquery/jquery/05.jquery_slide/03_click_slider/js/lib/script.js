$(function(){
    let moving=$('.area>ul');
    let timer=null;
    let liwidth=($('.area>ul>li').width())+10; //+margin. +10까지 하는 것보다 li 넓이를 지정해주고 가운데 정렬하고 하는게 더 편함
    console.log(liwidth)

    slide();
    function slide(){ //이렇게 이름 있는건 호이스팅으로 위처럼 해도 인식?
        timer=setInterval(function(){
           moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
           })
        },2000);
    }

    $('.box').on({mouseover:function(){
        clearInterval(timer); //멈추게 하는거
    },mouseout:function(){
        slide();
    }});

    $('.right').click(function(){
        moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
        })
    })
    $('.left').click(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-liwidth}).stop().animate({left:0},500)
    })
});