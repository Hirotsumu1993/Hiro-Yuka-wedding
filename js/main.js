$(function(){
    const $masonry = $('.masonry');

    $masonry.imagesLoaded(function(){
        $masonry.masonry({
            itemSelector:'.masonry-item',
            columnWidth:150,
            gutter:10,
            fitWidth:true,
        });
    });
});