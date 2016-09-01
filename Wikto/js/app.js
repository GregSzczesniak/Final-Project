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
		home = $('.home'),
		diamond = $('.diamond'),
		diamondBig = $('.diamond-big');


	// home.on('click', function(event){
	// 	event.preventDefault();
	// 	var href = $(this).attr('href');

	// 	$('body').delay(200).animate({
	// 		scrollTop: $(href).offset().top
	// 	}, 1000);

	// });



	var cal = 1.9;

	$(window).resize(function(){
		var sizeD = diamond.width(),
			sizeI = menuIcons.height(),
			newSizeI = sizeD / cal;

		// var newSizeI = 
		console.log("wymiar rombu ", sizeD);
		console.log("wymiar ikony ", sizeI);
		console.log("stosunek ", cal);
		console.log("nowy wymiar ikony ", newSizeI);


		menuIcons.css('font-size', newSizeI);
	})

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

	body.addClass('overflowX');

	item.on('click', function(){
		var $this = $(this),
			$that = $this.siblings('menu-item');

		item.removeClass('menu-item-current');
		$this.addClass('menu-item-current');
	})

	gridItem.on('click', function(e){
		e.preventDefault();
		var thisPic = $(this).find('img'),
			picSrc = thisPic.attr('src');

		// grid.addClass('grid-loaded');
		body.addClass('overflow');
		currentPic.attr('src', picSrc).addClass('original animate');
		itemView.addClass('preview-open preview-image-loaded');

	})

	currentPic.on('click', function(){
		$(this).toggleClass('grow');
	})

	btn.on('click', function(){
		itemView.removeClass('preview-open preview-image-loaded');
		currentPic.attr('src', '').removeClass('animate grow');
		body.removeClass('overflow');
	})

	function showGallery(icon, exposition) {
		icons.css('color', 'rgba(0, 0, 0, .6)');
		icon.css('color','rgba(0, 0, 0, 1)');
		gallery.addClass('hide');
		exposition.removeClass('hide').addClass('fade');
	}

	pencil.on('click', function(){
		showGallery(pencil, graphics);
	})

	brush.on('click', function(){
		showGallery(brush, paintings);
	})

	laptop.on('click', function(){
		showGallery(laptop, projects);
	})

	// pencil.on('click', function(){
	// 	icons.css('color', 'rgba(0, 0, 0, .6)');
	// 	pencil.css('color','rgba(0, 0, 0, 1)');
	// 	gallery.addClass('hide');
	// 	graphics.removeClass('hide').addClass('fade');
	// })

	// brush.on('click', function(){
	// 	icons.css('color', 'rgba(0, 0, 0, .6)');
	// 	brush.css('color','rgba(0, 0, 0, 1)');
	// 	gallery.addClass('hide');
	// 	paintings.removeClass('hide').addClass('fade');
	// })

	// laptop.on('click', function(){
	// 	icons.css('color', 'rgba(0, 0, 0, .6)');
	// 	laptop.css('color','rgba(0, 0, 0, 1)');
	// 	gallery.addClass('hide');
	// 	projects.removeClass('hide').addClass('fade');
	// })

})

