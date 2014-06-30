!function(e,t){"use strict";function n(e,t,n){this.root=this.currentNode=e,this.nodeType=t,this.filter=n}function r(e,t){for(var n=e.length;n--;)if(!t(e[n]))return!1;return!0}function o(e,t,n){if(e.nodeName!==t)return!1;for(var r in n)if(e.getAttribute(r)!==n[r])return!1;return!0}function i(e,t){return e.nodeType===t.nodeType&&e.nodeName===t.nodeName&&e.className===t.className&&(!e.style&&!t.style||e.style.cssText===t.style.cssText)}function a(e){return e.nodeType===A&&!!rt[e.nodeName]}function s(e){return nt.test(e.nodeName)}function d(e){return e.nodeType===A&&!s(e)&&r(e.childNodes,s)}function l(e){return e.nodeType===A&&!s(e)&&!d(e)}function c(e){return d(e)?D:I}function f(e){var t=e.ownerDocument,r=new n(t.body,L,c,!1);return r.currentNode=e,r}function h(e){return f(e).previousNode()}function u(e){return f(e).nextNode()}function p(e,t,n){do if(o(e,t,n))return e;while(e=e.parentNode);return null}function m(e){var t,n,r,o,i=e.parentNode;return i&&e.nodeType===A?(t=m(i),t+=(t?">":"")+e.nodeName,(n=e.id)&&(t+="#"+n),(r=e.className.trim())&&(o=r.split(/\s\s*/),o.sort(),t+=".",t+=o.join("."))):t=i?m(i):"",t}function g(e){var t=e.nodeType;return t===A?e.childNodes.length:e.length||0}function v(e){var t=e.parentNode;return t&&t.removeChild(e),e}function N(e,t){var n=e.parentNode;n&&n.replaceChild(t,e)}function S(e){for(var t=e.ownerDocument.createDocumentFragment(),n=e.childNodes,r=n?n.length:0;r--;)t.appendChild(e.firstChild);return t}function C(e){var t,n,r=e.ownerDocument,o=e;if("BODY"===e.nodeName&&((n=e.firstChild)&&"BR"!==n.nodeName||(t=r.createElement("DIV"),n?e.replaceChild(t,n):e.appendChild(t),e=t,t=null)),s(e))e.firstChild||(Y?(t=r.createTextNode("​"),V.editor&&V.editor._didAddZWS()):t=r.createTextNode(""));else if($){for(;e.nodeType!==O&&!a(e);){if(n=e.firstChild,!n){t=r.createTextNode("");break}e=n}e.nodeType===O?/^ +$/.test(e.data)&&(e.data=""):a(e)&&e.parentNode.insertBefore(r.createTextNode(""),e)}else if(!e.querySelector("BR"))for(t=r.createElement("BR");(n=e.lastElementChild)&&!s(n);)e=n;return t&&e.appendChild(t),o}function _(e,t,n){var r,o,i,a=e.nodeType;if(a===O&&e!==n)return _(e.parentNode,e.splitText(t),n);if(a===A){if("number"==typeof t&&(t=t<e.childNodes.length?e.childNodes[t]:null),e===n)return t;for(r=e.parentNode,o=e.cloneNode(!1);t;)i=t.nextSibling,o.appendChild(t),t=i;return C(e),C(o),(i=e.nextSibling)?r.insertBefore(o,i):r.appendChild(o),_(r,o,n)}return t}function y(e,t){if(e.nodeType===A)for(var n,r,o,a=e.childNodes,d=a.length,l=[];d--;)if(n=a[d],r=d&&a[d-1],d&&s(n)&&i(n,r)&&!rt[n.nodeName])t.startContainer===n&&(t.startContainer=r,t.startOffset+=g(r)),t.endContainer===n&&(t.endContainer=r,t.endOffset+=g(r)),t.startContainer===e&&(t.startOffset>d?t.startOffset-=1:t.startOffset===d&&(t.startContainer=r,t.startOffset=g(r))),t.endContainer===e&&(t.endOffset>d?t.endOffset-=1:t.endOffset===d&&(t.endContainer=r,t.endOffset=g(r))),v(n),n.nodeType===O?r.appendData(n.data):l.push(S(n));else if(n.nodeType===A){for(o=l.length;o--;)n.appendChild(l.pop());y(n,t)}}function E(e,t,n){for(var r,o,i,a=t;1===a.parentNode.childNodes.length;)a=a.parentNode;v(a),o=e.childNodes.length,r=e.lastChild,r&&"BR"===r.nodeName&&(e.removeChild(r),o-=1),i={startContainer:e,startOffset:o,endContainer:e,endOffset:o},e.appendChild(S(t)),y(e,i),n.setStart(i.startContainer,i.startOffset),n.collapse(!0),Z&&(r=e.lastChild)&&"BR"===r.nodeName&&e.removeChild(r)}function T(e){var t,n,r=e.previousSibling,o=e.firstChild,a=e.ownerDocument,s="LI"===e.nodeName;if(!s||o&&/^[OU]L$/.test(o.nodeName))if(r&&i(r,e)){if(!l(r)){if(!s)return;n=a.createElement("DIV"),n.appendChild(S(r)),r.appendChild(n)}v(e),t=!l(e),r.appendChild(S(e)),t&&B(r),o&&T(o)}else s&&(r=a.createElement("DIV"),e.insertBefore(r,o),C(r))}function B(e){var t,n,r,o,i=e.childNodes,a=e.ownerDocument,d=null;for(t=0,n=i.length;n>t;t+=1)r=i[t],o="BR"===r.nodeName,!o&&s(r)?(d||(d=k(a,"DIV")),d.appendChild(r),t-=1,n-=1):(o||d)&&(d||(d=k(a,"DIV")),C(d),o?e.replaceChild(d,r):(e.insertBefore(d,r),t+=1,n+=1),d=null),l(r)&&B(r);return d&&e.appendChild(C(d)),e}function k(e,n,r,o){var i,a,s,d,l=e.createElement(n);if(r instanceof Array&&(o=r,r=null),r)for(i in r)a=r[i],a!==t&&l.setAttribute(i,r[i]);if(o)for(s=0,d=o.length;d>s;s+=1)l.appendChild(o[s]);return l}function b(e){var n=e.defaultView,r=e.body;this._win=n,this._doc=e,this._body=r,this._events={},this._sel=n.getSelection(),this._lastSelection=null,j&&this.addEventListener("beforedeactivate",this.getSelection),this._hasZWS=!1,this._lastAnchorNode=null,this._lastFocusNode=null,this._path="",this.addEventListener("keyup",this._updatePathOnEvent),this.addEventListener("mouseup",this._updatePathOnEvent),n.addEventListener("focus",this,!1),n.addEventListener("blur",this,!1),this._undoIndex=-1,this._undoStack=[],this._undoStackLength=0,this._isInUndoState=!1,this.defaultBlockProperties=t,this.addEventListener("keyup",this._docWasChanged),this._awaitingPaste=!1,this.addEventListener(z?"beforecut":"cut",this._onCut),this.addEventListener(z?"beforepaste":"paste",this._onPaste),q&&this.addEventListener("keyup",this._ieSelAllClean),this.addEventListener(Z?"keypress":"keydown",this._onKey),X&&(n.Text.prototype.splitText=function(e){var t=this.ownerDocument.createTextNode(this.data.slice(e)),n=this.nextSibling,r=this.parentNode,o=this.length-e;return n?r.insertBefore(t,n):r.appendChild(t),o&&this.deleteData(e,o),t}),r.setAttribute("contenteditable","true"),this.setHTML("");try{e.execCommand("enableObjectResizing",!1,"false"),e.execCommand("enableInlineTableEditing",!1,"false")}catch(o){}}var R=2,A=1,O=3,L=1,x=4,D=1,I=3,P=0,U=1,w=2,F=3,V=e.defaultView,H=navigator.userAgent,M=/iP(?:ad|hone|od)/.test(H),W=/Mac OS X/.test(H),K=/Gecko\//.test(H),z=/Trident\/[456]\./.test(H),q=8===V.ie,Z=!!V.opera,Q=/WebKit\//.test(H),G=W?"meta-":"ctrl-",$=z||Z,Y=z||Q,j=z,X=function(){var t=e.createElement("DIV"),n=e.createTextNode("12");return t.appendChild(n),n.splitText(2),2!==t.childNodes.length}(),J=/[^ \t\r\n]/,et=Array.prototype.indexOf,tt={1:1,2:2,3:4,8:128,9:256,11:1024};n.prototype.nextNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){for(e=t.firstChild;!e&&t&&t!==n;)e=t.nextSibling,e||(t=t.parentNode);if(!e)return null;if(tt[e.nodeType]&r&&o(e)===D)return this.currentNode=e,e;t=e}},n.prototype.previousNode=function(){for(var e,t=this.currentNode,n=this.root,r=this.nodeType,o=this.filter;;){if(t===n)return null;if(e=t.previousSibling)for(;t=e.lastChild;)e=t;else e=t.parentNode;if(!e)return null;if(tt[e.nodeType]&r&&o(e)===D)return this.currentNode=e,e;t=e}};var nt=/^(?:#text|A(?:BBR|CRONYM)?|B(?:R|D[IO])?|C(?:ITE|ODE)|D(?:ATA|FN|EL)|EM|FONT|HR|I(?:NPUT|MG|NS)?|KBD|Q|R(?:P|T|UBY)|S(?:U[BP]|PAN|TR(?:IKE|ONG)|MALL|AMP)?|U|VAR|WBR)$/,rt={BR:1,IMG:1,INPUT:1},ot=function(e,t){for(var n=e.childNodes;t&&e.nodeType===A;)e=n[t-1],n=e.childNodes,t=n.length;return e},it=function(e,t){if(e.nodeType===A){var n=e.childNodes;if(t<n.length)e=n[t];else{for(;e&&!e.nextSibling;)e=e.parentNode;e&&(e=e.nextSibling)}}return e},at=function(e,t){e=e.cloneRange(),ut(e);for(var r=e.startContainer,o=e.endContainer,i=e.commonAncestorContainer,a=new n(i,x,function(){return D},!1),s=a.currentNode=r;!t(s,e)&&s!==o&&(s=a.nextNode()););},st=function(e){var t="";return at(e,function(e,n){var r=e.data;r&&/\S/.test(r)&&(e===n.endContainer&&(r=r.slice(0,n.endOffset)),e===n.startContainer&&(r=r.slice(n.startOffset)),t+=r)}),t},dt=function(e,t){var n,r,o,i,a=e.startContainer,s=e.startOffset,d=e.endContainer,l=e.endOffset;a.nodeType===O?(n=a.parentNode,r=n.childNodes,s===a.length?(s=et.call(r,a)+1,e.collapsed&&(d=n,l=s)):(s&&(i=a.splitText(s),d===a?(l-=s,d=i):d===n&&(l+=1),a=i),s=et.call(r,a)),a=n):r=a.childNodes,o=r.length,s===o?a.appendChild(t):a.insertBefore(t,r[s]),a===d&&(l+=r.length-o),e.setStart(a,s),e.setEnd(d,l)},lt=function(e,t){var n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;t||(t=e.commonAncestorContainer),t.nodeType===O&&(t=t.parentNode);for(var a,s=_(o,i,t),d=_(n,r,t),l=t.ownerDocument.createDocumentFragment();d!==s;)a=d.nextSibling,l.appendChild(d),d=a;return e.setStart(t,s?et.call(t.childNodes,s):t.childNodes.length),e.collapse(!0),C(t),l},ct=function(e){pt(e),lt(e);var t=mt(e),n=gt(e);t&&n&&t!==n&&E(t,n,e),t&&C(t);var r=e.endContainer.ownerDocument.body,o=r.firstChild;o&&"BR"!==o.nodeName||(C(r),e.selectNodeContents(r.firstChild));var i=e.collapsed;ut(e),i&&e.collapse(!0)},ft=function(e,t){for(var n=!0,r=t.childNodes,o=r.length;o--;)if(!s(r[o])){n=!1;break}if(e.collapsed||ct(e),ut(e),n)dt(e,t),e.collapse(!1);else{for(var i,a,d=_(e.startContainer,e.startOffset,e.startContainer.ownerDocument.body),l=d.previousSibling,c=l,f=c.childNodes.length,h=d,p=0,m=d.parentNode;(i=c.lastChild)&&i.nodeType===A&&"BR"!==i.nodeName;)c=i,f=c.childNodes.length;for(;(i=h.firstChild)&&i.nodeType===A&&"BR"!==i.nodeName;)h=i;for(;(i=t.firstChild)&&s(i);)c.appendChild(i);for(;(i=t.lastChild)&&s(i);)h.insertBefore(i,h.firstChild),p+=1;for(a=t;a=u(a);)C(a);m.insertBefore(t,d),a=d.previousSibling,d.textContent?T(d):m.removeChild(d),d.parentNode||(h=a,p=g(h)),l.textContent?T(l):(c=l.nextSibling,f=0,m.removeChild(l)),e.setStart(c,f),e.setEnd(h,p),ut(e)}},ht=function(e,t,n){var r=t.ownerDocument.createRange();if(r.selectNode(t),n){var o=e.compareBoundaryPoints(F,r)>-1,i=e.compareBoundaryPoints(U,r)<1;return!o&&!i}var a=e.compareBoundaryPoints(P,r)<1,s=e.compareBoundaryPoints(w,r)>-1;return a&&s},ut=function(e){for(var t,n=e.startContainer,r=e.startOffset,o=e.endContainer,i=e.endOffset;n.nodeType!==O&&(t=n.childNodes[r],t&&!a(t));)n=t,r=0;if(i)for(;o.nodeType!==O&&(t=o.childNodes[i-1],t&&!a(t));)o=t,i=g(o);else for(;o.nodeType!==O&&(t=o.firstChild,t&&!a(t));)o=t;e.collapsed?(e.setStart(o,i),e.setEnd(n,r)):(e.setStart(n,r),e.setEnd(o,i))},pt=function(e,t){var n,r=e.startContainer,o=e.startOffset,i=e.endContainer,a=e.endOffset;for(t||(t=e.commonAncestorContainer);r!==t&&!o;)n=r.parentNode,o=et.call(n.childNodes,r),r=n;for(;i!==t&&a===g(i);)n=i.parentNode,a=et.call(n.childNodes,i)+1,i=n;e.setStart(r,o),e.setEnd(i,a)},mt=function(e){var t,n=e.startContainer;return s(n)?t=h(n):d(n)?t=n:(t=ot(n,e.startOffset),t=u(t)),t&&ht(e,t,!0)?t:null},gt=function(e){var t,n,r=e.endContainer;if(s(r))t=h(r);else if(d(r))t=r;else{if(t=it(r,e.endOffset),!t)for(t=r.ownerDocument.body;n=t.lastChild;)t=n;t=h(t)}return t&&ht(e,t,!0)?t:null},vt=function(e){for(var t,n,r=e.startContainer,o=e.startOffset;s(r);){if(o)return!1;t=r.parentNode,o=et.call(t.childNodes,r),r=t}for(;o&&(n=r.childNodes[o-1])&&(""===n.data||"BR"===n.nodeName);)o-=1;return!o},Nt=function(e){for(var t,n,r=e.endContainer,o=e.endOffset,i=g(r);s(r);){if(o!==i)return!1;t=r.parentNode,o=et.call(t.childNodes,r)+1,r=t,i=r.childNodes.length}for(;i>o&&(n=r.childNodes[o])&&(""===n.data||"BR"===n.nodeName);)o+=1;return o===i},St=function(e){var t,n=mt(e),r=gt(e);n&&r&&(t=n.parentNode,e.setStart(t,et.call(t.childNodes,n)),t=r.parentNode,e.setEnd(t,et.call(t.childNodes,r)+1))},Ct=b.prototype;Ct.createElement=function(e,t,n){return k(this._doc,e,t,n)},Ct.createDefaultBlock=function(e){return C(this.createElement("DIV",this.defaultBlockProperties,e))},Ct.didError=function(e){console.log(e)},Ct.getDocument=function(){return this._doc};var _t={focus:1,blur:1,pathChange:1,select:1,input:1,undoStateChange:1};Ct.fireEvent=function(e,t){var n,r,o,i=this._events[e];if(i)for(t||(t={}),t.type!==e&&(t.type=e),i=i.slice(),n=0,r=i.length;r>n;n+=1){o=i[n];try{o.handleEvent?o.handleEvent(t):o.call(this,t)}catch(a){a.details="Squire: fireEvent error. Event type: "+e,this.didError(a)}}return this},Ct.handleEvent=function(e){this.fireEvent(e.type,e)},Ct.addEventListener=function(e,t){var n=this._events[e];return t?(n||(n=this._events[e]=[],_t[e]||this._doc.addEventListener(e,this,!1)),n.push(t),this):(this.didError({name:"Squire: addEventListener with null or undefined fn",message:"Event type: "+e}),this)},Ct.removeEventListener=function(e,t){var n,r=this._events[e];if(r){for(n=r.length;n--;)r[n]===t&&r.splice(n,1);r.length||(delete this._events[e],_t[e]||this._doc.removeEventListener(e,this,!1))}return this},Ct._createRange=function(e,t,n,r){if(e instanceof this._win.Range)return e.cloneRange();var o=this._doc.createRange();return o.setStart(e,t),n?o.setEnd(n,r):o.setEnd(e,t),o},Ct.setSelection=function(e){if(e){M&&this._win.focus();var t=this._sel;t.removeAllRanges(),t.addRange(e)}return this},Ct.getSelection=function(){var e,t,n,r=this._sel;if(r.rangeCount){e=r.getRangeAt(0).cloneRange(),t=e.startContainer,n=e.endContainer;try{t&&a(t)&&e.setStartBefore(t),n&&a(n)&&e.setEndBefore(n)}catch(o){this.didError({name:"Squire#getSelection error",message:"Starts: "+t.nodeName+"\nEnds: "+n.nodeName})}this._lastSelection=e}else e=this._lastSelection;return e||(e=this._createRange(this._body.firstChild,0)),e},Ct.getSelectedText=function(){return st(this.getSelection())},Ct.getPath=function(){return this._path},Ct._didAddZWS=function(){this._hasZWS=!0},Ct._removeZWS=function(){if(this._hasZWS){for(var e,t,r=new n(this._body,x,function(){return D},!1);e=r.nextNode();)for(;(t=e.data.indexOf("​"))>-1;)e.deleteData(t,1);this._hasZWS=!1}},Ct._updatePath=function(e,t){var n,r=e.startContainer,o=e.endContainer;(t||r!==this._lastAnchorNode||o!==this._lastFocusNode)&&(this._lastAnchorNode=r,this._lastFocusNode=o,n=r&&o?r===o?m(o):"(selection)":"",this._path!==n&&(this._path=n,this.fireEvent("pathChange",{path:n}))),r!==o&&this.fireEvent("select")},Ct._updatePathOnEvent=function(){this._updatePath(this.getSelection())},Ct.focus=function(){return K&&this._body.focus(),this._win.focus(),this},Ct.blur=function(){return K&&this._body.blur(),top.focus(),this};var yt="squire-selection-start",Et="squire-selection-end";Ct._saveRangeToBookmark=function(e){var t,n=this.createElement("INPUT",{id:yt,type:"hidden"}),r=this.createElement("INPUT",{id:Et,type:"hidden"});dt(e,n),e.collapse(!1),dt(e,r),n.compareDocumentPosition(r)&R&&(n.id=Et,r.id=yt,t=n,n=r,r=t),e.setStartAfter(n),e.setEndBefore(r)},Ct._getRangeAndRemoveBookmark=function(e){var t=this._doc,n=t.getElementById(yt),r=t.getElementById(Et);if(n&&r){var o,i=n.parentNode,a=r.parentNode,s={startContainer:i,endContainer:a,startOffset:et.call(i.childNodes,n),endOffset:et.call(a.childNodes,r)};i===a&&(s.endOffset-=1),v(n),v(r),y(i,s),i!==a&&y(a,s),e||(e=t.createRange()),e.setStart(s.startContainer,s.startOffset),e.setEnd(s.endContainer,s.endOffset),o=e.collapsed,ut(e),o&&e.collapse(!0)}return e||null},Ct._docWasChanged=function(e){var t=e&&e.keyCode;(!e||!e.ctrlKey&&!e.metaKey&&!e.altKey&&(16>t||t>20)&&(33>t||t>45))&&(this._isInUndoState&&(this._isInUndoState=!1,this.fireEvent("undoStateChange",{canUndo:!0,canRedo:!1})),this.fireEvent("input"))},Ct._recordUndoState=function(e){if(!this._isInUndoState){var t=this._undoIndex+=1,n=this._undoStack;t<this._undoStackLength&&(n.length=this._undoStackLength=t),e&&this._saveRangeToBookmark(e),n[t]=this._getHTML(),this._undoStackLength+=1,this._isInUndoState=!0}},Ct.undo=function(){if(0!==this._undoIndex||!this._isInUndoState){this._recordUndoState(this.getSelection()),this._undoIndex-=1,this._setHTML(this._undoStack[this._undoIndex]);var e=this._getRangeAndRemoveBookmark();e&&this.setSelection(e),this._isInUndoState=!0,this.fireEvent("undoStateChange",{canUndo:0!==this._undoIndex,canRedo:!0}),this.fireEvent("input")}return this},Ct.redo=function(){var e=this._undoIndex,t=this._undoStackLength;if(t>e+1&&this._isInUndoState){this._undoIndex+=1,this._setHTML(this._undoStack[this._undoIndex]);var n=this._getRangeAndRemoveBookmark();n&&this.setSelection(n),this.fireEvent("undoStateChange",{canUndo:!0,canRedo:t>e+2}),this.fireEvent("input")}return this},Ct.hasFormat=function(e,t,r){if(e=e.toUpperCase(),t||(t={}),!r&&!(r=this.getSelection()))return!1;var o,i,a=r.commonAncestorContainer;if(p(a,e,t))return!0;if(a.nodeType===O)return!1;o=new n(a,x,function(e){return ht(r,e,!0)?D:I},!1);for(var s=!1;i=o.nextNode();){if(!p(i,e,t))return!1;s=!0}return s},Ct._addFormat=function(e,t,r){var o,i,a,s,d,l,c,f;if(r.collapsed)o=C(this.createElement(e,t)),dt(r,o),r.setStart(o.firstChild,o.firstChild.length),r.collapse(!0);else{i=new n(r.commonAncestorContainer,x,function(e){return ht(r,e,!0)?D:I},!1),d=0,l=0,c=i.currentNode=r.startContainer,c.nodeType!==O&&(c=i.nextNode());do f=!p(c,e,t),c===r.endContainer&&(f&&c.length>r.endOffset?c.splitText(r.endOffset):l=r.endOffset),c===r.startContainer&&(f&&r.startOffset?c=c.splitText(r.startOffset):d=r.startOffset),f&&(o=this.createElement(e,t),N(c,o),o.appendChild(c),l=c.length),s=c,a||(a=s);while(c=i.nextNode());r=this._createRange(a,d,s,l)}return r},Ct._removeFormat=function(e,t,n,r){this._saveRangeToBookmark(n);var i,a=this._doc;n.collapsed&&(Y?(i=a.createTextNode("​"),this._didAddZWS()):i=a.createTextNode(""),dt(n,i));for(var d=n.commonAncestorContainer;s(d);)d=d.parentNode;var l=n.startContainer,c=n.startOffset,f=n.endContainer,h=n.endOffset,u=[],p=function(e,t){if(!ht(n,e,!1)){var r,o,i=e.nodeType===O;if(!ht(n,e,!0))return"INPUT"===e.nodeName||i&&!e.data||u.push([t,e]),void 0;if(i)e===f&&h!==e.length&&u.push([t,e.splitText(h)]),e===l&&c&&(e.splitText(c),u.push([t,e]));else for(r=e.firstChild;r;r=o)o=r.nextSibling,p(r,t)}},m=Array.prototype.filter.call(d.getElementsByTagName(e),function(r){return ht(n,r,!0)&&o(r,e,t)});r||m.forEach(function(e){p(e,e)}),u.forEach(function(e){var t=e[0].cloneNode(!1),n=e[1];N(n,t),t.appendChild(n)}),m.forEach(function(e){N(e,S(e))}),this._getRangeAndRemoveBookmark(n),i&&n.collapse(!1);var g={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset};return y(d,g),n.setStart(g.startContainer,g.startOffset),n.setEnd(g.endContainer,g.endOffset),n},Ct.changeFormat=function(e,t,n,r){return n||(n=this.getSelection())?(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n),t&&(n=this._removeFormat(t.tag.toUpperCase(),t.attributes||{},n,r)),e&&(n=this._addFormat(e.tag.toUpperCase(),e.attributes||{},n)),this.setSelection(n),this._updatePath(n,!0),this._docWasChanged(),this):void 0};var Tt={DIV:"DIV",PRE:"DIV",H1:"DIV",H2:"DIV",H3:"DIV",H4:"DIV",H5:"DIV",H6:"DIV",P:"DIV",DT:"DD",DD:"DT",LI:"LI"},Bt=function(e,t,n){var r=Tt[e.nodeName],o=_(t,n,e.parentNode);return o.nodeName!==r&&(e=k(o.ownerDocument,r),e.className="rtl"===o.dir?"dir-rtl":"",e.dir=o.dir,N(o,e),e.appendChild(S(o)),o=e),o};Ct.forEachBlock=function(e,t,n){if(!n&&!(n=this.getSelection()))return this;t&&(this._recordUndoState(n),this._getRangeAndRemoveBookmark(n));var r=mt(n),o=gt(n);if(r&&o)do if(e(r)||r===o)break;while(r=u(r));return t&&(this.setSelection(n),this._updatePath(n,!0),this._docWasChanged()),this},Ct.modifyBlocks=function(e,t){if(!t&&!(t=this.getSelection()))return this;this._isInUndoState?this._saveRangeToBookmark(t):this._recordUndoState(t),St(t);var n,r=this._body;return pt(t,r),n=lt(t,r),dt(t,e.call(this,n)),t.endOffset<t.endContainer.childNodes.length&&T(t.endContainer.childNodes[t.endOffset]),T(t.startContainer.childNodes[t.startOffset]),this._getRangeAndRemoveBookmark(t),this.setSelection(t),this._updatePath(t,!0),this._docWasChanged(),this};var kt=function(e){return this.createElement("BLOCKQUOTE",[e])},bt=function(e){var t=e.querySelectorAll("blockquote");return Array.prototype.filter.call(t,function(e){return!p(e.parentNode,"BLOCKQUOTE")}).forEach(function(e){N(e,S(e))}),e},Rt=function(){return this.createDefaultBlock([this.createElement("INPUT",{id:yt,type:"hidden"}),this.createElement("INPUT",{id:Et,type:"hidden"})])},At=function(e,n,r){for(var o,i,a,s,d=f(n);o=d.nextNode();)i=o.parentNode.nodeName,"LI"!==i?(s=e.createElement("LI",{"class":"rtl"===o.dir?"dir-rtl":t,dir:o.dir||t}),(a=o.previousSibling)&&a.nodeName===r?a.appendChild(s):N(o,e.createElement(r,[s])),s.appendChild(o)):(o=o.parentNode.parentNode,i=o.nodeName,i!==r&&/^[OU]L$/.test(i)&&N(o,e.createElement(r,[S(o)])))},Ot=function(e){return At(this,e,"UL"),e},Lt=function(e){return At(this,e,"OL"),e},xt=function(e){var t,n,r,o,i,a,s,d=e.querySelectorAll("UL, OL");for(t=0,n=d.length;n>t;t+=1){for(o=d[t],i=S(o),a=i.childNodes,r=a.length;r--;)s=a[r],N(s,S(s));B(i),N(o,i)}return e},Dt=function(e){var t,n,r,o,i,a=e.querySelectorAll("LI");for(t=0,n=a.length;n>t;t+=1)r=a[t],l(r.firstChild)||(o=r.parentNode.nodeName,i=r.previousSibling,i&&(i=i.lastChild)&&i.nodeName===o||N(r,this.createElement("LI",[i=this.createElement(o)])),i.appendChild(r));return e},It=function(e){var t=e.querySelectorAll("LI");return Array.prototype.filter.call(t,function(e){return!l(e.firstChild)}).forEach(function(t){var n,r=t.parentNode,o=r.parentNode,i=t.firstChild,a=i;for(t.previousSibling&&(r=_(r,t,o));a&&(n=a.nextSibling,!l(a));)o.insertBefore(a,r),a=n;for("LI"===o.nodeName&&i.previousSibling&&_(o,i,o.parentNode);t!==e&&!t.childNodes.length;)r=t.parentNode,r.removeChild(t),t=r},this),B(e),e},Pt=/\b((?:(?:ht|f)tps?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\([^\s()<>]+\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])|(?:[\w\-.%+]+@(?:[\w\-]+\.)+[A-Z]{2,4}))/i,Ut=function(e){for(var t,r,o,i,a,s,d,l=e.ownerDocument,c=new n(e,x,function(e){return p(e,"A")?I:D},!1);t=c.nextNode();)if(r=t.data.split(Pt),i=r.length,i>1){for(s=t.parentNode,d=t.nextSibling,o=0;i>o;o+=1)a=r[o],o?(o%2?(t=l.createElement("A"),t.textContent=a,t.href=/@/.test(a)?"mailto:"+a:/^(?:ht|f)tps?:/.test(a)?a:"http://"+a):t=l.createTextNode(a),d?s.insertBefore(t,d):s.appendChild(t)):t.data=a;c.currentNode=t}},wt=/^(?:A(?:DDRESS|RTICLE|SIDE)|BLOCKQUOTE|CAPTION|D(?:[DLT]|IV)|F(?:IGURE|OOTER)|H[1-6]|HEADER|L(?:ABEL|EGEND|I)|O(?:L|UTPUT)|P(?:RE)?|SECTION|T(?:ABLE|BODY|D|FOOT|H|HEAD|R)|UL)$/,Ft={1:10,2:13,3:16,4:18,5:24,6:32,7:48},Vt={backgroundColor:{regexp:J,replace:function(e,t){return k(e,"SPAN",{"class":"highlight",style:"background-color: "+t})}},color:{regexp:J,replace:function(e,t){return k(e,"SPAN",{"class":"colour",style:"color:"+t})}},fontWeight:{regexp:/^bold/i,replace:function(e){return k(e,"B")}},fontStyle:{regexp:/^italic/i,replace:function(e){return k(e,"I")}},fontFamily:{regexp:J,replace:function(e,t){return k(e,"SPAN",{"class":"font",style:"font-family:"+t})}},fontSize:{regexp:J,replace:function(e,t){return k(e,"SPAN",{"class":"size",style:"font-size:"+t})}}},Ht=function(e){return function(t,n){var r=k(t.ownerDocument,e);return n.replaceChild(r,t),r.appendChild(S(t)),r}},Mt={SPAN:function(e,t){var n,r,o,i,a,s,d=e.style,l=e.ownerDocument;for(n in Vt)r=Vt[n],o=d[n],o&&r.regexp.test(o)&&(s=r.replace(l,o),i&&i.appendChild(s),i=s,a||(a=s));return a&&(i.appendChild(S(e)),t.replaceChild(a,e)),i||e},STRONG:Ht("B"),EM:Ht("I"),STRIKE:Ht("S"),FONT:function(e,t){var n,r,o,i,a,s=e.face,d=e.size,l=e.color,c=e.ownerDocument;return s&&(n=k(c,"SPAN",{"class":"font",style:"font-family:"+s}),a=n,i=n),d&&(r=k(c,"SPAN",{"class":"size",style:"font-size:"+Ft[d]+"px"}),a||(a=r),i&&i.appendChild(r),i=r),l&&/^#?([\dA-F]{3}){1,2}$/i.test(l)&&("#"!==l.charAt(0)&&(l="#"+l),o=k(c,"SPAN",{"class":"colour",style:"color:"+l}),a||(a=o),i&&i.appendChild(o),i=o),a||(a=i=k(c,"SPAN")),t.replaceChild(a,e),i.appendChild(S(e)),i},TT:function(e,t){var n=k(e.ownerDocument,"SPAN",{"class":"font",style:'font-family:menlo,consolas,"courier new",monospace'});return t.replaceChild(n,e),n.appendChild(S(e)),n}},Wt=function(e){for(var t,n=e.childNodes,r=n.length;r--;)t=n[r],t.nodeType===A&&"IMG"!==t.nodeName&&(Wt(t),s(t)&&!t.firstChild&&e.removeChild(t))},Kt=function(e,t){var n,r,o,i,a,d,l,c,f,h,u=e.childNodes;for(n=0,r=u.length;r>n;n+=1)if(o=u[n],i=o.nodeName,a=o.nodeType,d=Mt[i],a===A){if(l=o.childNodes.length,d)o=d(o,e);else{if(!wt.test(i)&&!s(o)){n-=1,r+=l-1,e.replaceChild(S(o),o);continue}!t&&o.style.cssText&&o.removeAttribute("style")}l&&Kt(o,t)}else{if(a===O&&(c=o.data,/\S/.test(c))){if(s(e))continue;if(f=0,h=c.length,!n||!s(u[n-1])){for(;h>f&&!J.test(c.charAt(f));)f+=1;f&&(o.data=c=c.slice(f),h-=f)}if(n+1===r||!s(u[n+1])){for(f=h;f>0&&!J.test(c.charAt(f-1));)f-=1;h>f&&(o.data=c.slice(0,f))}continue}e.removeChild(o),n-=1,r-=1}return e},zt=function(e){return(e.nodeType===A?"BR"===e.nodeName:J.test(e.data))?D:I},qt=function(e){for(var t,r=e.parentNode;s(r);)r=r.parentNode;return t=new n(r,L|x,zt),t.currentNode=e,!!t.nextNode()},Zt=function(e){var t,n,r,o=e.querySelectorAll("BR"),i=[],a=o.length;for(t=0;a>t;t+=1)i[t]=qt(o[t]);for(;a--;)if(n=o[a],r=n.parentNode){for(;s(r);)r=r.parentNode;d(r)&&Tt[r.nodeName]?(i[a]&&Bt(r,n.parentNode,n),v(n)):B(r)}};Ct._ensureBottomLine=function(){var e=this._body,t=e.lastChild;t&&"DIV"===t.nodeName&&d(t)||e.appendChild(this.createDefaultBlock())},Ct._onCut=function(){var e=this.getSelection(),t=this;this._recordUndoState(e),this._getRangeAndRemoveBookmark(e),this.setSelection(e),setTimeout(function(){try{t._ensureBottomLine()}catch(e){t.didError(e)}},0)},Ct._onPaste=function(e){if(!this._awaitingPaste){var t,n,r=e.clipboardData,o=r&&r.items,i=!1,a=!1;if(o){for(t=o.length;t--;){if(n=o[t].type,"text/html"===n){a=!1;break}/^image\/.*/.test(n)&&(a=!0)}if(a)return e.preventDefault(),this.fireEvent("dragover",{dataTransfer:r,preventDefault:function(){i=!0}}),i&&this.fireEvent("drop",{dataTransfer:r}),void 0}this._awaitingPaste=!0;var s=this,d=this._body,l=this.getSelection(),c=l.startContainer,f=l.startOffset,h=l.endContainer,p=l.endOffset,m=this.createElement("DIV",{style:"position: absolute; overflow: hidden; top:"+(d.scrollTop+30)+"px; left: 0; width: 1px; height: 1px;"});d.appendChild(m),l.selectNodeContents(m),this.setSelection(l),setTimeout(function(){try{var e=S(v(m)),t=e.firstChild,n=s._createRange(c,f,h,p);if(t){t===e.lastChild&&"DIV"===t.nodeName&&e.replaceChild(S(t),t),e.normalize(),Ut(e),Kt(e,!1),Zt(e),Wt(e);for(var r=e,o=!0;r=u(r);)C(r);s.fireEvent("willPaste",{fragment:e,preventDefault:function(){o=!1}}),o&&(ft(n,e),s._docWasChanged(),n.collapse(!1),s._ensureBottomLine())}s.setSelection(n),s._updatePath(n,!0),s._awaitingPaste=!1}catch(i){s.didError(i)}},0)}};var Qt={8:"backspace",9:"tab",13:"enter",32:"space",37:"left",39:"right",46:"delete",219:"[",221:"]"},Gt=function(e){return function(t,n){n.preventDefault(),t[e]()}},$t=function(e,t){return t=t||null,function(n,r){r.preventDefault();var o=n.getSelection();n.hasFormat(e,null,o)?n.changeFormat(null,{tag:e},o):n.changeFormat({tag:e},t,o)}},Yt=function(e){try{var t,n=e.getSelection(),r=n.startContainer;if(r.nodeType===O&&(r=r.parentNode),s(r)&&!r.textContent){do t=r.parentNode;while(s(t)&&!t.textContent&&(r=t));n.setStart(t,et.call(t.childNodes,r)),n.collapse(!0),t.removeChild(r),d(t)||(t=h(t)),C(t),ut(n),e.setSelection(n),e._updatePath(n)}e._ensureBottomLine()}catch(o){e.didError(o)}};q&&(Ct._ieSelAllClean=function(){var e=this._body.firstChild;"P"===e.nodeName&&(this._saveRangeToBookmark(this.getSelection()),N(e,this.createDefaultBlock([S(e)])),this.setSelection(this._getRangeAndRemoveBookmark()))});var jt={enter:function(e,t){t.preventDefault();var n,r,o,i,a,s=e.getSelection();if(s){if(e._recordUndoState(s),Ut(s.startContainer),e._getRangeAndRemoveBookmark(s),s.collapsed||ct(s),n=mt(s),n&&(r=p(n,"LI"))&&(n=r),o=n?n.nodeName:"DIV",i=Tt[o],!n)return dt(s,e.createElement("BR")),s.collapse(!1),e.setSelection(s),e._updatePath(s,!0),e._docWasChanged(),void 0;var d,l=s.startContainer,c=s.startOffset;if(i||(l===n&&(l=c?l.childNodes[c-1]:null,c=0,l&&("BR"===l.nodeName?l=l.nextSibling:c=g(l),l&&"BR"!==l.nodeName||(d=C(e.createElement("DIV")),l?n.replaceChild(d,l):n.appendChild(d),l=d))),B(n),i="DIV",l||(l=n.firstChild),s.setStart(l,c),s.setEnd(l,c),n=mt(s)),!n.textContent){if(p(n,"UL")||p(n,"OL"))return e.modifyBlocks(It,s);if(p(n,"BLOCKQUOTE"))return e.modifyBlocks(Rt,s)}for(a=Bt(n,l,c);a.nodeType===A;){var f,h=a.firstChild;if("A"!==a.nodeName){for(;h&&h.nodeType===O&&!h.data&&(f=h.nextSibling,f&&"BR"!==f.nodeName);)v(h),h=f;if(!h||"BR"===h.nodeName||h.nodeType===O&&!Z)break;a=h}else N(a,S(a)),a=h}s=e._createRange(a,0),e.setSelection(s),e._updatePath(s,!0),a.nodeType===O&&(a=a.parentNode);var u=e._doc,m=e._body;a.offsetTop+a.offsetHeight>(u.documentElement.scrollTop||m.scrollTop)+m.offsetHeight&&a.scrollIntoView(!1),e._docWasChanged()}},backspace:function(e,t){var n=e.getSelection();if(n.collapsed)if(vt(n)){e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault();var r=mt(n),o=r&&h(r);if(o){if(!o.isContentEditable)return v(o),void 0;for(E(o,r,n),r=o.parentNode;r&&!r.nextSibling;)r=r.parentNode;r&&(r=r.nextSibling)&&T(r),e.setSelection(n)}else if(r){if(p(r,"UL")||p(r,"OL"))return e.modifyBlocks(It,n);if(p(r,"BLOCKQUOTE"))return e.modifyBlocks(bt,n);e.setSelection(n),e._updatePath(n,!0)}}else{var i=n.startContainer.data||"";J.test(i.charAt(n.startOffset-1))||(e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),e.setSelection(n)),setTimeout(function(){Yt(e)},0)}else e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault(),ct(n),e._ensureBottomLine(),e.setSelection(n),e._updatePath(n,!0)},"delete":function(e,t){var n=e.getSelection();if(n.collapsed)if(Nt(n)){e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault();var r=mt(n),o=r&&u(r);if(o){if(!o.isContentEditable)return v(o),void 0;for(E(r,o,n),o=r.parentNode;o&&!o.nextSibling;)o=o.parentNode;o&&(o=o.nextSibling)&&T(o),e.setSelection(n),e._updatePath(n,!0)}}else{var i=n.startContainer.data||"";J.test(i.charAt(n.startOffset))||(e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),e.setSelection(n)),setTimeout(function(){Yt(e)},0)}else e._recordUndoState(n),e._getRangeAndRemoveBookmark(n),t.preventDefault(),ct(n),e._ensureBottomLine(),e.setSelection(n),e._updatePath(n,!0)},tab:function(e,t){var n,r,o=e.getSelection();if(o.collapsed&&vt(o)&&Nt(o)){for(n=mt(o);r=n.parentNode;){if("UL"===r.nodeName||"OL"===r.nodeName){n.previousSibling&&(t.preventDefault(),e.modifyBlocks(Dt,o));break}n=r}t.preventDefault()}},space:function(e){var t=e.getSelection();e._recordUndoState(t),Ut(t.startContainer),e._getRangeAndRemoveBookmark(t),e.setSelection(t)},left:function(e){e._removeZWS()},right:function(e){e._removeZWS()}};W&&K&&V.getSelection().modify&&(jt["meta-left"]=function(e,t){t.preventDefault(),e._sel.modify("move","backward","lineboundary")},jt["meta-right"]=function(e,t){t.preventDefault(),e._sel.modify("move","forward","lineboundary")}),jt[G+"b"]=$t("B"),jt[G+"i"]=$t("I"),jt[G+"u"]=$t("U"),jt[G+"shift-7"]=$t("S"),jt[G+"shift-5"]=$t("SUB",{tag:"SUP"}),jt[G+"shift-6"]=$t("SUP",{tag:"SUB"}),jt[G+"shift-8"]=Gt("makeUnorderedList"),jt[G+"shift-9"]=Gt("makeOrderedList"),jt[G+"["]=Gt("decreaseQuoteLevel"),jt[G+"]"]=Gt("increaseQuoteLevel"),jt[G+"y"]=Gt("redo"),jt[G+"z"]=Gt("undo"),jt[G+"shift-z"]=Gt("redo"),Ct._onKey=function(e){var t=e.keyCode,n=Qt[t],r="";n||(n=String.fromCharCode(t).toLowerCase(),/^[A-Za-z0-9]$/.test(n)||(n="")),Z&&46===e.which&&(n="."),t>111&&124>t&&(n="f"+(t-111)),e.altKey&&(r+="alt-"),e.ctrlKey&&(r+="ctrl-"),e.metaKey&&(r+="meta-"),e.shiftKey&&(r+="shift-"),n=r+n,jt[n]&&jt[n](this,e)},Ct._getHTML=function(){return this._body.innerHTML},Ct._setHTML=function(e){var t=this._body;t.innerHTML=e;do C(t);while(t=u(t))},Ct.getHTML=function(e){var t,n,r,o,i,a=[];if(e&&(i=this.getSelection())&&this._saveRangeToBookmark(i),$)for(t=this._body;t=u(t);)t.textContent||t.querySelector("BR")||(n=this.createElement("BR"),t.appendChild(n),a.push(n));if(r=this._getHTML().replace(/\u200B/g,""),$)for(o=a.length;o--;)v(a[o]);return i&&this._getRangeAndRemoveBookmark(i),r},Ct.setHTML=function(e){var t,n=this._doc.createDocumentFragment(),r=this.createElement("DIV");r.innerHTML=e,n.appendChild(S(r)),Kt(n,!0),Zt(n),B(n);for(var o=n;o=u(o);)C(o);for(var i=this._body;t=i.lastChild;)i.removeChild(t);i.appendChild(n),C(i),this._undoIndex=-1,this._undoStack.length=0,this._undoStackLength=0,this._isInUndoState=!1;var a=this._getRangeAndRemoveBookmark()||this._createRange(i.firstChild,0);return this._recordUndoState(a),this._getRangeAndRemoveBookmark(a),j?this._lastSelection=a:this.setSelection(a),this._updatePath(a,!0),this},Ct.insertElement=function(e,t){if(t||(t=this.getSelection()),t.collapse(!0),s(e))dt(t,e),t.setStartAfter(e);
else{for(var n,r,o=this._body,i=mt(t)||o;i!==o&&!i.nextSibling;)i=i.parentNode;i!==o&&(n=i.parentNode,r=_(n,i.nextSibling,o)),r?(o.insertBefore(e,r),t.setStart(r,0),t.setStart(r,0),ut(t)):(o.appendChild(e),o.appendChild(this.createDefaultBlock()),t.setStart(e,0),t.setEnd(e,0)),this.focus(),this.setSelection(t),this._updatePath(t)}return this},Ct.insertImage=function(e){var t=this.createElement("IMG",{src:e});return this.insertElement(t),t};var Xt=function(e,t,n){return function(){return this[e](t,n),this.focus()}};Ct.addStyles=function(e){if(e){var t=this._doc.documentElement.firstChild,n=this.createElement("STYLE",{type:"text/css"});n.styleSheet?(t.appendChild(n),n.styleSheet.cssText=e):(n.appendChild(this._doc.createTextNode(e)),t.appendChild(n))}return this},Ct.bold=Xt("changeFormat",{tag:"B"}),Ct.italic=Xt("changeFormat",{tag:"I"}),Ct.underline=Xt("changeFormat",{tag:"U"}),Ct.strikethrough=Xt("changeFormat",{tag:"S"}),Ct.subscript=Xt("changeFormat",{tag:"SUB"},{tag:"SUP"}),Ct.superscript=Xt("changeFormat",{tag:"SUP"},{tag:"SUB"}),Ct.removeBold=Xt("changeFormat",null,{tag:"B"}),Ct.removeItalic=Xt("changeFormat",null,{tag:"I"}),Ct.removeUnderline=Xt("changeFormat",null,{tag:"U"}),Ct.removeStrikethrough=Xt("changeFormat",null,{tag:"S"}),Ct.removeSubscript=Xt("changeFormat",null,{tag:"SUB"}),Ct.removeSuperscript=Xt("changeFormat",null,{tag:"SUP"}),Ct.makeLink=function(e){var t=this.getSelection();if(t.collapsed){var n=e.indexOf(":")+1;if(n)for(;"/"===e[n];)n+=1;dt(t,this._doc.createTextNode(e.slice(n)))}return this.changeFormat({tag:"A",attributes:{href:e}},{tag:"A"},t),this.focus()},Ct.removeLink=function(){return this.changeFormat(null,{tag:"A"},this.getSelection(),!0),this.focus()},Ct.setFontFace=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"font",style:"font-family: "+e+", sans-serif;"}},{tag:"SPAN",attributes:{"class":"font"}}),this.focus()},Ct.setFontSize=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"size",style:"font-size: "+("number"==typeof e?e+"px":e)}},{tag:"SPAN",attributes:{"class":"size"}}),this.focus()},Ct.setTextColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"colour",style:"color: "+e}},{tag:"SPAN",attributes:{"class":"colour"}}),this.focus()},Ct.setHighlightColour=function(e){return this.changeFormat({tag:"SPAN",attributes:{"class":"highlight",style:"background-color: "+e}},{tag:"SPAN",attributes:{"class":"highlight"}}),this.focus()},Ct.setTextAlignment=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/align/.test(e)}).join(" ")+" align-"+e).trim(),t.style.textAlign=e},!0),this.focus()},Ct.setTextDirection=function(e){return this.forEachBlock(function(t){t.className=(t.className.split(/\s+/).filter(function(e){return!/dir/.test(e)}).join(" ")+" dir-"+e).trim(),t.dir=e},!0),this.focus()},Ct.increaseQuoteLevel=Xt("modifyBlocks",kt),Ct.decreaseQuoteLevel=Xt("modifyBlocks",bt),Ct.makeUnorderedList=Xt("modifyBlocks",Ot),Ct.makeOrderedList=Xt("modifyBlocks",Lt),Ct.removeList=Xt("modifyBlocks",xt),Ct.increaseListLevel=Xt("modifyBlocks",Dt),Ct.decreaseListLevel=Xt("modifyBlocks",It),top!==V?(V.editor=new b(e),V.onEditorLoad&&(V.onEditorLoad(V.editor),V.onEditorLoad=null)):V.Squire=b}(document);