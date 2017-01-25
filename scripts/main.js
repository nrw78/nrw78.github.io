// Responsive hamburger

$('.hamburger').on('click', function(){
    // $('.sidebar').toggleClass('active-sidebar');
    $(this).toggleClass('active');
    $('nav').toggle()
});

// Hero Slider
// $(document).ready(function(){
//   $('.fade').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'
// });
	



// Mobile or responsive hero and intro
// function shrinkHero (){
// 	if ($('#hero-container').css('background-color') === '#e5e5e5' ) {
// 		$('.banner-responsive p').html('<strong>Identify challenges. Find solutions. Gain insights. Make smart decisions.</strong><p>Hospital Forum connects health care leaders with data, education, tools and networking opportunities to help them achieve performance excellence and provide exceptional care in their communities.</p>')
// 	}
// }