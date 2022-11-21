//menu
$('.appbarCloseBt').on('click',function(){
    $('.mobile-menu').css('left','-100%');
    $('.header-area .header-mobile-menu').css('left','0');
});
$('.appbarBt').on('click',function(){
    $('.mobile-menu').css('left','0');
    $('.header-area .header-mobile-menu').css('left','100%');
});


//video
let winH=$(window).innerHeight(); //창의 높이
let winW=$(window).innerWidth(); //창의 넓이
let vidH=$('#mainVideo').innerHeight(); //비디오 높이
let vidW=$('#mainVideo').innerWidth(); //비디오 너비
let videoPlay='on'; //비디오 기본 켜진(on)상태
let soundMuted='off'; //사운드 기본 꺼진(off) 상태

$('#mainVideo').get(0).autoplay=true; //호환성
$('#mainVideo').get(0).loop=0; //비디오 재생 loop=0 once(한번)
$('#mainVideo').get(0).playbackRate=1.2; //1.2배속으로 재생. 기본 배속 1
$('#mainVideo').get(0).muted=true; //음소거 true되어 있어야 함. 소리끄기. 켜는건 false

setInterval(videoResizeFn,100)
$(window).resize(function(){
    videoResizeFn()
})

function videoResizeFn(){
    winH=$(window).innerHeight(); //969
    winW=$(window).innerWidth(); //1903
    vidH=$('#mainVideo').innerHeight(); //1189
    vidW=$('#mainVideo').innerWidth(); 
    //console.log(vidW)

    $('.main-video').css({width:100+'%', height:winH}); //기본 창 높이 설정. 지금 현재 윈도우의 높이만큼 맞추겠다.

    if(winH > vidH){ //여백이 생기는 걸 막고자 함
        $('#mainVideo').css({width:'auto', height:winH});
    }
    if(winW>vidW){
        $('#mainVideo').css({width:winW, height:'auto'});
    }

    $('#mainVideo').css({marginTop:(winH-vidH)/2, marginLeft:(winW-vidW)/2})
}

//클릭이벤트는 if가 들어와야함
$('.playPauseIconBt').on({click:function(){
    if(videoPlay==='on'){
        videoPlay='off';
        $('#mainVideo').get(0).pause();
        $(this).find('img').attr('src','./img/icon-player-play.png')
    }else{
        videoPlay='on';
        $('#mainVideo').get(0).play();
        $(this).find('img').attr('src','./img/icon-player-pause.png')
    }
}});

$('.mutedIconBt').on('click',function(){
    if(soundMuted==='off'){
        soundMuted='on';
        $('#mainVideo').get(0).muted=false;
        $(this).find('i').attr('class','fas fa-volume-off')
    }else{
        soundMuted='off';
        $('#mainVideo').get(0).muted=true;
        $(this).find('i').attr('class','fas fa-volume-mute')
    }
});

//현재 진행중인 비디오 길이(시간)확인 currentTime메소드 초단위
//전체 길이 duration
//비디오 정지를 확인 ended 메소드 종료시 true 반환. 재생시 false 반환

setIn=setInterval(videoTimeCountFn,100);
function videoTimeCountFn(){

    if($('#mainVideo').get(0).ended==true){
        $('.watch-again').show();
            $(this).hide();
            videoPlay='off';
            $('.playPauseIconBt').find('img').attr('src','./img/icon-player-play.png');
            clearInterval(setIn)
        };
    }

$('.watchagainBtn').click(function(){
    videoPlay='on';
    $('#mainVideo').get(0).play();
    $('.playPauseIconBt').find('img').attr('src','./img/icon-player-pause.png');
    $('.watch-again').hide();
})