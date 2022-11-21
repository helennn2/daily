$('.slideshow').each(function(){
    let timer=null;
    let container=$(this);
    function switchImg(){
        let anchors=container.find('a');
        let first=anchors.eq(0);
        let second=anchors.eq(1);
        first.fadeOut().appendTo(container)
        second.fadeIn(); 
    }
    function startTimer(){
        timer=setInterval(switchImg, 3000)
    }
    function stopTimer(){
        clearInterval(timer)
    }

    container.find('a').hover(stopTimer, startTimer)

    startTimer()
});