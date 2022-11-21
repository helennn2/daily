//menu
/* $('.closeBtn').on('click',function(){
    $('.menu-wrap').css('right','-100%');
    $('.header-area .menu-open').css('right','0');
});
$('.openBtn').on('click',function(){
    $('.menu-wrap').css('right','0');
    $('.header-area .menu-open').css('right','100%');
});
 */


/* 스와이퍼 */
/* var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 120,
    loop: true,
    centeredSlides: true,
    loopFillGroupWithBlank: true,
    initialSlide: 0,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

 */

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

/* 세로스크롤 */
window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 5) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})

/* 탑버튼 */
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $('#topBtn').fadeIn();
            }else{
            $('#topBtn').fadeOut();
            }
        });
   
    $("#topBtn").click(function(){
        $('html,body').animate({
            scrollTop:0
        },400);
    });
});
