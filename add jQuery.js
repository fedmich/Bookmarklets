(function(){
	var url_script = "//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
	var elem_id = 'script_jQuery';
	if(!document.getElementById( elem_id )){
		var new_script = document.createElement('script');
		new_script.id = elem_id ;
		new_script.src = url_script;
		document.documentElement.appendChild( new_script );
	}
})();