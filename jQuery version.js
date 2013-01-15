(function(){
	if( typeof(jQuery)!="undefined" ){
		var version = (jQuery.fn.jquery + '');
		console.log('This site is using jQuery v' + version);
	}
	else{
		console.log('jQuery is not being used here.');
	}
})();