function getCookieVal (offset) {var endstr=document.cookie.indexOf (";",offset);if (endstr==-1) endstr=document.cookie.length;return unescape(document.cookie.substring(offset, endstr));}
function GetCookie (name){var arg=name+"=";var alen=arg.length;var clen=document.cookie.length;var i = 0;while (i<clen){var j=i+alen;if (document.cookie.substring(i,j)==arg) return getCookieVal (j);i = document.cookie.indexOf(" ",i)+1;if (i==0) break;} return null;} 
function DeleteCookie (name) {var exp=new Date(); exp.setTime (exp.getTime()-1); var cval=GetCookie (name); document.cookie=name+"="+cval+"; expires="+exp.toGMTString();}
var currentpos,timer; 
function initialize() { timer=setInterval("scrollwindow()",10);} 
function sc(){clearInterval(timer);}
function scrollwindow() {currentpos=document.body.scrollTop;window.scroll(0,++currentpos);if (currentpos != document.body.scrollTop) sc();} 
document.onmousedown=sc
document.ondblclick=initialize
ie = (document.all)? true:false
if (ie){function ctlent(eventobject){if(event.ctrlKey && window.event.keyCode==13){this.document.FORM.submit();}}}
clckcnt = 0;
function clckcntr() {clckcnt++;if(clckcnt > 1) {if(clckcnt > 2) { return false; }alert('文章已經發出了......\n\n' + '請等待片刻......\n\n' + '不要重複按送出鍵，謝謝！');return false;}return true;}
var nn = !!document.layers;
var ie = !!document.all;
if (nn) {netscape.security.PrivilegeManager.enablePrivilege("UniversalSystemClipboardAccess");  var fr=new java.awt.Frame();  var Zwischenablage = fr.getToolkit().getSystemClipboard();}
function copy(textarea){if (nn) {textarea.select();Zwischenablage.setContents(new java.awt.datatransfer.StringSelection(textarea.value), null);} else if (ie) {textarea.select();cbBuffer=textarea.createTextRange();cbBuffer.execCommand('Copy');}}
function paste(textarea){ if (nn) {var Inhalt=Zwischenablage.getContents(null); if (Inhalt!=null) textarea.value=Inhalt.getTransferData(java.awt.datatransfer.DataFlavor.stringFlavor);} else if (ie) {textarea.select(); cbBuffer=textarea.createTextRange(); cbBuffer.execCommand('Paste');}}
function openScript(url, width, height){var Win = window.open(url,"openScript",'width=' + width + ',height=' + height + ',resizable=1,scrollbars=yes,menubar=yes,status=yes' );}
function runEx(){var winEx = window.open("", "winEx", "width=300,height=200,status=yes,menubar=yes,scrollbars=yes,resizable=yes"); winEx.document.open("text/html", "replace"); winEx.document.write(unescape(event.srcElement.parentElement.children[2].value)); winEx.document.close(); }
