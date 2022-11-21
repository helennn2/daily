let header=$('.page-header');
let headerOffsetTop=header.offset().top;
//console.log(headerOffsetTop) 240

$(window).scroll(function(){
    if($(this).scrollTop() >= headerOffsetTop){
        header.addClass('sticky')
    }else{
        header.removeClass('sticky')
    }
});