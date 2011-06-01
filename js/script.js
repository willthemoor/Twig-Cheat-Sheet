function pageInit(){

	var ls = document.getElementById("lights");
	ls.addEventListener("click", toggleLights, false);
	
}
// style switcher. just cause.
function toggleLights(e) {
	var t = e.target,
		href = t.getAttributeNode('href'),
		body = document.getElementsByTagName('body')[0];
	
	if(href.value == "#dark"){
		href.value = "#light";
		body.setAttribute("class", "dark");
	} else{
		href.value = "#dark";
		body.setAttribute("class", "light");
	}
	e.preventDefault();
	return false;
}