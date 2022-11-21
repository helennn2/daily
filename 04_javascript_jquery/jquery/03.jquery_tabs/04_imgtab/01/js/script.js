$('.thumbs a').click(function(){
    let path=$(this).attr('href');
    //console.log(path);

    $('#largeImg > img').attr({src:path});
    $('#largeImg > img').css('opacity',0).stop().animate({opacity:1},1000)

    return false; //a링크로 들어가서 이거 지정. 값을 반환하고 끝내라 더는 실행하지마라.
});
