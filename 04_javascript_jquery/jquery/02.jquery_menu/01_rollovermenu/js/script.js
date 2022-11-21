$('.menu li a').each(function(){
    let imgs=$(this).find('img');
    let src_off=imgs.attr('src',);
    let src_on=src_off.replace('_off','_on');
    $('<img />').attr('src',src_on); //변수라서 ''안한거.빨리 가져올 수 있음
    $(this).hover(function(){
        imgs.attr('src',src_on)
    },function(){
        imgs.attr('src',src_off)
    })
});