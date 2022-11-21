$(function(){
    // 메뉴
    $('.app-btn').on({click:function(){
        $('.mobile-nav').slideToggle(1000);
        $('.app-btn>span').toggleClass('addAppBtn')
    }});

    // 상단뉴스롤링
    const newBanner=$('.news-wrap > .news-wraps');
    let current = 0;
    let setIntervalId=null;


    newsBanner();
    function newsBanner(){
        setIntervalId=setInterval(function(){
            let prev=newBanner.eq(current);
            move(prev, 0, '-100%');
            current++;
            if(current==newBanner.size()) current=0;

            let next=newBanner.eq(current);
            move(next,'100%', 0);
        },2000);


    };
    function move(tg, start, end){
        tg.css("top", start).stop().animate({top:end},500)
    }

    $('.news-wrap').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        newsBanner();
    });

    // 버튼
    const bottonRadius=$('.btn li');
    const line=$('.templat-line .title li');

    bottonRadius.click(function(){
        bottonRadius.removeClass('on');
        $(this).addClass('on');
        let lineIdx=$(this).index();

        line.removeClass('on');
        line.eq(lineIdx).addClass('on')
    });

    // 배너 슬라이드
    const slideBanner=$('.banner-wrap .area');  /* ul이 움직임(덩어리) */
    const slideList=$('.banner-wrap .area li');
    const slideWidth=slideList.width();
    const slideOn=$('.banner-wrap .area .on');
    let current1=0;
    let current2=3;
    let set=null;
    // console.log(slideWidth) 확인용임(넓이값 검사-콘솔로 확인). 다 보고 나면 주석 or 지우기
    
    bannerSlider()
    function bannerSlider(){
    set=setInterval(() => {
        slideBanner.stop().animate({left:-slideWidth},500, function(){
                /* var i=$('.banner-wrap .area li.on').index();
                console.log(i); 몇번째인지 궁금해서 달아둔거임 */ 
                $('.banner-wrap .area li:first').insertAfter('.banner-wrap .area li:last');
                slideBanner.css({left:0});
                slideList.removeClass('on').eq(current2++).addClass('on');
                if(current2===slideList.size()) current2=0;
                if(current1===slideList.size()) current1 =0;
        })
    },2000); /* () => {} / function이랑 똑같은거임 */
    }

    $('.banner-left-btn, .banner-right-btn, .banner-wrap').on('mouseover focus', function(){
        clearInterval(set);
    });
    $('.banner-left-btn, .banner-right-btn, .banner-wrap').on('mouseout leave', function(){
        bannerSlider();
    });

    $('.banner-right-btn').click(function(){
        slideBanner.stop().animate({left:-slideWidth},500, function(){
            /* var i=$('.banner-wrap .area li.on').index();
            console.log(i); 몇번째인지 궁금해서 달아둔거임 */
            $('.banner-wrap .area li:first').insertAfter('.banner-wrap .area li:last');
            slideBanner.css({left:0});
            slideList.removeClass('on').eq(current2++).addClass('on');
            if(current2===slideList.size()) current2=0;
            if(current1===slideList.size()) current1 =0;
    })
    });

    $('.banner-left-btn').click(function(){
        $('.banner-wrap .area li:last').insertBefore('.banner-wrap .area li:first');
        /* var i=current2;
        console.log(i); */
        slideBanner.css({left:-slideWidth}).stop().animate({left:0},500);
        slideList.removeClass('on').eq((current2--)-2).addClass('on');
        if(current2==-slideList.size()) current2 =0;
        if(current1===-slideList.size()) current1 =0;
    });

    // 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        autoplay: {
            delay: 2000,
        },
        loop:true,
        breakpoints: {
        // when window width is >= 320px
        480: {
        slidesPerView: 3,
        spaceBetween: 20
        },
        // when window width is >= 480px
        720: {
        slidesPerView: 4,
        spaceBetween: 30
        },
        // when window width is >= 640px
        800: {
        slidesPerView: 5,
        spaceBetween: 20
        }}
      });

    //   bxslider
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
      });
});