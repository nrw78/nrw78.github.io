// Responsive hamburger

$('.hamburger').on('click', function(){
    // $('.sidebar').toggleClass('active-sidebar');
    $(this).toggleClass('active');
    $('nav').toggle()
});

// Hero Slider
$(document).ready(function(){
  $('.your-class').slick({
    setting-name: setting-value
  });
});
	

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});