// ==UserScript==
// @name        LosLinks
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      iohex
// @description target to javascript:you know
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

// 从href中拿关键信息
function losLinks(key_word) {
  console.log("=============> lose links ==========>");
  console.log("key_word: "+key_word);
  let _innerHtml = document.getElementsByTagName('a');
  for (let i=0; i<_innerHtml.length; i++)
  {
    let _link = _innerHtml[i].href;
    
    //_loc=1 输出所有link
    if (key_word == '1')
    {
      console.log(_link);
    }
    else
    {
      let _s = _link.indexOf(key_word);
      if (_s != -1)
      {
        console.log(_link);
      }
    }
  }
}
