$(function(){

	var item = $('.menu-item'),
		gridItem = $('.grid-item'),
		itemView = $('.preview'),
		currentPic = $('#this-picture'),
		btn = $('#btn-close'),
		grid = $('.grid'),
		rotateR = $('#btn-transform-right'),
		rotateL = $('#btn-transform-left'),
		body = $('body'),
		homeGrid = $('home-grid'),
		brush = $('.brush'),
		pencil = $('.pencil'),
		laptop = $('.laptop'),
		graphics = $('#graphics'),
		paintings = $('#paintings'),
		projects = $('#projects'),
		gallery = $('.gallery-content'),
		icons = $('.icon'),
		menuIcons = $('.menu-icon'),
		links = $('.menu-link'),
		paintLink = $('.paintings-link'),
		graphLink = $('.graphics-link'),
		projectLink = $('.projects-link'),
		paintDiamond = $('.paintings-m-link'),
		graphicDiamond = $('.graphics-m-link'),
		projectDiamond = $('.projects-m-link'),
		home = $('.home-link'),
		iconUp = $('.home-up'),
		diamond = $('.diamond'),
		diamondGallery = $('.diamond-gallery'),
		contactInfo = $('#contact-diamond'),
		backgroundContact = $('#background-contact'),
		contactLink = $('.contact-link'),
		infoSize = $('.info'),
		cal = 1.9,
		calB = 12.8;

	scaleFonts();
	slideToSection(diamondGallery);
	brush.css('color', 'rgba(0, 0, 0, 1)');
	body.addClass('overflowX');


	function slideToSection(element) {
		element.on('click', function(event){
			event.preventDefault();
			var href = $(this).find('a').attr('href');

			console.log(href);
			$('html body').animate({
				scrollTop: $(href).offset().top
			}, 1000);
		})
	}

	function showContactInfo() {
		contactInfo.addClass('rotate-big');
		backgroundContact.removeClass('background-set').addClass('background-transform');
		infoSize.fadeIn('slow');
	}

	function hideContactInfo() {
		contactInfo.removeClass('rotate-big');
		backgroundContact.addClass('background-set').removeClass('background-transform');
		infoSize.fadeOut('slow');
	}

	function scaleFonts() {
		var sizeD = diamond.width(),
			sizeI = menuIcons.height(),
			newSizeI = sizeD / cal;
			sizeD_big = contactInfo.width(),
			sizeFont = infoSize.height(),
			newSizeB = sizeD_big / calB;

		menuIcons.css('font-size', newSizeI);
		infoSize.css('font-size', newSizeB);
	}

	function showGallery(icon, exposition) {
		icons.css('color', 'rgba(0, 0, 0, .6)');
		icon.css('color','rgba(0, 0, 0, 1)');
		gallery.addClass('hide');
		exposition.removeClass('hide').addClass('fade');
	}

	$(window).resize(function(){
		scaleFonts();
	})

	/*Menu effects*/

	item.on('click', function(){
		var $this = $(this);

		item.removeClass('menu-item-current');
		$this.addClass('menu-item-current');
	});

	/*Diamonds Menu*/

	contactLink.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href'),
			li = $(this).closest('li');

		$('body').animate({
			scrollTop: $(href).offset().top - 100
		}, 1000);
		showContactInfo();
		item.removeClass('menu-item-current');
		li.addClass('menu-item-current');
	});
		/* Wherever click, hide contact info if is active */

	$(document).on("click", function () {
    	hideContactInfo();
	});

	$(".contact-link").on("click", function(event) {
    	event.stopPropagation();
	});
		/* Up to the top */

	iconUp.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');

		$('body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
	});

	paintLink.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href'),
			id = $(this).data('id');

		if ($(href).is(':hidden')) {

			$('body').delay(200).animate({
				scrollTop: $(id).offset().top
			}, 1000);
			showGallery(brush, paintings);
		} else {

			$('body').delay(200).animate({
				scrollTop: $(href).offset().top
			}, 1000);
		}
	});

	graphLink.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href'),
			id = $(this).data('id');

		if ($(href).is(':hidden')) {
			
			$('body').delay(200).animate({
				scrollTop: $(id).offset().top
			}, 1000);
			showGallery(pencil, graphics);
		} else {

			$('body').delay(200).animate({
				scrollTop: $(href).offset().top
			}, 1000);
			
		}
	});

	projectLink.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href'),
			id = $(this).data('id');

		if ($(href).is(':hidden')) {
			
			$('body').delay(200).animate({
				scrollTop: $(id).offset().top
			}, 1000);
			showGallery(laptop, projects);
		} else {

			$('body').delay(200).animate({
				scrollTop: $(href).offset().top
			}, 1000);
			
		}
	});

	/* Show the picture */

	gridItem.on('click', function(event){
		event.preventDefault();
		var thisPic = $(this).find('img'),
			picSrc = thisPic.attr('src');

		// grid.addClass('grid-loaded');
		body.addClass('overflow');
		currentPic.attr('src', picSrc).addClass('original animate width-pic');
		itemView.addClass('preview-open preview-image-loaded');

	});

	currentPic.on('click', function(){
		$(this).toggleClass('grow');
	});

	btn.on('click', function(){
		itemView.removeClass('preview-open preview-image-loaded');
		currentPic.attr('src', '').removeClass('animate grow width-pic');
		body.removeClass('overflow');
	});

	/* Show specific gallery */

	pencil.on('click', function(){
		showGallery(pencil, graphics);
	});

	brush.on('click', function(){
		showGallery(brush, paintings);
	});

	laptop.on('click', function(){
		showGallery(laptop, projects);
	});

})

