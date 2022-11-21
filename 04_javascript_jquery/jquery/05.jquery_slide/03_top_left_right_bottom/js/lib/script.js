let banner=$('#wrap ul li');
let current=0; //0부터 카운터하는 초깃값.0,1,2,3...으로 가기 위함

setInterval(function(){ //시간간격으로 움직임
    let prev=banner.eq(current);
    move(prev, 0, '-100%');
    current++; //여기서는 0이지만 다음에 불러낼때는 ++이기 때문에 1임
    if(current==banner.size()){current=0;}
    let next=banner.eq(current); //여기가 ++로 인한 1
    move(next, '100%', 0);
},2000); 
//current==3써도 되지만 홈페이지 만들때 정보를 계속 추가하기 때문에 배너사이즈로 넣기

function move(tg, start, end){
    tg.css('top', start).stop().animate({top:end},{duration:500,ease:'easeOutCubic'});
}