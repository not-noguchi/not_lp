// JavaScript Document
$(function(){
	"use strict";

	// function
	const addZero = function (num) {
		return ('0' + num).slice(-2);
	}

});

// countDown
var flg = true;
var targetDay;
const countdown = setInterval(function(){
	const today = new Date();
	const year = today.getFullYear();
	const month = today.getMonth() + 1;

	if(flg) {
		targetDay = new Date('2023/7/31 23:59:59');
	} else {
		targetDay = new Date(today.getFullYear(), today.getMonth() + 1, 0,23,59,59);
	}
	
	const remainDay = (targetDay - today);
	const day = Math.floor(remainDay / 86400000);
	const h = Math.floor(remainDay / 3600000);
	const h1 = h % 24;
	const m = Math.floor((remainDay - h * 3600000) / 60000);
	$(".day").text(addZero(day));
	$(".hour").text(addZero(h1));
	$(".minute").text(addZero(m));
	
	if (remainDay >= 0){
		//flg = true;
	} else {
		flg = false;
		$(".openingCampaign span").text(month);
		$(".priceInner .bnr img").attr('src','/_/img/price01_bnr' + addZero(month) + '.png')
	}
	
}, 1000);

// function
const addZero = function (num) {
	return ('0' + num).slice(-2);
}
