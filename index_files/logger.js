!function(){var x=undefined;!function d(r,s,a){function c(i,e){if(!s[i]){if(!r[i]){var n="function"==typeof require&&require;if(!e&&n)return n(i,!0);if(u)return u(i,!0);var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}var o=s[i]={exports:{}};r[i][0].call(o.exports,function(e){return c(r[i][1][e]||e)},o,o.exports,d,r,s,a)}return s[i].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)c(a[e]);return c}({1:[function(e,i,n){var t,o,r,s;t=function(){function c(){for(var e=0,i={};e<arguments.length;e++){var n,t=arguments[e];for(n in t)i[n]=t[n]}return i}function d(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function e(u){function a(){}function n(e,i,n){if("undefined"!=typeof document){"number"==typeof(n=c({path:"/"},a.defaults,n)).expires&&(n.expires=new Date(+new Date+864e5*n.expires)),n.expires=n.expires?n.expires.toUTCString():"";try{var t=JSON.stringify(i);/^[\{\[]/.test(t)&&(i=t)}catch(s){}i=u.write?u.write(i,e):encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var o,r="";for(o in n)n[o]&&(r+="; "+o,!0!==n[o]&&(r+="="+n[o].split(";")[0]));return document.cookie=e+"="+i+r}}function i(e,i){if("undefined"!=typeof document){for(var n={},t=document.cookie?document.cookie.split("; "):[],o=0;o<t.length;o++){var r=t[o].split("="),s=r.slice(1).join("=");i||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var a=d(r[0]),s=(u.read||u)(s,a)||d(s);if(i)try{s=JSON.parse(s)}catch(c){}if(n[a]=s,e===a)break}catch(c){}}return e?n[e]:n}}return a.set=n,a.get=function(e){return i(e,!1)},a.getJSON=function(e){return i(e,!0)},a.remove=function(e,i){n(e,"",c(i,{expires:-1}))},a.defaults={},a.withConverter=e,a}(function(){})},"function"==typeof x&&x.amd&&(x(t),o=!0),"object"==typeof n&&(i.exports=t(),o=!0),o||(r=window.Cookies,(s=window.Cookies=t()).noConflict=function(){return window.Cookies=r,s})},{}],2:[function(e,T,E){!function(o,l){"use strict";var w="function",e="undefined",i="model",n="name",t="type",r="vendor",s="version",a="architecture",c="console",u="mobile",d="tablet",f="smarttv",p="wearable",m={extend:function(e,i){var n,t={};for(n in e)i[n]&&i[n].length%2==0?t[n]=i[n].concat(e[n]):t[n]=e[n];return t},has:function(e,i){return"string"==typeof e&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:l},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},g={rgx:function(e,i){for(var n,t,o,r,s,a=0;a<i.length&&!r;){for(var c=i[a],u=i[a+1],d=n=0;d<c.length&&!r;)if(r=c[d++].exec(e))for(t=0;t<u.length;t++)s=r[++n],"object"==typeof(o=u[t])&&0<o.length?2==o.length?typeof o[1]==w?this[o[0]]=o[1].call(this,s):this[o[0]]=o[1]:3==o.length?typeof o[1]!=w||o[1].exec&&o[1].test?this[o[0]]=s?s.replace(o[1],o[2]):l:this[o[0]]=s?o[1].call(this,s,o[2]):l:4==o.length&&(this[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):l):this[o]=s||l;a+=2}},str:function(e,i){for(var n in i)if("object"==typeof i[n]&&0<i[n].length){for(var t=0;t<i[n].length;t++)if(m.has(i[n][t],e))return"?"===n?l:n}else if(m.has(i[n],e))return"?"===n?l:n;return e}},h={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},b={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[n,s],[/(opios)[\/\s]+([\w\.]+)/i],[[n,"Opera Mini"],s],[/\s(opr)\/([\w\.]+)/i],[[n,"Opera"],s],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],[n,s],[/(konqueror)\/([\w\.]+)/i],[[n,"Konqueror"],s],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[n,"IE"],s],[/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],[[n,"Edge"],s],[/(yabrowser)\/([\w\.]+)/i],[[n,"Yandex"],s],[/(Avast)\/([\w\.]+)/i],[[n,"Avast Secure Browser"],s],[/(AVG)\/([\w\.]+)/i],[[n,"AVG Secure Browser"],s],[/(puffin)\/([\w\.]+)/i],[[n,"Puffin"],s],[/(focus)\/([\w\.]+)/i],[[n,"Firefox Focus"],s],[/(opt)\/([\w\.]+)/i],[[n,"Opera Touch"],s],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[n,"UCBrowser"],s],[/(comodo_dragon)\/([\w\.]+)/i],[[n,/_/g," "],s],[/(windowswechat qbcore)\/([\w\.]+)/i],[[n,"WeChat(Win) Desktop"],s],[/(micromessenger)\/([\w\.]+)/i],[[n,"WeChat"],s],[/(brave)\/([\w\.]+)/i],[[n,"Brave"],s],[/(qqbrowserlite)\/([\w\.]+)/i],[n,s],[/(QQ)\/([\d\.]+)/i],[n,s],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[n,s],[/(baiduboxapp)[\/\s]?([\w\.]+)/i],[n,s],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[n,s],[/(MetaSr)[\/\s]?([\w\.]+)/i],[n],[/(LBBROWSER)/i],[n],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[s,[n,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[s,[n,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/android.+(line)\/([\w\.]+)\/iab/i],[n,s],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[s,[n,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[n,/(.+)/,"$1 WebView"],s],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[n,/(.+(?:g|us))(.+)/,"$1 $2"],s],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[s,[n,"Android Browser"]],[/(sailfishbrowser)\/([\w\.]+)/i],[[n,"Sailfish Browser"],s],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[n,s],[/(dolfin)\/([\w\.]+)/i],[[n,"Dolphin"],s],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[n,"360 Browser"]],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[n,"Chrome"],s],[/(coast)\/([\w\.]+)/i],[[n,"Opera Coast"],s],[/fxios\/([\w\.-]+)/i],[s,[n,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[s,[n,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[s,n],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[n,"GSA"],s],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[n,[s,g.str,h.browser.oldsafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[n,s],[/(navigator|netscape)\/([\w\.-]+)/i],[[n,"Netscape"],s],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[n,s]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[a,"amd64"]],[/(ia32(?=;))/i],[[a,m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[a,"ia32"]],[/windows\s(ce|mobile);\sppc;/i],[[a,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[a,/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[[a,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[[a,m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],[i,r,[t,d]],[/applecoremedia\/[\w\.]+ \((ipad)/],[i,[r,"Apple"],[t,d]],[/(apple\s{0,1}tv)/i],[[i,"Apple TV"],[r,"Apple"],[t,f]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[r,i,[t,d]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[i,[r,"Amazon"],[t,d]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[i,g.str,h.device.amazon.model],[r,"Amazon"],[t,u]],[/android.+aft([bms])\sbuild/i],[i,[r,"Amazon"],[t,f]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[i,r,[t,u]],[/\((ip[honed|\s\w*]+);/i],[i,[r,"Apple"],[t,u]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[r,i,[t,u]],[/\(bb10;\s(\w+)/i],[i,[r,"BlackBerry"],[t,u]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],[i,[r,"Asus"],[t,d]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[r,"Sony"],[i,"Xperia Tablet"],[t,d]],[/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[i,[r,"Sony"],[t,u]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[r,i,[t,c]],[/android.+;\s(shield)\sbuild/i],[i,[r,"Nvidia"],[t,c]],[/(playstation\s[34portablevi]+)/i],[i,[r,"Sony"],[t,c]],[/(sprint\s(\w+))/i],[[r,g.str,h.device.sprint.vendor],[i,g.str,h.device.sprint.model],[t,u]],[/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[r,[i,/_/g," "],[t,u]],[/(nexus\s9)/i],[i,[r,"HTC"],[t,d]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p|vog-l29|ane-lx1|eml-l29|ele-l29)/i],[i,[r,"Huawei"],[t,u]],[/android.+(bah2?-a?[lw]\d{2})/i],[i,[r,"Huawei"],[t,d]],[/(microsoft);\s(lumia[\s\w]+)/i],[r,i,[t,u]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[i,[r,"Microsoft"],[t,c]],[/(kin\.[onetw]{3})/i],[[i,/\./g," "],[r,"Microsoft"],[t,u]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[i,[r,"Motorola"],[t,u]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[i,[r,"Motorola"],[t,d]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[r,m.trim],[i,m.trim],[t,f]],[/hbbtv.+maple;(\d+)/i],[[i,/^/,"SmartTV"],[r,"Samsung"],[t,f]],[/\(dtv[\);].+(aquos)/i],[i,[r,"Sharp"],[t,f]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[r,"Samsung"],i,[t,d]],[/smart-tv.+(samsung)/i],[r,[t,f],i],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[r,"Samsung"],i,[t,u]],[/sie-(\w*)/i],[i,[r,"Siemens"],[t,u]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[r,"Nokia"],i,[t,u]],[/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[i,[r,"Acer"],[t,d]],[/android.+([vl]k\-?\d{3})\s+build/i],[i,[r,"LG"],[t,d]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[r,"LG"],i,[t,d]],[/(lg) netcast\.tv/i],[r,i,[t,f]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[i,[r,"LG"],[t,u]],[/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],[r,i,[t,d]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[i,[r,"Lenovo"],[t,d]],[/(lenovo)[_\s-]?([\w-]+)/i],[r,i,[t,u]],[/linux;.+((jolla));/i],[r,i,[t,u]],[/((pebble))app\/[\d\.]+\s/i],[r,i,[t,p]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[r,i,[t,u]],[/crkey/i],[[i,"Chromecast"],[r,"Google"],[t,f]],[/android.+;\s(glass)\s\d/i],[i,[r,"Google"],[t,p]],[/android.+;\s(pixel c)[\s)]/i],[i,[r,"Google"],[t,d]],[/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],[i,[r,"Google"],[t,u]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]?[\w\s]+))\s+build/i],[[i,/_/g," "],[r,"Xiaomi"],[t,u]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]?[\w\s]+))\s+build/i],[[i,/_/g," "],[r,"Xiaomi"],[t,d]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[i,[r,"Meizu"],[t,u]],[/(mz)-([\w-]{2,})/i],[[r,"Meizu"],i,[t,u]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})[\s)]/i],[i,[r,"OnePlus"],[t,u]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[i,[r,"RCA"],[t,d]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[i,[r,"Dell"],[t,d]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[i,[r,"Verizon"],[t,d]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[r,"Barnes & Noble"],i,[t,d]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[i,[r,"NuVision"],[t,d]],[/android.+;\s(k88)\sbuild/i],[i,[r,"ZTE"],[t,d]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[i,[r,"Swiss"],[t,u]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[i,[r,"Swiss"],[t,d]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[i,[r,"Zeki"],[t,d]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[r,"Dragon Touch"],i,[t,d]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[i,[r,"Insignia"],[t,d]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[i,[r,"NextBook"],[t,d]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[r,"Voice"],i,[t,u]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[r,"LvTel"],i,[t,u]],[/android.+;\s(PH-1)\s/i],[i,[r,"Essential"],[t,u]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[i,[r,"Envizen"],[t,d]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[r,i,[t,d]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[i,[r,"MachSpeed"],[t,d]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[r,i,[t,d]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[i,[r,"Rotor"],[t,d]],[/android.+(KS(.+))\s+build/i],[i,[r,"Amazon"],[t,d]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[r,i,[t,d]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[t,m.lowerize],r,i],[/[\s\/\(](smart-?tv)[;\)]/i],[[t,f]],[/(android[\w\.\s\-]{0,9});.+build/i],[i,[r,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[s,[n,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[s,[n,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[n,s],[/rv\:([\w\.]{1,9}).+(gecko)/i],[s,n]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[n,s],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[n,[s,g.str,h.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[n,"Windows"],[s,g.str,h.os.windows.version]],[/\((bb)(10);/i],[[n,"BlackBerry"],s],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],[n,s],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[n,"Symbian"],s],[/\((series40);/i],[n],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[n,"Firefox OS"],s],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[n,s],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[n,"Chromium OS"],s],[/(sunos)\s?([\w\.\d]*)/i],[[n,"Solaris"],s],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[n,s],[/(haiku)\s(\w+)/i],[n,s],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[s,/_/g,"."],[n,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[n,"Mac OS"],[s,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[n,s]]},v=function(e,i){if("object"==typeof e&&(i=e,e=l),!(this instanceof v))return new v(e,i).getResult();var n=e||(o&&o.navigator&&o.navigator.userAgent?o.navigator.userAgent:""),t=i?m.extend(b,i):b;return this.getBrowser=function(){var e={name:l,version:l};return g.rgx.call(e,n,t.browser),e.major=m.major(e.version),e},this.getCPU=function(){var e={architecture:l};return g.rgx.call(e,n,t.cpu),e},this.getDevice=function(){var e={vendor:l,model:l,type:l};return g.rgx.call(e,n,t.device),e},this.getEngine=function(){var e={name:l,version:l};return g.rgx.call(e,n,t.engine),e},this.getOS=function(){var e={name:l,version:l};return g.rgx.call(e,n,t.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this};v.VERSION="0.7.22",v.BROWSER={NAME:n,MAJOR:"major",VERSION:s},v.CPU={ARCHITECTURE:a},v.DEVICE={MODEL:i,VENDOR:r,TYPE:t,CONSOLE:c,MOBILE:u,SMARTTV:f,TABLET:d,WEARABLE:p,EMBEDDED:"embedded"},v.ENGINE={NAME:n,VERSION:s},v.OS={NAME:n,VERSION:s},typeof E!=e?(typeof T!=e&&T.exports&&(E=T.exports=v),E.UAParser=v):"function"==typeof x&&x.amd?x(function(){return v}):o&&(o.UAParser=v);var y,k=o&&(o.jQuery||o.Zepto);k&&!k.ua&&(y=new v,k.ua=y.getResult(),k.ua.get=function(){return y.getUA()},k.ua.set=function(e){y.setUA(e);var i,n=y.getResult();for(i in n)k.ua[i]=n[i]})}("object"==typeof window?window:this)},{}],3:[function(e,i,n){var r=e("./devTools");function t(e,i,n){var t=this;t.name=i,t.tid=n,t.cache={lastTime:Date.now(),timeout:null,taskTime:{}},t.system={dur:0,last_ec:"",last_ea:"",last_el:""},t.fields={},t.middlewares=[],t.done=e,r(i,"CREATE")}t.prototype={$deleteNull:function(i){"object"==typeof i&&Object.keys(i).forEach(function(e){null!==i[e]&&i[e]!==undefined&&""!==i[e]||delete i[e]})},set:function(){var e=arguments;2===e.length&&"string"==typeof e[0]&&""!==e[0]&&(this.fields[e[0]]=e[1]),1===e.length&&"object"==typeof e[0]&&Object.assign(this.fields,e[0]),r(this.name,"SET",this.fields)},send:function(e){var o=this;"object"!=typeof e&&(e={});var i,n=o.middlewares.reduce(function(e,i,n,t){return"object"==typeof e&&(e=Object.assign({},e),o.$deleteNull(e),i(e,n,t.length))},e);return"object"==typeof n&&(i=Date.now(),o.system.dur=i-o.cache.lastTime,o.cache.lastTime=i,clearTimeout(o.cache.timeout),o.cache.timeout=setTimeout(function(){54e4<i-window["XTrackerLastTime-"+o.tid]&&(o.send({t:"system",ec:"auto-log",is_system:1}),window["XTrackerLastTime-"+o.tid]=i)},6e5),Object.assign(n,o.system),o.$deleteNull(n),"event"===n.t&&(o.system.last_ec=n.ec,o.system.last_ea=n.ea,o.system.last_el=n.el),"task"===n.t&&n.taskc&&("p"===n.taskt?o.cache.taskTime[n.taskc]=Date.now():o.cache.taskTime[n.taskc]&&!n.tasktt&&(n.tasktt=Date.now()-o.cache.taskTime[n.taskc]))),r(o.name,"SEND",n),o.done(n)},use:function(e){"function"==typeof e&&this.middlewares.push(e)},getFields:function(){return this.fields}},i.exports=t},{"./devTools":5}],4:[function(e,i,n){var s=e("./getCommands"),a=e("./getFields"),c=e("./Tracker.js"),u=e("../language");i.exports=function(e){var o={},r=s(),t=a();return r.create=function(i,n){return"string"!=typeof n[0]||""===n[0]?u.ERROR_INVALID_TRACKING_ID:("string"==typeof n[1]&&""!==n[1]||(n[1]="default"),o[n[1]]?u.ERROR_INVALID_TRACKER_NAME(n[1]):(i=o[n[1]]=new c(e,n[1],n[0]),window["XTrackerLastTime-"+n[0]]||(window["XTrackerLastTime-"+n[0]]=0),i.use(function(e){return Object.assign({},window.XTrackerGlobalSet||{},e)}),i.use(function(e){return Object.assign({},i.getFields(),e)}),i.use(function(e){var n={};return location.search.substring(1).split("&").forEach(function(e){var i=e.split("=");/^xt-[A-Za-z0-9]+$/.test(i[0])&&(i[0]=i[0].replace("xt-",""),n[i[0]]=decodeURIComponent(i[1]))}),Object.assign({},n,e)}),i.use(function(e){return null!==e.uid&&e.uid!==undefined&&""!==e.uid?e:Object.assign({},e,{use_visitor_id:1})}),i.use(function(e){return Object.assign({},t,e)}),i.use(function(e){return Object.assign({},e,{tid:n[0],_g_encode:"utf-8"})}),void i.use(function(i){return i=Object.assign({},i,{cus_data:{}}),Object.keys(i).forEach(function(e){"cus_data"!==e&&(i[e]="function"==typeof i[e]?i[e]():i[e],/^c[0-9]+$/.test(e)&&(i.cus_data[e]=i[e],delete i[e]))}),i})))},function(){var e=arguments;if(1===e.length&&"function"==typeof e[0])return e[0]();if(0===e.length||"string"!=typeof e[0])return!1;var i=e[0],n="default";-1!==i.indexOf(".")&&(n=i.split(".")[0],i=i.split(".")[1]),n=o[n];var t="";"function"!=typeof r[i]&&(t=u.ERROR_INVALID_COMMAND(i)),-1!==["create","enable-attribute","enable-position"].indexOf(i)||n||(t=u.ERROR_INVALID_TRACKER(i)),(t=t||r[i](n,[].slice.call(e,1)))&&window.console}}},{"../language":9,"./Tracker.js":3,"./getCommands":6,"./getFields":7}],5:[function(e,i,n){i.exports="XTRACKER_DEV_TOOLS"!==window.name?function(){}:function(e,i,n){window.postMessage({type:"SITE",payload:{name:e,action:i,time:performance.now(),data:function(e){if("object"!=typeof e)return e;var i=Object.assign({},e);return Object.keys(i).forEach(function(e){"function"==typeof i[e]&&(i[e]="[Function]")}),i}(n)}},"*")}},{}],6:[function(e,i,n){var t=e("../language");function o(e){return"object"==typeof e||"function"==typeof e?"":e}function r(e,i){return"object"!=typeof e&&(e={}),Object.assign({},i,e)}i.exports=function(){var e={set:function(e,i){return e.set.apply(e,i)},send:function(e,i){return e.send(i[0])},use:function(e,i){if("function"!=typeof i[0])return t.ERROR_INVALID_MIDDLEWARE;e.use(i[0])},pageview:function(e,i){var n=r(i[i.length-1],{t:"pageview"});return e.send(n)},event:function(e,i){var n=r(i[i.length-1],{t:"event",ec:o(i[0]),ea:o(i[1]),el:o(i[2]),ev:o(i[3])});return e.send(n)},exception:function(e,i){var n=r(i[i.length-1],{t:"exception",exc:o(i[0]),exf:o(i[1])});return e.send(n)},timing:function(e,i){var n=r(i[i.length-1],{t:"timing",utc:o(i[0]),utv:o(i[1]),utl:o(i[2]),utt:o(i[3])});return e.send(n)},task:function(e,i){var n=r(i[i.length-1],{t:"task",taskc:o(i[0]),taskt:o(i[1])?"success"===o(i[1])?"s":o(i[1]):"p",tasktt:o(i[2])});return e.send(n)},"enable-attribute":function(){window.XTrackerPluginAttribute=1},"enable-position":function(){window.XTrackerPluginPosition=0}};return e}},{"../language":9}],7:[function(e,i,n){var r=e("js-cookie"),s=e("ua-parser-js"),a=e("../v.js");function c(e){for(var i="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=n.length,o=0;o<e;o++)i+=n.charAt(Math.floor(Math.random()*t));return Date.now()+"_"+i}function u(e){return e<0?"":e}i.exports=function(){var e=new s,i=document.referrer.replace(/^.*\/\/([^/?#]*).*$/,"$1"),n=r.get("XTrackerUser")?null:1,t=r.get("XTrackerSession")?null:1,o={v:a,ts:function(){return Math.floor(Date.now()/1e3)},ds:"web",ni:!0,x:function(){return window.XTrackerMouseX},y:function(){return window.XTrackerMouseY},sid:function(){var e=(e=r.get("XTrackerSession"))||c(16);return r.set("XTrackerSession",e,{expires:1/48}),e},uid:function(){var e=(e=r.get("XTrackerUser"))||c(16);return r.set("XTrackerUser",e,{expires:9999}),e},unick:r.get("_nk_")||r.get("_w_tb_nick")||r.get("lgc")||r.get("tracknick")||"",is_new_uid:n,is_new_sid:t,dr:document.referrer,drh:i,drm:""===document.referrer?"dir":location.host===i?"self":"ref",br:e.getBrowser().name,brv:e.getBrowser().version,os:e.getOS().name,osv:e.getOS().version,sr:screen.width+"x"+screen.height,vp:Math.max(document.documentElement.clientWidth,window.innerWidth||0)+"x"+Math.max(document.documentElement.clientHeight,window.innerHeight||0),de:(document.characterSet||document.charset||"").toLowerCase(),sd:screen.colorDepth,ul:(navigator.language||navigator.userLanguage||"").toLowerCase(),dl:function(){return location.href},dh:location.host,dp:location.pathname,search:location.search,dt:document.title};return window.performance&&Object.assign(o,{plt:function(){return u(performance.timing.loadEventEnd-performance.timing.navigationStart)},dns:function(){return u(performance.timing.domainLookupEnd-performance.timing.domainLookupStart)},pdt:function(){return u(performance.timing.responseEnd-performance.timing.responseStart)},rrt:function(){return u(performance.timing.redirectEnd-performance.timing.redirectStart)},tcp:function(){return u(performance.timing.connectEnd-performance.timing.connectStart)},srt:function(){return u(performance.timing.responseStart-performance.timing.requestStart)},dit:function(){return u(performance.timing.domInteractive-performance.timing.navigationStart)},clt:function(){return u(performance.timing.domContentLoadedEventEnd-performance.timing.navigationStart)}}),o}},{"../v.js":13,"js-cookie":1,"ua-parser-js":2}],8:[function(e,i,n){var o=e("./util/polyfill"),r=e("./util/DataQueue"),s=e("./language"),a=e("./core/XT"),c=e("./util/attachEvent");!function(){var i=window.XTrackerLoggerObject;if("string"==typeof i&&"function"==typeof window[i]){if(window.XTrackerLoaded)return;window.XTrackerLoaded=1,o();var e=window[i].q||[],n=new r;try{window[i]=a(function(e){return"object"!=typeof e?s.ERROR_INVALID_PACKAGE:void n.push(e)}),c(i)}catch(t){(new Image).src="//gm.mmstat.com/xtracker.9.1?msg="+t.toString()+"&t="+Date.now()}window[i].MW_LOG=function(e,i,n){return window.console,e},e.forEach(function(e){window[i].apply(null,e)})}}()},{"./core/XT":4,"./language":9,"./util/DataQueue":10,"./util/attachEvent":11,"./util/polyfill":12}],9:[function(e,i,n){i.exports={ERROR_INVALID_PACKAGE:"[XTracker] 埋点数据包不存在，可能由某个中间件中断，本次未发送。",ERROR_INVALID_MIDDLEWARE:"[XTracker] 中间件必须为一个函数。",ERROR_INVALID_COMMAND:function(e){return"[XTracker] 不存在 `"+e+"` 命令。"},ERROR_INVALID_TRACKER:function(e){return"[XTracker] 运行 `"+e+"` 命令时，请先指定有效的跟踪器，或创建默认跟踪器。"},ERROR_INVALID_TRACKING_ID:"[XTracker] 使用 `create` 命令时，必须传入 Tracking ID。",ERROR_INVALID_TRACKER_NAME:function(e){return"[XTracker] 名为 `"+e+"` 的跟踪器已存在，本次未创建。"}}},{}],10:[function(e,i,n){function t(e){var i,n,t="/xtracker.1.1",o="H46807174",r=function s(n,t){return 1===n.ut||2===t?Object.keys(n).filter(function(e){var i=n[e];return!("function"==typeof i||"object"==typeof i&&2===t||"object"==typeof i&&"cus_data"!==e&&"ext_data"!==e)}).map(function(e){var i=n[e];return"object"==typeof i&&(i=s(i,2)),e+(2===t?":":"=")+encodeURIComponent(i)}).join(2===t?"@@@":"&")+(2===t?"@@@":""):Object.keys(n).filter(function(e){return"function"!=typeof n[e]}).map(function(e){var i=n[e];return"object"==typeof i&&(i=JSON.stringify(i)),e+"="+encodeURIComponent(i)}).join("&")}(e,1);window.goldlog&&window.goldlog.record?window.goldlog.record(t,"OTHER",r,o):(i=new Image,n="_img_"+Math.random(),(window[n]=i).onload=i.onerror=function(){window[n]=null},i.src="//gm.mmstat.com"+t+"?cache="+Date.now()+"&chksum="+o+"&gmkey=OTHER&gokey="+encodeURIComponent(r),i=null)}function o(){this.delay=50,this.running=!1,this.Q=[]}o.prototype={push:function(e){this.Q.push(e),this.running||this.check()},check:function(){0===this.Q.length?this.running=!1:(this.running=!0,t(this.Q.shift()),setTimeout(this.check.bind(this),this.delay))}},i.exports=o},{}],11:[function(e,i,n){i.exports=function(s){var e=!!document.attachEvent,i=document[e?"attachEvent":"addEventListener"].bind(document),n="ontouchstart"in window;setTimeout(function(){window.XTrackerPluginAttribute,i((e?"on":"")+(n?"touchstart":"mousedown"),function(e){for(var i=(e=e||window.event).target||e.srcElement,n=null;i&&"HTML"!==i.tagName&&!(n=i.getAttribute?i.getAttribute("data-xt"):"");)i=i.parentNode;if(n)try{var t=(n=JSON.parse(n)).name||"default",o=n.data||{};window[s](t+".event",o)}catch(r){}}),window.XTrackerPluginPosition&&!n&&(window.XTrackerMouseX=null,window.XTrackerMouseY=null,i((e?"on":"")+"mousemove",function(e){window.XTrackerMouseX=e.pageX||e.offsetX,window.XTrackerMouseY=e.pageY||e.offsetY}))},0)}},{}],12:[function(e,i,n){i.exports=function(){Object.keys||(Object.keys=function(e){if(e!==Object(e))throw new TypeError("Object.keys called on a non-object");var i,n=[];for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.push(i);return n}),Array.prototype.map||(Array.prototype.map=function(e,i){var n,t,o;if(null==this)throw new TypeError(" this is null or not defined");var r,s,a=Object(this),c=a.length>>>0;if("[object Function]"!==Object.prototype.toString.call(e))throw new TypeError(e+" is not a function");for(i&&(n=i),t=new Array(c),o=0;o<c;){o in a&&(r=a[o],s=e.call(n,r,o,a),t[o]=s),o++}return t}),Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var i=Array.prototype.slice.call(arguments,1),n=this,t=function(){},o=function(){return n.apply(!(this instanceof t)&&e||this,i.concat(Array.prototype.slice.call(arguments)))};return t.prototype=this.prototype,o.prototype=new t,o}),"function"!=typeof Object.assign&&(Object.assign=function(e){if(null==e)throw new TypeError("Cannot convert undefined or null to object");e=Object(e);for(var i=1;i<arguments.length;i++){var n=arguments[i];if(null!=n)for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}),Array.prototype.reduce||(Array.prototype.reduce=function(e){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var i,n=Object(this),t=n.length>>>0,o=0;if(2<=arguments.length)i=arguments[1];else{for(;o<t&&!(o in n);)o++;if(t<=o)throw new TypeError("Reduce of empty array with no initial value");i=n[o++]}for(;o<t;o++)o in n&&(i=e(i,n[o],o,n));return i}),Array.prototype.filter||(Array.prototype.filter=function(e){if(this===undefined||null===this)throw new TypeError;var i=Object(this),n=i.length>>>0;if("function"!=typeof e)throw new TypeError;for(var t,o=[],r=2<=arguments.length?arguments[1]:undefined,s=0;s<n;s++){s in i&&(t=i[s],e.call(r,t,s,i)&&o.push(t))}return o}),Date.now||(Date.now=function(){return(new Date).getTime()}),Array.prototype.forEach||(Array.prototype.forEach=function(e,i){var n,t;if(null==this)throw new TypeError(" this is null or not defined");var o,r=Object(this),s=r.length>>>0;if("function"!=typeof e)throw new TypeError(e+" is not a function");for(1<arguments.length&&(n=i),t=0;t<s;){t in r&&(o=r[t],e.call(n,o,t,r)),t++}})}},{}],13:[function(e,i,n){i.exports="1.2.4"},{}]},{},[8])}();
//# sourceMappingURL=logger.min.js.map
