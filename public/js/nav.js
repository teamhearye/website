var $nav = $('#main-nav');
var $logo = $('#main-nav .logo img');
var $navItem = $(".item");
var $mobileIcon = $('.mobile-icon');
var $mobileItems = $('.mobile-items');

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
    $mobileItems.hide();

	}
	else {
		$nav.removeClass('active');
		$logo.attr('src', 'assets/hearyelogo_white.png');
	}
});

function checkMobile() {
  if ($(window).width() < 650) {
    $nav.addClass('mobile');
  }
  else {
    $nav.removeClass('mobile');
  }
}

$(document).ready(function() {
  checkMobile();
});

$(window).resize(function() {
  checkMobile();
});

$mobileIcon.on('click', function() {
  if ($mobileItems.is(':hidden')) {
    $mobileItems.show();
  }
  else {
    $mobileItems.hide();
  }
});

$('body').imagesLoaded(function() {
  $('img').fadeIn();
});
