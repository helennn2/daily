let wheelDelta=0; //휠이벤트 발생시 반환값 확인 변수
let browser=0; //파이어폭스 브라우저 판별 변수 Bom

//7개의 section을 class 요소를 배열 처리
//마우스휠 아래(-120) 한번 누를때 값. 위로는(120)
//파이어폭스 휠(30). 위로는(-30)
//파이어폭스 브라우저 판별 => window.navigator.userAgent
//크롬, 익스, 사파리, 오페라 등 Browser[Event-mousewheel]
//파이어폭스 Browser[Event-DOMMouserScroll]
//이전(prev()), 다음(next())

$('.section').each(function(index){ //index는 다음다음의 순번
    $(this).on('mousewheel DOMMouserScroll', function(e){
        e.preventDefault();
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox'); //indexof에서 찾고자 하는 값이 없으면 -1
        if(browser>=0){ //파이어폭스이면 (순번을 나타내줌). 파이어폭스가 없으면 (-1)
            wheelDelta=-e.detail*40; //detail 기본값.30인듯
        }else{
            wheelDelta=e.originalEvent.wheelDelta
        }
        console.log(wheelDelta)

        if(wheelDelta < 0){
            if(index<$('.section').length-1){ //다음으로 내려올 수 있다는 조건. 작으니까
                $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500) //다음 섹션으로 내려간 다음 다음섹션의 탑에 와라
            }
        }else{
            if(index>0){
                $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500)
            }
        }
    })
});