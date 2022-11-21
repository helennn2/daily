var btn=document.getElementById('backToTop'),
    docEl=document.documentElement, //문서 자체를 html 가져오기
    offset=null, //아직 값이 정해지지 않아서 스크롤 양
    scrollPos=null, //스크롤 양
    docHeight=null; //문서의 높이

    //docHeight=docEl.scrollHeight;
    // docHeight=docEl.offsetHeight;
    //scrollPos=docEl.scrollTop;
    //console.log(scrollPos)

    docHeight=Math.max(docEl.offsetHeight, docEl.scrollHeight);
    if(docHeight !=0){
        offset=docHeight/4
    }
    window.addEventListener('scroll', function(){
        scrollPos=docEl.scrollTop;
        /* console.log(scrollPos); */
        /* if(scrollPos>offset){
            btn.className='visible'
        }else{
            btn.className=''
        } */
        btn.className=(scrollPos>offset)? 'visible':'';
    });

    btn.addEventListener('click', function(e){
        e.preventDefault();
        scrollToTop();
    });
    function scrollToTop(){
        var scrollInterval=setInterval(function(){
            if(scrollPos !=0){
                window.scrollBy(0,-55);
            }else{
                clearInterval(scrollInterval)
            }
        },15);
    }
