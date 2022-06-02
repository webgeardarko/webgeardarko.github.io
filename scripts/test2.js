<script>
var client = new XMLHttpRequest();
client.open('GET', 'https://pastebin.com/raw/a8iGNU8S');
client.onreadystatechange = function() {
  console.log(client.responseText);
}
client.send();
</script>

<script>
client.responseText
</script>