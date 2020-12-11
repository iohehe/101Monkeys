// ==UserScript==
// @name        openRedirect
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      iohex
// @description Open Redirect Bug
// ==/UserScript==

console.log("================> open Redirect");

var reflected_redirections = [
"url",
"rurl",
"u",
"next",
"link",
"lnk",
"go",
"target",
"dest",
"destination",
"redir",
"redurl",
"redirect_uri",
"redirect_url",
"redirect",
"r",
"view",
"loginto",
"image_url",
"return",
"returnTo",
"return_to",
"continue",
"return_path",
"path",
"call",
"callback",
];


var dom_redirections = [
"location",
"location.host",
"location.hostname",
"location.href",
"location.pathname",
"location.search",
"location.protocol",
"location.assign()",
"location.replace()",
"open()",
"domElem.srcdoc",
"jQuery.ajax()",
"$.ajax()",
"XMLHttpRequest.open()",
"XMLHttpRequest.send()"
];


var current_search = window.location.search.split('?')[1];
var _searchs = current_search.split("&");
for (var i=0; i<_searchs.length; i++)
{
  console.log("["+i+"]====> "+_searchs[i]);
  var _key = _searchs[i].split('=')[0];
  var _value = _searchs[i].split('=')[1];
  validReflected(_key.toLowerCase(), _value.toLowerCase());
}


function validReflected(_key, _value) {
        
  if (_value.match("http"))
  {
      alert(_key+":"+_value);
  }
  
  for (var i=0; i<reflected_redirections.length; i++)
    {      
      if (_key.match(reflected_redirections[i]))
        {
              //alert(_key);
              console.log(
                    '%c url here: '+_key,  // Console Message
                    'color: green' // CSS Style
                          );
        }
    }
}

console.log("end open Redirect <=========");
