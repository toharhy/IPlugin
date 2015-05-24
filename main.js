$(document).ready(function(){
	     $('body').runningCat();
	 });

$.fn.runningCat = function(){
    var div=$(".preloader");
    $.when(
    	$(".runningCat").animate({left: '100%'}).promise()
    ).done(function(){
    	$(".loaderContainer").animate({left: '0%'}).promise
    })
    

    div.delay(1500).animate({left:'100%'});

 };
	