 $('#caption').remove();

$('.thumbs a').click(function(e){
    e.preventDefault(); //return false의 역할. 프리벤트디폴트는 위에다가 쓰고(펑션에 e도 지정해줘야함), 리턴은 아래.
    $('#caption').remove(); //아예 지우고 아래 4줄로 새로 만듦
    let path=$(this).attr("href");
    $('#largeImg > img').attr({src:path});
    let msg=$(this).next('em').text(); //next에 em 안써도됨
    //console.log(msg)

   $('#largeImg').append("<div id='caption'></div>");
   $('#largeImg #caption').text(msg);
   let posy=$('#largeImg #caption').outerHeight();
   $('#largeImg #caption').animate({top:-posy+"px"},300)
});