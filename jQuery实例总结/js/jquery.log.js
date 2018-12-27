$.extend({
	isDev:true,
	log(a){
		if (this.isDev==true) {
			console.log(a);
		}
	}
})