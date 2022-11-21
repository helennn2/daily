let base=100;
let mybody=$('body');

$('#zoom a').click(function(){
    let zNum=$('#zoom a').index(this)
   // console.log(zNum)
    if(zNum==0){
        base+=10
    }else if(zNum==0){
        base=100 //원래크기대로.100/100 1이니까
    }else{
        base-=10
    }
    mybody.css('overflow-y','auto').css('transform','scale('+ base/100 +')').css('transform-origin',"50% 0").css('zoom',base+'%');
    return false;
});