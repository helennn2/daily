$('.progress-bar').each(function(){
    let progressWrap=$(this),
    progressBar=progressWrap.find('.bar'),
    progressText=progressWrap.find('.num'),
    progressNum=progressText.attr('data-num');

    progressBar.animate({width:progressNum+"%"},2000);
    //progressText.text(70)
    //움직이려고 하는 넓이/전체넓이*100

    setInterval(textAni, 1000/10)
    function textAni(){
        let currentWidth=progressBar.width() / progressWrap.width()*100;
        progressText.text(Math.ceil(currentWidth) + '%')
    }
});