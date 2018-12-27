$.fn.pluginName = function(){
	
	move:setInterval(function(){
		num++;
		console.log($(this).children().length)
		if (num==$(this).children().length) {
			num=0
		}
//		console.log(this)
//		this.find('img').fadeOut().eq(num).fadeIn();
		this.find('img').eq(num).animate({'opacity':'1'}).siblings().animate({'opacity':'0'})
	}.bind(this),1000)
	
}
