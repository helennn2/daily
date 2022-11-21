var btn=document.getElementById('submit'),
    container=document.querySelector('.container');

//할일(함수) = function(){}

btn.addEventListener('click',function(){
    btn.style.color="red";
    console.log('버튼이 클릭되었습니다')
});
container.addEventListener('mouseenter',function(){
    console.log('마우스 들어옴')
})
container.addEventListener('mouseleave',function(){
    console.log('마우스 나감')
}) //하나의 동작으로 인지해 소문자-대문자로 안쓰고 그냥 소-소

window.addEventListener('keydown',function(event){
    console.log(event.key);
    console.log(event.keyCode);
})