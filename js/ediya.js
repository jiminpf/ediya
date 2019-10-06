$(function(){
    var swiper = new Swiper('.slide1.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        loop:true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },        
    });
    
    $('.slide1').on({
        mouseenter:function(){
            swiper.autoplay.stop();
        },
        mouseleave:function(){
            swiper.autoplay.start();
        }
    })
})


