function startAnimation() {
    document.getElementById("back").style.animation = "dreams 10.5s infinite ease-in-out";
}

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})

function fx0() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "none";
}
function fx1() {
   document.getElementById('vid1').style.display = "block";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "none";
}
function fx2() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "block";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "none";
}
function fx3() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "block";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "none";
}
function fx4() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "block";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "none";
}
function fx5() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "block";
           document.getElementById('vid6').style.display = "none";
}
function fx6() {
   document.getElementById('vid1').style.display = "none";
   document.getElementById('vid2').style.display = "none";
    document.getElementById('vid3').style.display = "none";
	 document.getElementById('vid4').style.display = "none";
	  document.getElementById('vid5').style.display = "none";
           document.getElementById('vid6').style.display = "block";
}

        function toggleState(item){
           if(item.className == "on") {
              item.className="off";
           } else {
              item.className="on";
           }
        }
			
function clickOff1() {
   document.getElementById('backsettings').className = "off";
   document.getElementById('backfx').className = "off";
   document.getElementById('backopt').className = "off";
}
function clickOff2() {
   document.getElementById('backgrounds').className = "off";
   document.getElementById('backfx').className = "off";
   document.getElementById('backopt').className = "off";
}
function clickOff3() {
   document.getElementById('backgrounds').className = "off";
   document.getElementById('backsettings').className = "off";
   document.getElementById('backopt').className = "off";
}
function clickOff4() {
   document.getElementById('backgrounds').className = "off";
   document.getElementById('backsettings').className = "off";
   document.getElementById('backfx').className = "off";
}
function hideDiv() {
   document.getElementById('backgrounds').className = "off";
   document.getElementById('backsettings').className = "off";
   document.getElementById('backfx').className = "off";
   document.getElementById('backopt').className = "off";
}
function deleteAll() {
   document.getElementById('remove').className = "off";
   document.getElementById('banner').className = "off";
   document.getElementById('logo').className = "off";
   document.getElementById('navbar').className = "off";
   document.getElementById('apps').className = "off";
   document.getElementById('footer').className = "off";
}