// ==UserScript==
// @name        jsSPY
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      iohex
// @description detect JS file
// ==/UserScript==

_banner = "======================== js SPY ===========================";
console.log(_banner);

black_list = ["backbone.queryparams","purl","jquery.xlazyloader","v4fire","jquery.query-object","jquery-deparam","mootools","jquery.sparkle"]

var js_links = document.getElementsByTagName("script");



for (var i=0; i<js_links.length; i++)
{
  var _js = js_links[i].getAttribute("src");
  if (_js)
  {
    var js_file = _js.split('/').pop().replace("\"","");
  
    for (var j=0; j<black_list.length; j++)
    {
      js_file = js_file.toLowerCase();
      if (js_file.match(black_list[j]))
      {
        alert(js_file);
      }
    }
  }
}
