const tab=$('#tab li');
const content=$('#content>div');

tab.on('click', function(e){
    e.preventDefault();
    let tg=$(this);
    let ta=tg.find('a');
    tab.find('>a').removeClass('on'); //on 지우고
    ta.addClass('on'); //선택한 친구한테만 on이 들어와라

    let i=tg.index();
    //console.log(i)

    content.css('display','none');
    content.eq(i).css('display','block');
}); //클릭하면 이미지 바뀜

let el=$('#content>div>img');
let urls=[
    'http://www.naver.com',
    'http://www.daum.net',
    'http://www.google.com',
    'http://www.nate.com'
]

//그룹 메서드인 on메서드. 마우스 올렸을 땐 투명도. 클릭할 땐 링크로
el.on({mouseover:function(){
    let tg=$(this);
    tg.addClass('on')
},mouseout:function(){
    let tg=$(this);
    tg.removeClass('on')
},click:function(){
    let tg=$(this);
    let i=tg.parent().index();
    let linkURL=urls[i]
    /* location.href=linkURL; */
    window.open(linkURL) //새창에서 열기
}});