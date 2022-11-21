const tab=$('#tab li');
const content=$('#content > div');

tab.on('click',function(e){
    e.preventDefault();
    let tg=$(this);
    tab.find('>a').removeClass('on');
    tg.find('a').addClass('on');

    let i=tg.index();
   
    content.css('display','none');
    content.eq(i).css('display','block');
})

let el=$('#content>div>img');
let urls=[
    'http://www.naver.com',
    'http://www.daum.net',
    'http://www.google.com',
    'http://www.nate.com'
]

el.on({mouseover:function(){
    let tg=$(this);
    tg.addClass('on');
},mouseout:function(){
    let tg=$(this);
    tg.removeClass('on');
},click:function(){
    let tg=$(this);
   
}})