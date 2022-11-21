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
    let willMoveLeft=-(index*panelWidth);
    $('.slider-panel').animate({left:willMoveLeft},500);
    $('.control-button[data-index='+ index +']').addClass('active');
    $('.control-button[data-index!='+ index +']').removeClass('active');
    $('.slider-text[data-index='+ index +']').show().animate({left:50},500);
    $('.slider-text[data-index!='+ index +']').hide().animate({left:-300},500);
}
let randomNumber=Math.round(Math.random()*4) //소숫점없이 절삭
moveSlider(randomNumber)

