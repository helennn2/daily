$(function(){
    const menu=$('.nav li');
    menu.hover(function(){
        close();
        let tg=$(this);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgWidth=menuImg.find('img').width();
        console.log(imgWidth)

        onImg.css('display','block');
        offImg.css('display','none');

        menuImg.stop().animate({
            width:imgWidth 
        },600);

    },function(){
        let tg=$(this);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgWidth=0; 
        console.log(imgWidth)

        onImg.css('display','none');
        offImg.css('display','block');

        menuImg.stop().animate({
            width:imgWidth
        },600);
        open();
    });

    open();
    function open(){
        let tg=$('.nav>li').eq(2);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgWidth=menuImg.find('img').width();
        console.log(imgWidth)

        onImg.css('display','block');
        offImg.css('display','none');

        menuImg.stop().animate({
            width:imgWidth 
        },600);

    }
    function close(){
        let tg=$('.nav>li').eq(2);
        let onImg=tg.find('.menu-txt > .on');
        let offImg=tg.find('.menu-txt > .off');
        let menuImg=tg.find('.menu-img');
        let imgWidth=0; 
        console.log(imgWidth)

        onImg.css('display','none');
        offImg.css('display','block');

        menuImg.stop().animate({
            width:imgWidth
        },600);
    }
});