function e(e,t,n,l){Object.defineProperty(e,t,{get:n,set:l,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},d=t.parcelRequire5589;null==d&&((d=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var d={id:e,exports:{}};return n[e]=d,t.call(d.exports,d,d.exports),d.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){l[e]=t},t.parcelRequire5589=d),d.register("jjlwn",(function(t,n){e(t.exports,"addNotification",(()=>d)),e(t.exports,"addMsg",(()=>s)),e(t.exports,"addOwnMsg",(()=>i));let l="";function d(e){if("flex"===document.getElementsByClassName("main-box")[0].style.display){let t=document.createElement("div"),n=document.getElementsByClassName("msg-box")[0];t.classList.add("notification"),t.innerText=e,n.appendChild(t),l="notification",n.scrollTop=n.scrollHeight}}function s(e,t,n,d){if("flex"===document.getElementsByClassName("main-box")[0].style.display){let s=document.getElementsByClassName("msg-box")[0],i=document.createElement("h1");i.classList.add("owner-name"),l!==n&&(i.innerText=t);let o=document.createElement("div");o.classList.add("owner-photo-image"),l!==n&&(o.style.backgroundImage=`url('https://icotar.com/avatar/${t.replace(/ /g,"+")}')`);let a=document.createElement("div");a.classList.add("owner-photo"),a.appendChild(o);let m=document.createElement("div");if(m.classList.add("msg-content"),"text"===d){let t=document.createElement("div");t.classList.add("msg-text"),t.innerText=e,m.appendChild(a),m.appendChild(t)}else if("image"===d){let t=document.createElement("img");t.classList.add("msg-image"),t.src=e,m.appendChild(a),m.appendChild(t)}let c=document.createElement("div");c.classList.add("msg-block"),l===n&&c.classList.add("msg-block-close"),c.appendChild(i),c.appendChild(m),l!==n&&(l=n),s.appendChild(c),s.scrollTop=s.scrollHeight}}function i(e,t){if("flex"===document.getElementsByClassName("main-box")[0].style.display){let n=document.getElementsByClassName("msg-box")[0],d=document.createElement("div");if(d.classList.add("msg-content"),"text"===t){let t=document.createElement("div");t.classList.add("msg-text"),t.innerText=e,d.appendChild(t)}else if("image"===t){let t=document.createElement("img");t.classList.add("msg-image"),t.src=e,d.appendChild(t)}let s=document.createElement("div");s.classList.add("msg-block"),s.classList.add("msg-block-own"),"own"===l&&s.classList.add("msg-block-close"),s.appendChild(d),l="own",n.appendChild(s),n.scrollTop=n.scrollHeight}}})),d.register("7BOf4",(function(t,n){function l(e){let t=document.getElementsByClassName("typing-indicator")[0],n=Object.values(e);if(n=n.map((e=>e.split(" ")[0])),n.length>1){let e=n.pop();n.push(n.pop()+" and"),n.push(e)}let l=n.toString();if(l=l.toString().replace(/,/g,", "),console.log(l),l=n.length>1?`${l} are typing`:1===n.length?`${l} is typing`:"",t.innerText=l,""!==l){let e=document.createElement("img");e.src="./assets/typing.gif",e.style.width="30px",e.style.height="15px",e.style.marginTop="auto",t.appendChild(e)}}function d(){let e=document.getElementById("themeIcon");document.getElementsByTagName("body")[0].classList.toggle("dark"),"light_mode"===e.innerText?e.innerText="dark_mode":e.innerText="light_mode"}e(t.exports,"updateTyping",(()=>l)),e(t.exports,"toggleTheme",(()=>d))}));var s=d("eSQOb"),i=d("jjlwn"),o=d("7BOf4");let a="",m="Anonymous";const c=document.getElementById("msgForm"),r=document.getElementById("textInputBox"),u=document.querySelector('input[type="file"]');function g(){""===a?r.value.length>0&&((0,i.addOwnMsg)(r.value,"text"),s.socket.emit("send",r.value,"text"),r.value=""):((0,i.addOwnMsg)(a,"image"),s.socket.emit("send",a,"image"),a="",document.getElementById("imageInputButton").value="",document.getElementById("textInputBox").style.width="75%",document.getElementById("textInputBox").removeAttribute("disabled"),document.getElementById("textInputBox").focus(),document.getElementById("imagePreviewWrapper").style.display="none")}document.getElementById("sendNameForm").addEventListener("submit",(()=>{let e=document.getElementById("username").value,t=document.getElementById("profileImg"),n=document.getElementById("profileName");""!==e&&(m=e),s.socket.emit("setName",m),t.src=`https://icotar.com/avatar/${m.replace(/ /g,"+")}`,t.style.visibility="unset",n.innerText=m,n.style.visibility="unset",document.getElementsByClassName("name-box")[0].style.display="none",document.getElementsByClassName("main-box")[0].style.display="flex",document.getElementsByClassName("msg-input")[0].focus()})),document.querySelector("#theme").addEventListener("click",(()=>{(0,o.toggleTheme)()})),document.querySelector("#imageClose").addEventListener("click",(()=>{a="",document.querySelector("#imagePreview").src="",document.querySelector("#imagePreviewWrapper").style.display="none",document.getElementById("textInputBox").removeAttribute("disabled"),document.getElementById("imageInputButton").value="",document.getElementById("textInputBox").style.width="75%",document.getElementById("textInputBox").focus()})),c.addEventListener("submit",(e=>{g()})),u.addEventListener("change",(e=>{let t=document.createElement("canvas"),n=t.getContext("2d");const l=new FileReader;l.onload=()=>{let e,d,s;const i=new Image;i.src=l.result,i.onload=()=>{e=i.naturalHeight,d=i.naturalWidth,s=e/d,t.width=220,t.height=t.width*s,n.drawImage(i,0,0,t.width,t.height),a=t.toDataURL(),console.log(a)},document.getElementById("imagePreview").src=l.result,document.getElementById("imagePreviewWrapper").style.display="unset",document.getElementById("textInputBox").style.width=window.innerWidth<=600?"40%":"65%",document.getElementById("textInputBox").disabled=!0},l.readAsDataURL(u.files[0])}),!1),textInputBox.addEventListener("keypress",(e=>{"Enter"===e.key&&g()}));
//# sourceMappingURL=index.86573c60.js.map
