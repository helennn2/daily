//모바일
$('.appbarCloseBt').on('click',function(){
    $('.mobile-menu').css('left','-100%');
    $('#header .header-mobile-menu').css('left','0');
});
$('.appbarBt').on('click',function(){
    $('.mobile-menu').css('left','0');
    $('#header .header-mobile-menu').css('left','100%');
});


//section4 클릭 슬라이드
$(function(){
    let moving=$('.s4-1_bottom>ul');
    let timer=null;
    let liwidth=($('.s4-1_bottom>ul>li').width())+45;
    //console.log(liwidth)

    slide();
    function slide(){ 
        timer=setInterval(function(){
           moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
           })
        },2000);
    }

    $('.s4-1_bottom').on({mouseover:function(){
        clearInterval(timer); 
    },mouseout:function(){
        slide();
    }});

    $('.s4_b_rightBtn').click(function(){
        moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
        })
    })
    $('.s4_b_leftBtn').click(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-liwidth}).stop().animate({left:0},500)
    })
});

//section5 클릭 슬라이드
$(function(){
    let moving=$('.s5-1_bottom>ul');
    let timer=null;
    let liwidth=($('.s5-1_bottom>ul>li').width())+25;
    //console.log(liwidth)

    slide();
    function slide(){ 
        timer=setInterval(function(){
           moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
           })
        },2000);
    }

    $('.s5-1_bottom').on({mouseover:function(){
        clearInterval(timer); 
    },mouseout:function(){
        slide();
    }});

    $('.s5_b_rightBtn').click(function(){
        moving.animate({left:-liwidth},500,function(){
            $(this).children('li:first').insertAfter($(this).children('li:last'));
            $(this).css("left",0);
        })
    })
    $('.s5_b_leftBtn').click(function(){
        moving.find('li:last').insertBefore(moving.find('li:first'));
        moving.css({left:-liwidth}).stop().animate({left:0},500)
    })
});



//top버튼 위로
$( '.f_r' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
	return false;
} );

$( '.m_f2_right' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 600 );
	return false;
} );


//스크롤탑

/* $(window).scrollTop(300);
$(".section_area").offset().top;
//930

var sectionOffset = $('.section_area').each(function(){
    $(this).offset();
    $(window).scroll(function(){
        if ($(window).scrollTop() < sectionOffset.top){
            $('.img_area').animate({
                left:0,
                opacity:"1"
            },1000);
            $('.t_title').delay(300).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_strong').delay(400).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_desc').delay(500).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_a').delay(700).animate({
                opacity:"1"
            },1000)
        }
    });
});
     */


/* var sectionOffset = $('.section_area').each.offset();
    $(window).scroll(function () {
        if ($(window).scrollTop() < sectionOffset.top) {
            $('.img_area').animate({
                left:0,
                opacity:"1"
            },1000);
            $('.t_title').delay(300).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_strong').delay(400).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_desc').delay(500).animate({
                bottom:0,
                opacity:"1"
            },1000)
            $('.t_a').delay(700).animate({
                opacity:"1"
            },1000)
        }
    });
 */

