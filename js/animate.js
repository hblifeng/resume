$(".navbar-nav li a").mouseover(function(){
	$(this).animate({
		
		color:"#e4393c",
		
	},200);
	
	$(this).next().animate({
		
		width:"100%",
	},200);
	
}).mouseout(function(){
	
	$(this).next().animate({
		
		width:"0%",
	},200);
	
	$(this).animate({
		
		color:"#fff",
	},200);
	
});

//$(function(){
//	
//	$(".page1").addClass("scaleBig");
//	
//	//transition有一个transitionend事件，专门用于监听过度的结束
//	document.getElementsByClassName("page1")[0].addEventListener("transitionend",function(){
//		
//		$(".page1").removeClass("scaleBig");
//	});
//	
//})
