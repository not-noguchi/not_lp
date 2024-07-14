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
	
	// countDown
	function countdowntimer(){
		const countdown = setTimeout(function(){
			
			var flg = true;
			var targetDay
			var nd = new Date();
			var year = nd.getFullYear();
			var month = nd.getMonth() + 1;
			var lastDay = getMonthEndDay(year, month);
			
		//	console.log(flg,nd,year,month);
		//	console.log(getMonthEndDay(year, month)); //30
			
			if(flg) {
				targetDay = new Date('2023/7/31 23:59:59');
			} else {
				//30
				targetDay = year + '/' + month + '/' + getMonthEndDay(year, month) + ' 23:59:59'
						
				
			}
		//	console.log(targetDay);
		//	console.log( year + '/' + month + '/' + getMonthEndDay(year, month) + ' 23:59:59');
			
			
			console.log(flg);
			
			//console.log( getMonthEndDay(year, month) );
			
			const d = Math.floor(remainDay / 86400000);
			const h = Math.floor(remainDay / 3600000);
			const h1 = h % 24;
			const m = Math.floor((remainDay - h * 3600000) / 60000);
			$(".day").text(addZero(d));
			$(".hour").text(addZero(h1));
			$(".minute").text(addZero(m));
			var remainDay = (targetDay - nd);
			
			console.log(remainDay);
			
			if (remainDay >= 0){
				flg = true;
			}else{
				flg = false;
			}
			
			
			//
			console.log(flg);
		}, 1000);
		
		
		function getMonthEndDay(year, month) {
			var dt = new Date(year, month, 0);
			return dt.getDate();
		}
		
	}
	countdowntimer();
	const addZero = function (num) {
		return ('0' + num).slice(-2);
	}
	
	
	
	
	
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