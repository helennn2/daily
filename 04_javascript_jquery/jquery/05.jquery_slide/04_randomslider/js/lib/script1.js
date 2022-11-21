let panelWidth=$('.slider-panel>img').width();
//console.log(panelWidth) 600
$('.slider-text').css('left',-300).each(function(index){
    $(this).attr('data-index',index)
});
$('.control-panel .control-button').each(function(index){
    $(this).attr('data-index',index)
}).click(function(){
    let index=$(this).attr('data-index');
    //console.log(index)
    moveSlider(index)
});

function moveSlider(index){
    let willMoveLeft;
    let willMoveTop;
   /*  if(index==0){
        willMoveLeft=-(index*600);
        willMoveTop=-(0*400)
    }else if(index==1){
        willMoveLeft=-(index*600);
        willMoveTop=-(0*400)
    }else if(index==2){
        willMoveLeft=-(index*600);
        willMoveTop=-(0*400)
    }else if(index==3){
        willMoveLeft=-(0*600);
        willMoveTop=-(1*400)
    }else if(index==4){
        willMoveLeft=-(1*600);
        willMoveTop=-(1*400)
    }else{
        willMoveLeft=-(2*600);
        willMoveTop=-(1*400)
    } */
    //코드 더 짧게 쓰는 법
    willMoveLeft=-(index%3*600);
    willMoveTop=Math.floor(index/3)*-400

    $('.slider-panel').animate({left:willMoveLeft, top:willMoveTop},500);
    $('.control-button[data-index='+ index +']').addClass('active');
    $('.control-button[data-index!='+ index +']').removeClass('active');
    $('.slider-text[data-index='+ index +']').show().animate({left:50},500);
    $('.slider-text[data-index!='+ index +']').hide().animate({left:-300},500);
}
let randomNumber=Math.round(Math.random()*5) //소숫점없이 절삭
moveSlider(randomNumber)

let timer=null;
slide();
function slide(){
    timer=setInterval(function(){
        randomNumber++;
        if(randomNumber==$('.control-button').size()) randomNumber=0;
        $('.control-button').eq(randomNumber).trigger('click')
    },2000);
}
$('.animation_canvas').hover(function(){
    clearInterval(timer)
},function(){
    slide();
});
