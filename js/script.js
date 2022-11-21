
/* 메뉴 각각 클릭할 때 실행 */
$('.menu_wrap').each(function(){
    let topDiv=$(this);
    let anchors=topDiv.find('.menu a');    //this 각각 받아오겠다
    let panelDivs=topDiv.find('.menu_main');
    let lastAnchor=null;
    let lastPanel=null;

    lastAnchor=anchors.filter('.on') //on을 찾아서 라스트앵커에 넣고 
    lastPanel=$(lastAnchor.attr('href'));
    panelDivs.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('on') 
        currentAnchor.addClass('on') //누르면 addcalss되게

        lastPanel.hide();
        currentPanel.show(); //여기까지하면 겹쳐서 보이기 때문에 

        lastAnchor=currentAnchor; //이렇게 지정
        lastPanel=currentPanel;
    })
});

/* 탑버튼 */
