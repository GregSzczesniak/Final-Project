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
		homeGrid = $('home-grid');

	

	item.on('click', function(){
		var $this = $(this),
			$that = $this.siblings('menu-item');

		// body.css('overflowX', 'hidden');
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

	rotateR.on('click', function(){
		currentPic.removeClass('rotateL rotateGrowL');
		if (currentPic.hasClass('grow')) {
			currentPic.toggleClass('rotateGrowR');
		} else {
			currentPic.toggleClass('rotateR');
		}
		
	})

	rotateL.on('click', function(){
		currentPic.removeClass('rotateR rotateGrowR');
		if (currentPic.hasClass('grow')) {
			currentPic.toggleClass('rotateGrowL');
		} else {
			currentPic.toggleClass('rotateL');
		}
	})

	btn.on('click', function(){
		itemView.removeClass('preview-open preview-image-loaded');
		currentPic.attr('src', '').removeClass('animate grow rotateL rotateR rotateGrowL rotateGrowR');
		body.removeClass('overflow');
	})

})

