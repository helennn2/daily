//sec1
$('#div1').show();
$('#div2').hide();

$('#div3').show('fast'); //fast, slow 가능
$('#div4').hide(1000); //hide(1000,function(){alert('숨김')}); 알림창 뜸

//sec2
$('#div5').width(100); 
$('#div6').height(100); 

//sec3
$('.div').hover(function(){
    $('#div7').fadeIn(2000);
},function(){
    $('#div7').fadeOut(2000);
}); //호버. 갖다대면 뜨고 아니면 사라짐
/* $('#div7').fadeIn(2000); */
$('#div8').fadeOut(2000);
$('#div9').fadeTo(2000,.5); //투명도 조절. .5하는데 2초 걸려라

//sec4
$('#div10').slideDown('slow');
$('#div11').slideUp(2000);

//sec5
$('.div12').animate({
    left:400,
    top:400
},1000); //mation아님

$('.div13').delay(1000).animate({
    bottom:500
},1000).animate({right:300},1000); 

$('.div14').delay(3000).animate({
    bottom:500
},1000);