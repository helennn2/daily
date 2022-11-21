document.addEventListener('DOMContentLoaded', function(){
    let $slideWrap=document.querySelector('.container'),
        $slideContainer=document.querySelector('.slider-container'),
        $slide=document.querySelectorAll('.slide'),
        $prev=document.getElementById('prev'),
        $next=document.getElementById('next'),
        $pagerBtn=document.querySelectorAll('.pager span'),
        $slideHeight=0,
        $slideCount=$slide.length,
        $currentIndex=0,
        $timer=null;

        //슬라이드의 높이 확인하여 부모로 지정 - 대상.offsetHeight

        /* var topHeight=$slide[1].offsetHeight;
        console.log(topHeight) 확인용*/ 
        for(let i=0; i<$slideCount; i++){
            if($slideHeight<$slide[i].offsetHeight){
                $slideHeight=$slide[i].offsetHeight
            }
        }
        console.log($slideHeight)
        $slideContainer.style.height=$slideHeight+'px';
        $slideWrap.style.height=$slideHeight+'px';

        for(let j=0; j<$slideCount; j++){
            $slide[j].style.left=j*100+'%';
        }

        //슬라이드 함수
        function goToSlider(idx){
            $slideContainer.classList.add('animated');
            $slideContainer.style.left = -100 * idx + '%';
            $currentIndex=idx;
            for(let k=0; k<$pagerBtn.length; k++){
                $pagerBtn[k].classList.remove('active');
            }
            $pagerBtn[idx].classList.add('active');
        }
        goToSlider(0); //1이면 100%, 3이면 300%씩 움직임
        //자동슬라이드
        function startAutoSlide(){
            $timer=setInterval(function(){
                let nextIdx=($currentIndex+1) % $slideCount; //슬라이드카운트는 6. 0+1은 1인데 1과 6은 못 나눔. 0이고 나머지값은 1. 다음 커런트 인덱스 1+1도 마찬가지로 못나누니 나머지값1
                goToSlider(nextIdx);
            },3000);
        }
        startAutoSlide(); //호이스팅 연산
        function stopAutoSlide(){
            clearInterval($timer)
        }

        $slideWrap.addEventListener('mouseenter', function(){
            stopAutoSlide()
        })
        $slideWrap.addEventListener('mouseleave', function(){
            startAutoSlide()
        })
        $next.addEventListener('click', function(){
            //goToSlider($currentIndex+1)
            if($currentIndex===$slideCount-1){
                goToSlider(0)
            }else{
                goToSlider($currentIndex+1)
            }
        })
        $prev.addEventListener('click', function(){
            //goToSlider($currentIndex+1)
            if($currentIndex===0){
                goToSlider($slideCount-1)
            }else{
                goToSlider($currentIndex-1)
            }
        })
})