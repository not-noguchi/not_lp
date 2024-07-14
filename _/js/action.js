// JavaScript Document
$(function(){
	"use strict";
	
	// menu
	$(".navSwitch").on("click", function() {
		if($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(".navCnt").fadeOut(500);
			$("html").css({"overflow":""});
		} else {
			$(this).addClass("open");
			$(".navCnt").fadeIn(100);
			$("html").css({"overflow":"hidden"});
		}
	});
	$(".navCnt a").on("click", function() {
		$(".navSwitch").removeClass("open");
		$(".navCnt").fadeOut(500);
		$("html").css({"overflow":""});
	});
	
	// accordion
	$(".accoTtl").on("click", function() {
		if($(this).hasClass("accoOpen")) {
			$(this).removeClass("accoOpen");
			$(this).next('.accoCnt').slideUp(450,"easeInOutQuad");
		} else {
			$(this).addClass("accoOpen");
			$(this).next('.accoCnt').slideDown(350,"easeInOutQuad");
		}
	});
	
	//floatingBnr
	var scrollHeight2;
	var scrollPosition2;
	var bottomHi2;
	var dispPos;
	$('.floatingBnr').hide();
	$(window).on("scroll", function() {
		//
		scrollHeight2 = $(document).height();
		scrollPosition2 = $(window).height() + $(window).scrollTop();
		bottomHi2 = $("footer").outerHeight();
		//
		if($('#jsFltBnrApear').length){
			dispPos = $("#jsFltBnrApear").offset().top - $(window).height() + 50;
		} else {
			dispPos = 450;
		}
		//
		if ($(this).scrollTop() > dispPos) {
			if ( scrollHeight2 - scrollPosition2  <= bottomHi2 ) {
				$('.floatingBnr').fadeOut(100);
			} else {
				$('.floatingBnr').fadeIn(200);
			}
		} else {
			$('.floatingBnr').fadeOut(100);
		}
	});
	
});