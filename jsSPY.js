 // ==UserScript==
// @name        jsSPY
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description detect JS file
// ==/UserScript==

_banner = "======================== js SPY ===========================";
console.log(_banner);

black_list = ["backbone.queryparams","purl.js","jquery.xLazyLoader","V4FIRE","jquery.query-object","jquery-deparam","mootools"]
var js_links = document.getElementsByTagName("script");

var re = /[\'\"]([^\'\"]*)[\'\"]?/i;


for (var i=0; i<js_links.length; i++)
{
  var _js = js_links[i].outerHTML.match(re)[0];
  
  var js_file = _js.split('/').pop().replace("\"","");
  
  for (var j=0; j<black_list.length; j++)
  {
    if (js_file.match(black_list[j]))
    {
      alert(js_file);
    }
  }
}

