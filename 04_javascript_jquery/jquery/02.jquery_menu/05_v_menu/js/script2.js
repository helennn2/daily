$('.sub').hide();

/* $('.title').click(function(){
    let subShow=$(this).next('.sub');
    $('.sub').slideUp();
    if(subShow.is('visible')){ //visible이라는 요소가 있으면 슬라이드업. 아니면 다운
        subShow.slideUp();
    }else{
        subShow.slideDown();
    }
}); */

// 또 다른 방법
let t=true;
$('.title').click(function(){
    let subShow=$(this).next('.sub');
    $('.sub').slideUp();
    if(t){
        subShow.slideDown();
        t=false;
    }else{
        subShow.slideUp();
        t=true;
    }
});