$(function () {
    //精选房源轮播，用的是swiper插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    //播放和暂停视频
    /*var video = document.getElementById('recommend-video');
    var $videoBg = $('#video-bg');
    var $iconPlay = $('#icon-play');
    $iconPlay.on('click', function () {
        console.log(video.paused);
        if(video.paused){
            $videoBg.hide();
            $(this).hide();
            video.play();
        }
    });
    video.addEventListener('click', function () {
        $videoBg.show();
        $iconPlay.show();
        video.pause();
    });*/
});