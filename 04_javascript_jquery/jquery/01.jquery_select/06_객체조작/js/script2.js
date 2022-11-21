let srcVal=$('#sec img').attr('src');
//console.log(srcVal)
$('#sec img').attr({"width":200,"src":srcVal.replace("1","2"),"alt":"바위"})

//sec1
$('#div1').addClass('box')
$('#div2').removeClass('box')
$('#div3').addClass('alert')
$('#div4').removeClass('alert')

//sec2
$('.click').click(function(){
    $('#imgs').find('img').toggleClass('add');
});

//sec3
$('#input1').val('내용을 바꾸었습니다.'); //val쓰면 뭐냐고 묻는거임.콘솔로 확인 가능
var a=$('#textarea1').val('다시 내용 넣기'); //val쓰면 뭐냐고 묻는거임.콘솔로 확인 가능
console.log(a)
$('#select1').val('city2');
$('#select2').val(['town2','town3']);

//sec4
$('.div1').empty();

//sec5
var wid1=$('#p1').width();
console.log(wid1);
var wid2=$('#p1').innerWidth(); //패딩값까지 가져오는건 이너위드
console.log(wid2);
var wid3=$('#p1').outerWidth(); //보더까지 가져옴
console.log(wid3);
$('#p2').outerWidth(300).outerHeight(300);

//sec6
var $txt1=$('.txt1 span');
var $txt2=$('.txt2 span');
var $pBox=$('.pBox');

var offTop=$pBox.offset().top; //절대
var pTop=$pBox.position().top; //상대

$txt1.text(offTop);
$txt2.text(pTop);

//sec7
var topNum=$('h1').offset().top;
$(window).scrollTop(topNum);
var sct=$(window).scrollTop();
console.log(sct)