$(function(){
    let $container=$('.gallery'),
        $loadMoreBtn=$('.load-more'),
        $addItemCount=8,     //클릭할 때마다 나오는 갯수
        $added=0, //더보기 버튼 사라지게 할 용도
        $allData=[];  //배열 json 파일을 불러와서 집어 넣을 공간

    $.getJSON('./data/content.json',initGallery);

    $container.masonry({
        // options
        itemSelector: '.gallery-item',
        columnWidth: 270,
        gutter:20
      });

    function initGallery(data){
        $allData=data;
        //console.log($allData);
        addItem(); //클릭하기 전에 일단 8개 먼저 보이기 위함
        $loadMoreBtn.click(addItem)
    }

    function addItem(){
        let elements=[]; //8개씩 넣기 위해서
        let slicedData=null;

        slicedData=$allData.slice($added, $added += $addItemCount);
        console.log(slicedData);

        $.each(slicedData, function(index, item){
            let itemHTML=
            /* '<li class="gallery-item">' +
                '<a href="#">' +
                    '<figure>' +
                        '<img src="'+ item.images.thumb +'" alt="' +item.title + '">' +
                        '<figcaption>' +
                            item.title +
                        '</figcaption>' +
                    '</figure>' +
                '</a>' +
            '</li>'; */
            `<li class="gallery-item">
                <a href="${item.images.large}">
                    <figure>
                        <img src="${item.images.thumb}" alt="${item.title}">
                        <figcaption>
                            ${item.title}
                        </figcaption>
                    </figure>
                </a>
            </li>`

            elements.push($(itemHTML).get(0));
        });
        $container.append(elements);
        /* $added += slicedData.length; */

        if($added < $allData.length){
            $loadMoreBtn.show()
        }else{
            $loadMoreBtn.hide()
        }

        $container.imagesLoaded( function() {
            $container.masonry('appended', elements)
          });
    }

});