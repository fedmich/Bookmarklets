(function(){
	var url = window.document.referrer;
	var msg;
	if( url ){
		msg = "Page referrer:\n" + url;
	}
	else{
		msg = "No page referrer";
	}
	alert( msg );
})();