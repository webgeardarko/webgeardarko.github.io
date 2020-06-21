function jumpScroll() {
   	window.scroll(0,566);
}
function jsGo(str) {
	window.location.href = '//xat.com/' + clean(str) +'?p=0&ss=3';
}

function ClearAll()
{
	ClearControl();
	ClearMedia();
}

function ClearMedia()
{
	divId=document.getElementById('media');
	divId.innerHTML='';
}
function OpenSmilies()
{
	divId=document.getElementById('media');
	divId.innerHTML='<embed src="//www.xatech.com/web_gear/flash/smilies.swf?b4" quality="high" wmode="transparent" flashvars="cn=454658314" width="425" height="600" name=smilies align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" />';
	ClearControl();
	createCookie("LastApp", 30006, 31);
	return 1;
}
function FlashDbg(s) 
{
	alert ("FlashDbg:"+s);
	return 1;
}

function OpenDoodle()
{
	divId=document.getElementById('media');
	divId.innerHTML='<embed src="//www.xatech.com/web_gear/flash/doodle.swf?a12" quality="high" bgcolor="#000000" flashvars="cn=454658314" width="425" height="600" name="doodle" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" wmode="transparent" />';
	ClearControl();
	createCookie("LastApp", 10000, 31);
	return 1;
}
function OpenUniverse()
{
	divId=document.getElementById('media');
	divId.innerHTML='<embed src="//xat.com/web_gear/flash/universe.swf?d0" quality="high bgcolor="#000000" flashvars="id=15485457&l=en" width="425" height="540" name="universe" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" /><div style="background-color:#000000; font-size:10px"><table border="0" width="425"><tr><td>The xat universe shows a live view of the public chat groups on xat. To visit a chat group click on its planet, you can navigate around by clicking on empty space and zoom in and out by clicking on the magnifying glass and moving it up and down. Click <a href="//xat.com/universe.html?id=15485457">here for more</a>.</td></tr></table></div>';
	ClearControl();
	return 1;
}

function OpenGame(id)
{
	if(id == 30006)
	{
		OpenSmilies();
		return 1;
	}
	if(id == 30010)
	{
		OpenUniverse();
		return 1;
	}
	divId=document.getElementById('media');
	if(id != 20034)
		createCookie("LastApp", id, 31);
	var w = 425;
	if(id&1) w=600;

	if(id == 20047 && 'https:' == document.location.protocol) // temp
		id = "20047new";
	if(id == 20044 && 'https:' == document.location.protocol) // temp
		id = "20044new";
	// if(id == 20032 && 'https:' == document.location.protocol) // effects
	// 	id = "20032new";

	divId.innerHTML='<embed src="//www.xatech.com/web_gear/flash/'+id+'.swf?7tG4d" quality="high" wmode="transparent" flashvars="cn=454658314" width="'+w+'" height="600" name="app" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" />';	
	ClearControl();
	return 1;
}

function OpenAyah(obj)
{
	var divId=document.getElementById('media');
	var e = '<iframe width=400 height=600 src=//xat.com/web_gear/chat/AreYouaHuman.php?';
	var keys = {type:"type", s:"s", i:"i", k:"k", t:"t", r:"roomid"};
	for (var key in keys) 
		e += key + "=" + parseInt(obj[keys[key]]) + "&";
	e += "</iframe>";
	divId.innerHTML=e;	
	ClearControl();
	return 1;
}

