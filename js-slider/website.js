function jsSlider(options) {
	
	var elem = options.element;
	var data = options.data;
	var timer = options.timer || 5;
	var counter = -1;
	var interval = null;
	var slide = null;
	var navigation = null;
	
	function constructSlider() {
		document.querySelector(elem).innerHTML = '<div id="slider"></div>';
	}
	
	function showSlide() {
		counter++;
		if (counter >= data.length) counter = 0;
		
		var item = data[counter];
		
		slide  = '<div id="slide-' + counter + '" class="slide">';
		slide += '<div class="image"><img src="' + item.image + '" alt="" /></div>';
		slide += '<div class="text"><h2>' + item.title + '</h2><p>' + item.text + '</p></div>';
		slide += ((item.link == '') ? '' : '<a class="main-link" href="' + item.link + '"></a>');
		slide += '<div class="navigation"></div>';
		slide += '</div>';
		
		document.querySelector('#slider').innerHTML = slide;
		
		showNavigation();
	}
	
	function showNavigation() {
		navigation = '';
		for (var i = 0; i < data.length; i++) {
			navigation += '<a class="navigation-link ' + ((i === counter) ? 'navigation-active' : 'navigation-inactive') + '" data-count="' + i +'" href=""></a>';
		}
		
		document.querySelector('div.navigation').innerHTML = navigation;
		
		activateNavigation();
	}
	
	function activateNavigation() {
		var nav = document.querySelectorAll('.navigation-link');
		for (var i = 0; i < nav.length; i++) {
			nav[i].addEventListener('click', function(event) {	
				event.preventDefault();			
				counter = (this.dataset.count - 1);
				stopRotate(); 
				startRotate();
			});
		}
	}
	
	function startRotate() {
		if(interval === null) constructSlider(); showSlide();
		interval = setInterval(function() { showSlide(); }, timer * 1000);
	}
	
	function stopRotate() {
		clearInterval(interval);
	}
	
	startRotate();
	
}
