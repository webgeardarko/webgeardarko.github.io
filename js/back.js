$(document).ready(function(){
$("#back").style.background = (localStorage.back)
    function $(s){
        return document.querySelector(s);
    }
    $("#btn").onclick = function(){
    $("#back").style.background = "url("+($("input#url").value)+")no-repeat center center fixed";
	localStorage.back = "url("+($("input#url").value)+")no-repeat center center fixed";
    }
	$("#btn2").onclick = function(){
	localStorage.back = undefined;
	$("#back").style.background = "url(http://i.imgur.com/LuWrqUK.jpg) no-repeat center center fixed";
	}
});