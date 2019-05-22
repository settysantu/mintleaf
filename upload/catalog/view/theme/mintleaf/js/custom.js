/* 
------------------------------------------------------------
Template Name    : Mint Leaf OpenCart Theme
OpenCart Version : 3.0.3.2
Author Name      : Santosh Setty
Author URL       : http://www.santoshsetty.com
Notes			 : Custom code, don't edit with out proper directions.
------------------------------------------------------------ 
*/


// Function to make footer links collapse for small screens
function footerLinksCollapse() {

	// Toggle Head & Content Variables
	var toggleHead = $(".foot-col-head");
	var toggleContent = $(".foot-col-body");

	// If condition for screens less then equal to 767
	if( $(window).width() <= 767 ) {
		toggleContent.hide();
		toggleHead.addClass('toggle');
		toggleHead.click(function(){
			$(this).toggleClass('active').parent().find('.foot-col-body').slideToggle('slow');
		});
	} else {
		toggleHead.parent().find('.foot-col-body').removeAttr('style');
		toggleHead.removeClass('active, toggle');
		toggleContent.show();
		toggleHead.click(function(){
			$(this).removeClass('active').parent().find('.foot-col-body').stop();
		});
	}

}

$(function() {	

    "use strict";
	
	// REMOVE # FROM URL
	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});		
	
    // Footer Toggle For Mobile
    footerLinksCollapse();

});