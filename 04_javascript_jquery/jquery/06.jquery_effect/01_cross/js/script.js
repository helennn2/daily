$(function(){
	$('.hover > div').css({background:'#fff',opacity:0})
	$('.banner').on({mouseover:function(){
		let $banner=$(this);
		let $top=$banner.find('.top');
		let $bottom=$banner.find('.bottom');
		let $left=$banner.find('.left');
		let $right=$banner.find('.right');

		$top.css('opacity','.3').stop().animate({height:0},500);
		$bottom.css('opacity','.3').stop().animate({height:0},500);
		$left.css('opacity','.3').stop().animate({width:0},500);
		$right.css('opacity','.3').stop().animate({width:0},500);
		

	},mouseout:function(){
		let $banner=$(this);
		let $top=$banner.find('.top');
		let $bottom=$banner.find('.bottom');
		let $left=$banner.find('.left');
		let $right=$banner.find('.right');

		$top.stop().animate({height:'50%',opacity:0},500)
		$bottom.stop().animate({height:'50%',opacity:0},500)
		$left.stop().animate({width:'50%',opacity:0},500)
		$right.stop().animate({width:'50%',opacity:0},500)

	}})
});