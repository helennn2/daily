$(function(){
    /* $('#div1').text('내용이 바뀌었습니다. text로'); */
    $('#div2').html('내용이 바뀌었습니다. html로');
    $('#div3').text('<h2>text로 내용 바꾸기</h2>');
    $('#div4').html('<h2>text로 내용 바꾸기</h2>');
    $('#div1').hover(function(){
        $('#div1').text('내용이 바뀌었습니다. text로');
    },function(){
        $('#div1').text('원래대로')
    });
})