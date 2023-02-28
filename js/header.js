$(document).ready(function(){    
    
    // ----------------------------------------------- pc_gnb 선언    

    // header mouseover시 하위 메뉴 full drop 
    $(".nav_wrap").mouseover(function(){
            $(".menu_bg").stop(true,true).slideDown(350);
            $(".depth").stop(true,true).slideDown(350);
            $('.depth, .menu_bg').css('display', 'block');
            $('.nav_wrap').addClass('on');
        });
        $(".nav_wrap").mouseleave(function(){
        $(".depth").stop(true,true).slideUp(350);
        $(".nav_wrap .menu_bg").stop(true,true).slideUp(350);
        $('.nav_wrap').removeClass('on');
    }); 
    $(".depth").mouseover(function(){
            $(".nav_wrap .menu_bg").stop(true,true).slideDown(350);
            $(".depth").stop(true,true).slideDown(350);
        });
        $(".nav_wrap .menu_bg").mouseleave(function(){
            $(".depth").stop(true,true).slideUp(350);
            $(".nav_wrap .menu_bg").stop(true,true).slideUp(350);
    });

    // sitemap 레이어 선언 
    $(".hamburgur_btn").click(function(e){
        e.preventDefault();
        $(".site_map_layer").fadeIn(400);
    });
    $(".site_map_layer span").click(function(e){
        e.preventDefault();
        $(".site_map_layer").fadeOut(400);
    });


    // ----------------------------------------------- mobile_gnb 선언

    // 햄버거버튼 클릭 시 gnb 슬라이드 
    $(".m_nav").hide();    
    $(".m_hamburgur a").click(function(){
        $(".m_nav").slideToggle("fast");
        // 햄버거버튼 클릭 시 bg색상 변경하기 위한 클래스 선언
        $("header").toggleClass("active");
    });

    // gnb 카테고리 클릭 시 하위 2depth 메뉴 슬라이드 
	$(".m_nav ul.m_sub").hide();
	$(".m_nav ul.m_menu li").click(function(){
		$("ul",this).slideToggle("fast");
        // 클릭한 카테고리에 글자 색상 변경을 위한 클래스 선언
        $(this).toggleClass("active");
	});


    // mobile 햄버거버튼 toggleClass 추가 
    var burger = $('.menu-trigger');

    burger.each(function(index){
        var $this = $(this);
        
        $this.on('click', function(e){
            e.preventDefault();
            $(this).toggleClass('active');
        })
    });



});