function ClearControl()
{
	divId=document.getElementById('control');
	divId.innerHTML='';
	divId.style.display="none";
	divId = document.getElementById('msgr'); 
	if(divId) 
		divId.style.display="none"; 
	createCookie("LastApp", 0, 1);
}
function SetControl()
{
	ClearControl();
	divId=document.getElementById('control');
	divId.style.display="inline";
	if(divId.innerHTML.length < 10)
		divId.innerHTML='<embed src="//www.xatech.com/web_gear/flash/media.swf?b46" quality="high" wmode="transparent" flashvars="cn=454658314&id=15485457&md=0" width="425" height="131" name="media" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" />';
}
function OpenMedia(str, nocook) {
	str = clean(str);
	var divId=document.getElementById('media');
	divId.innerHTML='<table bgcolor="#000000" border="0" width="425" height="355"><tr><td style="padding:30px">When Members put a <a href="//youtube.com" target="_blank">YouTube</a>, <a href="//veoh.com" target="_blank">Veoh</a>, <a href="//photobucket.com" target="_blank">Photobucket</a>, <a href="//vids.myspace.com" target="_blank">MySpace Video</a> or <a href="//live.yahoo.com" target="_blank">Yahoo Live</a> link in the chat box the video thumbnail will appear on everyones player. Each person can click on the thumbnail to start the video.<BR><BR>To watch videos together, Moderators can press the broadcast button and the video will start on everyones player at the same time.<BR><BR>If you are watching a video and do not want to view broadcasts press the lock (key) button.</td></tr></table>';
	divId=document.getElementById('control');
	var la = 10001;
	if(nocook == 1)
		la = readCookie("LastApp")
	if(str==0)
		SetControl();
	else
	{
		ClearControl();
		divId.innerHTML='<embed src="//www.xatech.com/web_gear/flash/media.swf?b46" quality="high" wmode="transparent" flashvars="cn=454658314&id=15485457&md='+str+'" width="425" height="131" name="media" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" />';
		divId.style.display="inline";
	}
	createCookie("LastApp", la, 31);
	return 1;
}
function OpenByN(n) {
	if(n == 10001) OpenMedia(0);
	if(n == 10000) OpenDoodle();
	if(n >= 20000) OpenGame(n);
	if(n.charAt(0) == '{')
	{
		var obj = JSON.parse(n);
		OpenAyah(obj);
	}
	return 1;
}
function GetEmbed(vid)
{
	vid = clean(vid);
	embed = '<embed type="application/x-shockwave-flash" allowFullScreen="true" bgcolor="#000000" ';
	
	if(vid.substr(0,2) == "$U")
	{ embed += 'src="//ustream.tv/flash/live/'+ vid.substr(2) +'" flashvars="autoplay=true&brand=embed"';
	w = 416; h = 340; }
	else if(vid.substr(0,2) == "$L")
	{ embed += 'src="//cdn.livestream.com/grid/LSPlayer.swf?channel='+ vid.substr(2) +'&amp;color=0xe7e7e7&amp;autoPlay=true&amp;mute=false" width="560" height="340" allowScriptAccess="Always" ';
	w = 560; h = 340; }
	else if(vid.substr(0,2) == "$Y")
	{ embed += 'src="//live.yahoo.com/swf/player/'+ vid.substr(2) +'"';
	w = 412; h = 363; }
	else if(vid.substr(0,2) == "$G")
	{ embed += 'src="//video.google.com/googleplayer.swf?docId='+ vid.substr(2) +'&hl=en-GB&autoplay=true"'; w = 400; h = 326; }
	else if(vid.substr(0,2) == "$O")
	{ embed += 'src="//www.mogulus.com/grid/PlayerV2.swf?channel='+ vid.substr(2) +'&externalInterface=false&backgroundColor=0xffffff&color=0x333333&showviewers=false&on=true&initialVolume=10&chatEnabled=false"'; w = 454; h = 389; }
	else if(vid.substr(0,2) == "$M")
	{ embed += 'src="//lads.myspace.com/videos/vplayer.swf" flashvars="m='+ vid.substr(2) +'&v=2&type=video&a=1"'; w = 430; h = 346; }
	else if(vid.substr(0,2) == "$V")
	{ embed += 'src="//www.veoh.com/videodetails2.swf?permalinkId='+ vid.substr(2) +'&id=anonymous&player=videodetailsembedded&videoAutoPlay=1"'; w = 450; h = 438; }
	// else if(vid.substr(0,2) == "$P")
	// {
	// 	vid = vid.substr(2);
	// 	var sp = vid.split(",");
	// 	var w=425, h=355;
	// 	if(sp[2] > 0 && sp[3] > 0 && sp[2] <= 425 && sp[3] <= 355)
	// 	{
	// 		w = sp[2];
	// 		h = sp[3];
	// 	}
	// 	sp[0] = sp[0].replace(/[^0-9a-z]/ig, '');
	// 	url = 'http://'+sp[0]+'.photobucket.com/'+sp[1];
	// 	embed ='<a href="'+url+'" target="_blank"><img src="'+url+'" width="'+w+'" height="'+h+'" border="0"></a>';
	// 	return embed;
	// }
	else
	{
        embed += 'src="//www.youtube.com/embed/'+ vid + '?rel=0&iv_load_policy=3&autoplay=1" width="425" height="355"';
        embed = embed.replace('type="application/x-shockwave-flash"','type="text/html"');
        embed = embed.replace('<embed','<iframe');
        embed += ' frameborder="0" />';
    }	
	//{ embed += 'src="//www.youtube.com/v/'+ vid + '&rel=0&color1=0xd6d6d6&color2=0xf0f0f0&border=0&autoplay=1"'; w=425; h=355; }
	//embed += ' width="'+w+'" height="'+h+'" />' ;
	
	return embed;
}

