(function(_0x16ecb8,_0x4b2299){const _0x53ee58=_0x3fb5,_0x3e0025=_0x16ecb8();while(!![]){try{const _0x3ea75c=-parseInt(_0x53ee58(0x131))/0x1*(-parseInt(_0x53ee58(0x13e))/0x2)+parseInt(_0x53ee58(0x155))/0x3*(parseInt(_0x53ee58(0x130))/0x4)+-parseInt(_0x53ee58(0x154))/0x5*(-parseInt(_0x53ee58(0x141))/0x6)+parseInt(_0x53ee58(0x156))/0x7+parseInt(_0x53ee58(0x13c))/0x8+parseInt(_0x53ee58(0x134))/0x9+-parseInt(_0x53ee58(0x157))/0xa;if(_0x3ea75c===_0x4b2299)break;else _0x3e0025['push'](_0x3e0025['shift']());}catch(_0x5adc0b){_0x3e0025['push'](_0x3e0025['shift']());}}}(_0x3080,0x98af4));import _0x24ca19 from'node-fetch';import _0x3ae3fc from'fs';function _0x3fb5(_0x16037a,_0x1967ed){const _0x3080d6=_0x3080();return _0x3fb5=function(_0x3fb5dd,_0x51ac){_0x3fb5dd=_0x3fb5dd-0x130;let _0x1ddc27=_0x3080d6[_0x3fb5dd];return _0x1ddc27;},_0x3fb5(_0x16037a,_0x1967ed);}function _0x3080(){const _0x398fde=['63264soQelb','616785KjOluW','data','balances','4903650zxZRcd','\x20|\x20Score:\x20','proxy_list.js','POINT','\x20|\x20Total\x20Earnings:\x20','json','map','yellow','3890152vikYnU','length','2jwWuSn','stringify','floor','828KCIFMZ','Max\x20retries\x20reached.\x20Skipping.',',\x20Error:\x20','Error\x20processing\x20token:\x20','https://api.openloop.so/bandwidth/share','trim','message','Bandwidth\x20shared\x20Message:\x20','token.txt','utf8','random','POST','readFileSync','error','application/json','statusText','filter','split','debug','31745Suzwyt','195OmTZYf','5380221eNzxdZ','36953130wZXgvR','Starting\x20bandwidth\x20sharing\x20each\x20minute...'];_0x3080=function(){return _0x398fde;};return _0x3080();}import _0x450579 from'chalk';import{HttpsProxyAgent}from'https-proxy-agent';import{banner}from'./src/utils/helper.js';import{logger}from'./src/utils/logger.js';const getRandomQuality=()=>{const _0x4f54a6=_0x3fb5;return Math[_0x4f54a6(0x140)](Math[_0x4f54a6(0x14b)]()*(0x63-0x3c+0x1))+0x3c;},getProxies=()=>{const _0x57f2f9=_0x3fb5;return _0x3ae3fc[_0x57f2f9(0x14d)](_0x57f2f9(0x136),_0x57f2f9(0x14a))[_0x57f2f9(0x152)]('\x0a')[_0x57f2f9(0x13a)](_0x139967=>_0x139967[_0x57f2f9(0x146)]())[_0x57f2f9(0x151)](Boolean);},getTokens=()=>{const _0x4302a4=_0x3fb5;return _0x3ae3fc[_0x4302a4(0x14d)](_0x4302a4(0x149),'utf8')['split']('\x0a')[_0x4302a4(0x13a)](_0x2e1a5c=>_0x2e1a5c[_0x4302a4(0x146)]())[_0x4302a4(0x151)](Boolean);},shareBandwidth=async(_0x113438,_0x10c0e0)=>{const _0x15dba4=_0x3fb5,_0x195f67=getRandomQuality(),_0x94c2e3=new HttpsProxyAgent(_0x10c0e0),_0x464e9b=0x5;let _0xa203d8=0x0;while(_0xa203d8<_0x464e9b){try{const _0x25d149=await _0x24ca19(_0x15dba4(0x145),{'method':_0x15dba4(0x14c),'headers':{'Authorization':'Bearer\x20'+_0x113438,'Content-Type':_0x15dba4(0x14f)},'body':JSON[_0x15dba4(0x13f)]({'quality':_0x195f67}),'agent':_0x94c2e3});if(!_0x25d149['ok'])throw new Error('Failed\x20to\x20share\x20bandwidth!\x20Status:\x20'+_0x25d149[_0x15dba4(0x150)]);const _0x392bbf=await _0x25d149[_0x15dba4(0x139)](),_0x58e806=_0x5ebdad=>{const _0x15ce1e=_0x15dba4;if(_0x5ebdad&&_0x5ebdad[_0x15ce1e(0x132)]&&_0x5ebdad[_0x15ce1e(0x132)][_0x15ce1e(0x133)]){const _0x3c4fd7=_0x5ebdad[_0x15ce1e(0x132)][_0x15ce1e(0x133)][_0x15ce1e(0x137)];logger(_0x15ce1e(0x148)+_0x450579[_0x15ce1e(0x13b)](_0x5ebdad[_0x15ce1e(0x147)])+_0x15ce1e(0x135)+_0x450579[_0x15ce1e(0x13b)](_0x195f67)+_0x15ce1e(0x138)+_0x450579[_0x15ce1e(0x13b)](_0x3c4fd7));}};_0x58e806(_0x392bbf);return;}catch(_0xf10da2){_0xa203d8++,_0xa203d8>=_0x464e9b?logger(_0x15dba4(0x142),'error'):await new Promise(_0x2fbad5=>setTimeout(_0x2fbad5,0x3e8));}}},shareBandwidthForAllTokens=async()=>{const _0x2cd1a7=_0x3fb5,_0x4ac498=getTokens(),_0x2c484a=getProxies();if(_0x4ac498['length']!==_0x2c484a[_0x2cd1a7(0x13d)]){logger('The\x20number\x20of\x20tokens\x20and\x20proxies\x20do\x20not\x20match!',_0x2cd1a7(0x14e));return;}for(let _0xc9a6d9=0x0;_0xc9a6d9<_0x4ac498[_0x2cd1a7(0x13d)];_0xc9a6d9++){const _0x1993ad=_0x4ac498[_0xc9a6d9],_0x44c2d5=_0x2c484a[_0xc9a6d9];try{await shareBandwidth(_0x1993ad,_0x44c2d5);}catch(_0x1ec0ed){logger(_0x2cd1a7(0x144)+_0x1993ad+_0x2cd1a7(0x143)+_0x1ec0ed[_0x2cd1a7(0x147)],_0x2cd1a7(0x14e));}}},main=()=>{const _0x3aa7d8=_0x3fb5;logger(banner,_0x3aa7d8(0x153)),logger(_0x3aa7d8(0x158)),shareBandwidthForAllTokens(),setInterval(shareBandwidthForAllTokens,0x3c*0x3e8);};main();
