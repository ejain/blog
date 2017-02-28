// ==UserScript==
// @name          Google Clear Button
// @namespace     http://eric.jain.name/2007/03/13/google-clear-button/
// @description   adds a clear button to Google search result pages
// @include       http://*.google.*/search?*
// ==/UserScript==

var target = document.getElementById('hf');
if (target) {
	var button = document.createElement('input');
	button.setAttribute('type', 'button');
	button.setAttribute('value', 'Clear');
	button.setAttribute('style', 'margin-left:0.25em');
	button.setAttribute('onclick', "var el=document.forms['gs'].q;el.value='';el.focus()");
	target.parentNode.insertBefore(button, target.nextSibling);
}
