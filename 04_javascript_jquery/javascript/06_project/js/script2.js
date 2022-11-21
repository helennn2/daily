const btnCollapse=document.getElementById('btnCollapse');
const heading=document.getElementsByClassName('panal-heading');
const question=document.getElementsByClassName('panel-question');
const answer=document.getElementsByClassName('panel-body');

for(let i=0; i<heading.length; i++){
    heading[i].addEventListener('click',function(e){
        for(let j=0; j<question.length; j++){
            question[j].classList.remove('active');
            e.target.parentNode.classList.add('active');
            activeBody();
        }
    })
}

function activeBody(){
    for(let k=0; k<answer.length; k++){
        answer[k].style.display='none';
    }
    let activePanel=document.querySelector('.panel-question.active .panel-body');
    activePanel.style.display='block';
}
activeBody();
btnCollapse.addEventListener('click', function(){
    for(let k=0; k<answer.length; k++){
        answer[k].style.display='none';
    }
})