function StartMedia(arg) {
	if(arg.substring(0,1) == 'L')
		window.location.href = arg.substring(1);
	else
	{
	if(arg.substring(0,9) == 'xatxatxat') arg = 'L'+arg.substring(9);
	divId=document.getElementById('media');
	divId.innerHTML = GetEmbed(arg);
}
	return 1;
}
function clean(str)
{
	var bad=/[\?\{\}\"<>\&:]/;

	if (bad.test(str))
		return "";
	return str;
}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function GoPoll()
{

	if(readCookie("Poll") != 4)
	{
		createCookie("Poll",4,7)
		OpenGame(30002);
		createCookie("LastApp", 0, 1);
	}
	else
	{/*
		if(readCookie("MySpaceAd") != 1)
		{
			createCookie("MySpaceAd",1,1)
			divId=document.getElementById('media');
			divId.innerHTML='<embed src="http://i79.photobucket.com/albums/j131/chrisrixon/ads/UGCad.swf" quality="high" width="400" height="550" name="media" align="middle" allowScriptAccess="Always" type="application/x-shockwave-flash" />';
//		divId.innerHTML='<a href="http://community.xat.com/showthread.php?t=3040"><img src="http://i79.photobucket.com/albums/j131/chrisrixon/bk/xat_shirt.jpg" width="400" height="400" border="0" /></a>';	
		//ClearControl();
	
			
	//		OpenGame(30000);
		}
*/		
	}

}

function GoLast()
{
	var n;
	DoLang();
	if((n = readCookie("LastApp")))
	{
		OpenByN(n);
	}
	//else
		//GoPoll();
}

uname='Fate';

function DoReplace(id, from, to)
{
	var i = document.getElementById(id).innerHTML;
	i = i.replace(from, to);
	i = i.replace(from, to);
	document.getElementById(id).innerHTML = i;
}
function DoLang()
{
var l = readCookie('lang');
var h = 0;
var t = 0;
switch(l)
{
	case 'es' : h = 'Ayuda'; t = 'Cambio'; break;
	case 'pt' : h = 'Ajuda'; t = 'Troca'; break;
	case 'it' : h = 'Aiuto'; t = 'Baratto'; break;
	case 'tr' : h = 'Yardim'; break;
	case 'fr' : h = 'Aide'; t = 'Commerce'; break;
	case 'sq' : h = 'Ndim'; break;
	case 'ro' : h = 'Ajutor'; t = 'Comert'; break;
	case 'th' : h = 'Chuai'; break;
}
if(h !== 0) { DoReplace('help', 'Help', h); } 
if(t !== 0) { DoReplace('trade', 'Trade', t); }
}	

function getXY( id , X)
{
var i = 0;
while( id != null ) {
if(X)
	i += id.offsetTop;
else
	i += id.offsetLeft;
id = id.offsetParent;
}
return i;
}

function DoGsmilies()
{
	var	divId=document.getElementById('desc');
	//var y = getXY(divId, 1);
	var x = getXY(divId, 0);
	divId=document.getElementById('gsmiles');
	divId.style.visibility="visible";
	//divId.style.top = y+"px";
	divId.style.left = x+"px";
}