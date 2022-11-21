let slide = $('.slideUl>li');
let prev = $('.prev');
let next = $('.next');
let pager = $('.pager>li>a');
let current = 0;
let timer = null;

slides();
function slides(){
    timer = setInterval(function(){
        let prev = slide.eq(current);
        let prevBtn = pager.eq(current); //pager버튼 색상 변경

        move(prev, 0, '-100%');
        prevBtn.removeClass('active');
        current++;
        if(current == slide.size()){
            current =0;
        }

        let next = slide.eq(current);
        let nextBtn = pager.eq(current);
        move(next, '100%',0);  
        nextBtn.addClass('active');

    },2000);  
}

function move(tg, start, end){
    tg.css('left',start).stop().animate({left:end},500);
}

$('.slide').hover(function(){ //마우스 올리면 멈췄다가 다시 슬라이드
    clearInterval(timer);
},function(){
    slides();
});

// 버튼 클릭
//다음버튼
next.click(function(){
    let prev = slide.eq(current);
        let prevBtn = pager.eq(current); //pager버튼 색상 변경

        move(prev, 0, '-100%');
        prevBtn.removeClass('active');
        current++;
        if(current == slide.size()){
            current =0;
        }

        let next = slide.eq(current);
        let nextBtn = pager.eq(current);
        move(next, '100%',0);  
        nextBtn.addClass('active');
});
//이전버튼
prev.click(function(){
    let prev = slide.eq(current);
        let prevBtn = pager.eq(current); //pager버튼 색상 변경

        move(prev, 0, '100%');
        prevBtn.removeClass('active');
        current--;
        if(current == -slide.size()){
            current =0;
        }

        let next = slide.eq(current);
        let nextBtn = pager.eq(current);
        move(next, '-100%',0);  
        nextBtn.addClass('active');
});


//pager 클릭
pager.click(function(){
    let tg = $(this);
    let i = tg.parent('li').index(); //tg의 부모인 li의 인덱스 번호
    // console.log(i);

    pager.removeClass('active');
    tg.addClass('active');
    if(current>i){ //current가 클릭하는 것보다 크면
        move2(i);
    }else{
        move1(i);
    }
});

function move1(i){
    if(current == i) return;
    let currentEl = slide.eq(current); //현재 버튼
    let nextEl = slide.eq(i); //클릭하는 버튼
    currentEl.css('left',0).stop().animate({left:'-100%'},500);
    nextEl.css('left','100%').stop().animate({left:0},500);
    current = i; //current에 i의 숫자 대입. 계속 바뀌니까
}
function move2(i){
    if(current == i) return;
    let currentEl = slide.eq(current); //현재 버튼
    let nextEl = slide.eq(i); //클릭하는 버튼
    currentEl.css('left',0).stop().animate({left:'100%'},500);
    nextEl.css('left','-100%').stop().animate({left:0},500);
    current = i; 
}