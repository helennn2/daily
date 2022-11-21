const targetLink=document.querySelectorAll('.tab-menu a');
const targetContent=document.querySelectorAll('#tabContent>div');

for(let i=0; i<targetLink.length; i++){
    targetLink[i].addEventListener('click', function(e){
        let orgTarget=e.target.getAttribute('href');
        // console.log(orgTarget)
        let tabTarget=orgTarget.replace('#','');
        for(let k=0; k<targetContent.length; k++){
            targetContent[k].style.display="none";
        }
        document.getElementById(tabTarget).style.display='block';

        for(let j=0; j<targetLink.length; j++){
            targetLink[j].classList.remove('on');
            e.target.classList.add('on');
        }
    });
}