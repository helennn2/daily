let slides=document.querySelector('.slides'),
    slide=document.querySelectorAll('.slides li'),
    currentIdx=0,
    slideCount=slide.length,
    slideWidth=200,
    slideMargin=30,
    prevBtn=document.querySelector('.prev'),
    nextBtn=document.querySelector('.next');

makeClone();
function makeClone(){
    for(let i=0; i<slide.length; i++){
        let cloneSlide=slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');

        slides.appendChild(cloneSlide);
    }
    for(let i=slideCount-1; i>=0; i--){
        let cloneSlide=slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');

        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInPos();
    setTimeout(function(){
        slides.classList.add('animated');
    },600)
}

function updateWidth(){ //전체 갯수 구하고 슬라이드 마진값
    let currentSlide=document.querySelectorAll('.slides li');
    let newSlideCount=currentSlide.length;

    let newWidth=(slideWidth+slideMargin)*newSlideCount-slideMargin+'px';
    slides.style.width=newWidth;
    console.log(slides)
}

function setInPos(){
    let cloneCenter=-(slideWidth+slideMargin)*slideCount;
    slides.style.transform='translateX('+cloneCenter+'px)';
}
nextBtn.addEventListener('click', function(){
    moveSlide(currentIdx+1)
});
prevBtn.addEventListener('click', function(){
    moveSlide(currentIdx-1)
});

function moveSlide(num){
    slides.style.left=-num*(slideWidth+slideMargin)+'px';
    currentIdx=num;
    if(currentIdx==slideCount || currentIdx==-slideCount){
        setTimeout(function(){
            slides.classList.remove('animated');
            slides.style.left=0;
            currentIdx=0;
        },500);
        setTimeout(function(){
            slides.classList.add('animated');
        },600)
    }
}