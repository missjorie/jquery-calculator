function parseQueryString (str){
	var rewrite =  str.split('?')[1];
	var wanted = rewrite.split('&');
	//or var wanted/rewrite = str.split('?')[1].split('&');
	var obj = {};
	for (var i = 0; i < wanted.length; i++) {
		var fin = wanted[i].split('=');
		obj[fin[0]] = fin[1];
	}
return obj;
}

parseQueryString ('http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA');