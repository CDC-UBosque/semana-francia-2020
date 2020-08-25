(function ($) {
	
	$("#tabs" ).tabs( { active: 0 } );

	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		//layoutMode: 'fitRows',
		masonry: {
		    gutter: 30,
		  }
	});
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt( number, 10 ) > 50;
		},
		// show if name ends with -ium
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match( /ium$/ );
		}
	};
	// bind filter button click
	$('.filters-button-group').on( 'click', 'button', function() {
		var filterValue = $( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});
	
	// -------------
	// Menu mobile
	
	$(".menu_mobile").click(function() {
		$("header .header_content nav ul").toggleClass("open");
	});
	
})(jQuery);

//-$(function() {
//-    var tabContainers = $('div.tabs > div');
//-    $('div.tabs ul li a').click(function () {
//-        tabContainers.hide().filter(this.hash).show();
//-        
//-        $('div.tabs ul li a').removeClass('selected');
//-        $(this).addClass('selected');
//-        
//-        return false;
//-    }).eq((new Date().getDay() || 7) - 1).click();
//-});
//-
//-$(function() {
//-    var tabContainers = $('div.tabs > div');
//-    $('div.tabs ul.tabNavigation a').click(function () {
//-        tabContainers.hide().filter(this.hash).show();
//-        
//-        $('div.tabs ul.tabNavigation a').removeClass('selected');
//-        $(this).addClass('selected');
//-        
//-        return false;
//-    }).eq((new Date().getDay() || 7) - 1).click();
//-});





