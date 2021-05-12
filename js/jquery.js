$(document).ready(function(){
    $('.lnb,.gnbBg').hide();
    
//    li 각각나오게하기
//    $('.gnb li').hover(function(){
//            $(this).find('.lnb').slideDown();
//    });
    
    
    $('.gnb').hover(function(){
        $('.lnb,.gnbBg').stop().slideDown();
    },function(){
        $('.lnb,.gnbBg').stop().slideUp();
    });
	
	//mainslider 슬릭
	
	$('.bg').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	   autoplay: true,
  autoplaySpeed: 2000,
	  asNavFor: '.mainSlider'
	});
	$('.mainSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		centerMode: true,
		focusOnSelect: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		 autoplay: true,
  autoplaySpeed: 2000,
		asNavFor: '.bg'
	});
	$('.slick-dots').hide();
});
