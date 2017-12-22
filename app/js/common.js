//search input
$('.search-btn').on('click', function(){
	$('.search-form').toggle();
})

//slick slider
$('.single-item').slick({
	dots: true,
	arrows: false
}); 

$('.multiple-items').slick({
	slidesToShow: 8,
  slidesToScroll: 8,
});