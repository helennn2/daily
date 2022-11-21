let header=$('.page-header');
let headerClone=header.contents().clone(); //위의 요소를 복제
let headerCloneContainer=$('<div class="page-header-clone"></div>');
let headerOffsetTop=header.offset().top;

headerCloneContainer.append(headerClone);
headerCloneContainer.appendTo('body'); //body가 더 바깥에 있으니 appenTo

$(window).scroll(function(){
    if($(this).scrollTop()>=headerOffsetTop){
        headerCloneContainer.addClass('visible')
        header.addClass('on') //기존의 헤더를 없애줌
    }else{
        headerCloneContainer.removeClass('visible')
        header.removeClass('on')
    }
});