let interval=3000;

$('.slideshow').each(function(){
    let container=$(this);
    function switchImg(){
        let imgs=container.find('img');
        let first=imgs.eq(0);
        let second=imgs.eq(1);
        container.append(first.fadeOut());
        second.fadeIn();
    }
    setInterval(switchImg, interval)
});
//페이드인이 되며 사라지고 밑으로 가서 1번이 0번됨 그렇게 내려감. 0번이 계속 바뀜
