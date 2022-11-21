let banner=$('#wrap ul li');
let current=0;

setInterval(function(){
    let prev=banner.eq(current);
    move(prev,0,'-100%');
    current++;
    if(current==banner.size()){current=0;}
    let next=banner.eq(current);
    move(next,'100%',0);
},2000)

function move(tg, start, end){
    tg.css('left',start).stop().animate({
        left:end
    },500)
}

/* let banner1=$('#wrap .box1 li');
let current1=0;

setInterval(function(){
    let prev=banner.eq(current1);
    move(prev,0,'-100%');
    current1++;
    if(current1==banner1.size()){current=0;}
    let next=banner1.eq(current1);
    move(next,'100%',0);
},2000)

function move(tg,start,end){
    tg.css('right',start).stop().animate({
        right:end
    },500)
} */