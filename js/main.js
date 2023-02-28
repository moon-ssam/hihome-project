
// pageable 선언
new Pageable("#container", {
    pips : true , 
    freeScroll: true,
    events : { 
        wheel : true,  
        mouse : true,  
        touch : true,
    },
});

// swiper 선언
/*const swiper = new Swiper('.swiper-container', {            
    direction: 'horizontal',
    effect: 'fade',
    touchEventsTarget: 'wrapper',
    slidesPerView: 1,
    debugger: true,
    mousewheel: false,
    loop: true,
    autoplay: {        
        delay: 5000, // slide 회전 초수 
        disableOnInteraction: true,
    },
    pagination : { 
        el : '.swiper-pagination',
        clickable : true, 
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
    },
});*/

// office-list slide01
/*new Swiper('.office_list_01', {
	slidesPerView: 4,
    observer: true,
    observeParents: true,
    parallax: true,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,        
        },
        768: {
            slidesPerView: 3,        
        },
        1024: {
            slidesPerView: 3,        
        },
    },
});*/

// office-list slide02
/*new Swiper('.office_list_02', {
    watchOverflow: true,
	slidesPerView: 4,
    observer: true,
    observeParents: true,
    parallax: true,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next-a',
        prevEl: '.swiper-button-prev-a',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,        
        },
        768: {
            slidesPerView: 3,        
        },
        1024: {
            slidesPerView: 3,        
        },
    },
});*/

// office-list slide03
/*new Swiper('.office_list_03', {
	slidesPerView: 4,

    observer: true,
    observeParents: true,
    parallax: true,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next-b',
        prevEl: '.swiper-button-prev-b',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,        
        },
        768: {
            slidesPerView: 3,        
        },
        1024: {
            slidesPerView: 3,        
        },
    },
});*/

// office-list slide04
/*new Swiper('.office_list_04', {
	slidesPerView: 4,
    observer: true,
    observeParents: true,
    parallax: true,
    simulateTouch: true,
    navigation: {
        nextEl: '.swiper-button-next-c',
        prevEl: '.swiper-button-prev-c',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});*/



$(document).ready( function(){

    // main_01 folding toggle 기능 선언
    $('.water_mark').click( function() {
        $('.folding').slideToggle(400, 'linear');
        $('.water_mark').toggleClass('active');        
    });

    // main_03 비즈니스 section tab 구현
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    // main_04 자료실 section tab 구현
    $('ul.tab_ li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tab_ li').removeClass('active');
        $('.tab-contents').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });

    $('.center').click(function(){
        $('.center_menu').slideToggle(400, 'linear');
        $('.center').toggleClass('on');        
    });

    
});