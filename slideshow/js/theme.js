$(document).ready(function(){
	if (localStorage.getItem("style") === null) {
	document.getElementById('pagestyle').setAttribute('href', './css/main.css')
} else {
document.getElementById('pagestyle').setAttribute('href', localStorage.style)
}
});