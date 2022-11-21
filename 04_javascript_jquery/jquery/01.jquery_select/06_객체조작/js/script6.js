//sec1
$('.btn1').on("mouseover focus",function(){//mouseover마우스조작 focus키보드조작
    $('.on').text('이벤트 두개'); //tab키 누를때도 마우스 댈때처럼 같은 기능해야 함
}); 

$('.btn1').on({"mouseout blur":function(){
    $('.on').text('원래대로');
}})

$('.btn2').on({"mouseover":function(){
    $('.btnOn').css('background','yellow');
},"focus":function(){
    $('.btnOn').text('원래대로');
},"mouseout":function(){
    $('.btnOn').css('background','pink');
},"blur":function(){
    $('.btnOn').text('나는 그룹메서드');
}});

//sec2
$('.btn3').click(function(){
    $('.btn3').parent().next().css({"color":"red"}) //parent(p)의 다음에게 글자색 빨강줌
});

$('.btn4').on({"mouseover focus":function(){
    $('.btn4').parent().next().css({"color":"yellowgreen"})
}});

$('.btn3').off("click"); //스타일 만든 거 강제로 없앰
$('.btn4').trigger("mouseover") //강제로 시킴

//sec3
$(document).ready(function(){
    let heightImg=$('.img1').height();
    console.log("ready:",heightImg)
})

$(window).load(function(){
    let heightImg1=$('.img1').height();
    console.log("load:",heightImg1)
})

//sec4
$('.div1').click(function(){
    $(this).text('클릭되었습니다.') 
    /* $('.div1').text('클릭되었습니다.')  */
});

//sec5
$('.btn5').on('click',function(e){
    e.preventDefault();
    $('.txt5').text('내용을 바꾸었습니다.');
});
$('.btn6').on({"click":function(){
    $('.txt6').css('background','yellow');
    return false; //앞에 있으면 안됨. 실행 전에 끝나서
}});

$('.btn7').on("dblclick", function(){
    $('.txt7').css('background','yellow');
});

//sec6
$('#hover').hover(function(){
    $(this).text('난 다른 거 먹어야지').css({border:"2px solid orange",padding:"5px"})
},function(){
    $(this).text('불고기..').css({border:"2px solid orange",padding:"5px"})
});
//hover는 마우스가 없으면 호버를 못함. 밑에거 focus 안썼으니까 굳이 쓸 필요없고 호버써도됨

$('#mouseenter').mouseenter(function(){
    $(this).text('난 다른 거 먹어야지').css({border:"2px solid orange",padding:"5px"})
})
$('#mouseenter').mouseleave(function(){
    $(this).text('불고기..').css({border:"2px solid orange",padding:"5px"})
})

//sec7
$('.animal').each(function(){
    let name1=$(this).text();
    alert(name1);
});