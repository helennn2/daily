//sec1
$('.box p:eq(2)').after("<p>After</p>");
$('<p>insertAfter</p>').insertAfter('.box p:eq(1)');

$('.box p:eq(1)').before("<p>Before</p>");
$('<p>insertBefore</p>').insertBefore('.box p:eq(0)');

//sec2 방향 전치사
let basket=$('#basket'),
    apple=$('#apple'),
    banana=$('#banana'),
    orange=$('#orange');

/*  append 방법 두가지. 아래로 포함시켜줌
    basket.append(apple)
    basket.append(orange)
    basket.append(banana) */

    /* apple.appendTo(basket)
    orange.appendTo(basket)
    banana.appendTo(basket) 
 */

    /*prepend는 위로 포함시켜줌 
    basket.prepend(apple)
    basket.prepend(orange)
    basket.prepend(banana) */

    apple.prependTo(basket)
    orange.prependTo(basket)
    banana.prependTo(basket) 

//sec3
let copyObj=$('.box2').children().clone();
let obj2=$('.box3');
let obj1=$('.box2');
let obj3=$('.box4');

copyObj.appendTo(obj2);
obj1.remove(); //통으로 사라짐
obj3.empty(); //내용만 사라짐

//sec4
$('h3').replaceWith('<h2>replace method</h2>');
$('<p>Change</p>').replaceAll('.box6 > div'); //대상을 선택해서 넣을지, 대상에 넣을지 방향의 차이점이 있음

//sec5
$('#sec5 strong').unwrap(); //h1의 기능을 삭제시킴
$('.ct1').wrap('<div/>'); // </>열고 닫고 다함. ct1을 div로 감싸는 기능. 각각 넣고 싶을 때
$('.ct2').wrapAll('<div/>'); //전체 묶어서 쓰고 싶을 때
$('#sec5 li').wrapInner('<h3/>');
