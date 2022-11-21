let slide=$('.slideUl>li'),
    prev=$('.prev'),
    next=$('.next'),
    pager=$('.pager > li > a'),
    current=0;
    timer=null;

slides();
function slides(){ //변수랑 이름같으면 안됨
    timer=setInterval(function(){
        let prev=slide.eq(current);
        let prevBtn=pager.eq(current);
        move(prev, 0, '-100%');
        prevBtn.removeClass('active');
        current++;
        if(current==slide.size()) current=0; //if문의 한줄은 중괄호가 없어도됨

        let next=slide.eq(current);
        let nextBtn=pager.eq(current);
        move(next, '100%', 0);
        nextBtn.addClass('active');
    },2000)
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500);
}

$('.slide').hover(function(){
    clearInterval(timer)
},function(){
    slides();
});

next.click(function(){
    let prev=slide.eq(current);
    let prevBtn=pager.eq(current);
    move(prev, 0, '-100%');
    prevBtn.removeClass('active');
    current++;
    if(current==slide.size()) current=0; 

    let next=slide.eq(current);
    let nextBtn=pager.eq(current);
    move(next, '100%', 0);
    nextBtn.addClass('active');
});
prev.click(function(){
    let prev=slide.eq(current);
    let prevBtn=pager.eq(current);
    move(prev, 0, '100%');
    prevBtn.removeClass('active');
    current--;
    if(current==-slide.size()) current=0;

    let next=slide.eq(current);
    let nextBtn=pager.eq(current);
    move(next, '-100%', 0);
    nextBtn.addClass('active');
});


pager.click(function(){
    let tg=$(this);
    let i=tg.parent('li').index();
    //console.log(i);

    pager.removeClass('active');
    tg.addClass('active')
    if(current>i){
        move2(i)
    }else{
        move1(i)
    }
});
function move1(i){
    if(current==i) return;
    let currentEl=slide.eq(current);
    let nextEl=slide.eq(i);
    currentEl.css('left',0).stop().animate({left:'-100%'},500);
    nextEl.css('left','100%').stop().animate({left:0},500);
    current=i;
}
function move2(i){
    if(current==i) return;
    let currentEl=slide.eq(current);
    let nextEl=slide.eq(i);
    currentEl.css('left',0).stop().animate({left:'100%'},500);
    nextEl.css('left','-100%').stop().animate({left:0},500);
    current=i;
}