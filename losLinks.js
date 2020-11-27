// ==UserScript==
// @name        LosLinks
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      iohex
// @description 2020/11/27下午6:39:10
// ==/UserScript==

//在url中加入_los参数触发
let key_word = getQueryVariable("_los");
if (key_word)
{
  losLinks(key_word);
}

// 从参数中拿关键字
function getQueryVariable(target_var) {
  let _query = window.location.search.substring(1);
  let _vars = _query.split("&");
  for (let i=0; i<_vars.length; i++)
  {
    let _pair = _vars[i].split("=");
    if(_pair[0] = target_var)
      {
          return _pair[1];
      }
    else
      {
        return false;
      }
  }
}


function losLinks(key_word)
{
  console.log("=============> lose links ==========>");
  let _innerHtml = document.getElementsByTagName('a');
  for (let i=0; i<_innerHtml.length; i++)
  {
    let _link = _innerHtml[i].href;
    let _s = _link.indexOf(key_word);
    if (_s != -1)
    {
      console.log(_link);
    }
  }
}

