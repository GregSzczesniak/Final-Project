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
		home = $('.home-link'),
		diamond = $('.diamond'),
		contactInfo = $('#contact-diamond'),
		backgroundContact = $('#background-contact'),
		contactLink = $('.contact-link'),
		infoSize = $('.info'),
		contactClose = $('.contact-close'),
		cal = 1.9,
		calB = 12.8,
		calX = 19;

	scaleFonts();
	body.addClass('overflowX');

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
			sizeX = contactClose.width(),
			newSizeX = sizeD_big / calX;

		menuIcons.css('font-size', newSizeI);
		infoSize.css('font-size', newSizeB);
		contactClose.css('font-size', newSizeX);
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

	// diamond.on('click', function(event){
	// 	event.preventDefault();
	// 	var href = $(this).find('a').attr('href');
		
	// 	$('body').animate({
	// 		scrollTop: $(href).offset().top
	// 	}, 1000);
	// })

	home.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');

		$('body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
	})

	contactLink.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');

		$('body').animate({
			scrollTop: $(href).offset().top - 100
		}, 1000);
		showContactInfo();
	})

	contactClose.on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');

		$('body').animate({
			scrollTop: $(href).offset().top
		}, 1000);
		hideContactInfo();
	})

	$(document).on("click", function () {
    	hideContactInfo();
	});

	$(".contact-link").on("click", function (event) {
    	event.stopPropagation();
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

	item.on('click', function(){
		var $this = $(this),
			$that = $this.siblings('menu-item');

		item.removeClass('menu-item-current');
		$this.addClass('menu-item-current');
	})

	gridItem.on('click', function(event){
		event.preventDefault();
		var thisPic = $(this).find('img'),
			picSrc = thisPic.attr('src');

		// grid.addClass('grid-loaded');
		body.addClass('overflow');
		currentPic.attr('src', picSrc).addClass('original animate width-pic');
		itemView.addClass('preview-open preview-image-loaded');

	})

	currentPic.on('click', function(){
		$(this).toggleClass('grow');
	})

	btn.on('click', function(){
		itemView.removeClass('preview-open preview-image-loaded');
		currentPic.attr('src', '').removeClass('animate grow width-pic');
		body.removeClass('overflow');
	})

	pencil.on('click', function(){
		showGallery(pencil, graphics);
	})

	brush.on('click', function(){
		showGallery(brush, paintings);
	})

	laptop.on('click', function(){
		showGallery(laptop, projects);
	})

})

