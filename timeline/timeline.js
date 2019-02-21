let xConfig = {
  name : 'timeline',
  channel: 10000,
  origin : 'file://'
}

function main()
{
    window.addEventListener('message', onMessage, false);

    Send("1", "0", "0");
}

function Receive(channel, user, msg)
{
    console.log("Receive=", channel, user, msg);

    var p = document.createElement("p"); 
    p.appendChild(document.createTextNode("Receive="+channel+" "+user+" "+msg));
    document.body.appendChild(p);
}

function Send(channel, user, msg)
{
    console.log("Send=", channel, user, msg);
    var df = {'from': xConfig.name, 'channel' : channel, 'user' : user, 'msg' : msg};
    window.parent.postMessage(JSON.stringify(df), xConfig.origin);
}

function onMessage(e)
{
  if(e.origin !== xConfig.origin)
  {
    console.log("onMessage Bad Origin=", e.origin, e);
    return;
  }

  console.log(e);
  console.log(e.data);
  var d = JSON.parse(e.data);
  Receive(d.channel, d.user, d.msg)
}

main();