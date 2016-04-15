var $nav = $('#main-nav');
var $logo = $('#main-nav .logo img');
var $navItem = $(".nav-item");

// Enable Headroom.js
var navElem = document.querySelector("#main-nav");

var headroom = new Headroom(navElem, {
  "offset": 200,
  "tolerance": 5,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});
headroom.init();


$navItem.on('click', function() {
	var jump_to = '#' + $(this).data('nav');

	$(jump_to).velocity("scroll", { duration: 600 });

});

$(window).on('scroll', function() {
	if ($(this).scrollTop() > 0) {
		$nav.addClass('active');
		$logo.attr('src', 'assets/hearyelogo_cream.png');

	}
	else {
		$nav.removeClass('active');
		$logo.attr('src', 'assets/hearyelogo_white.png');
	}
});

$('body').imagesLoaded()
  .always( function( instance ) {
    console.log('All images loaded');
  })
  .done( function( instance ) {
    console.log('All images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    
  });