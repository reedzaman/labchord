var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequire5589;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequire5589=o);var i=o("eSQOb"),r=o("6H7VJ");let d=!1,l=document.getElementById("textInputBox");document.addEventListener("keyup",(e=>{"Enter"===e.key&&(0,r.handleSubmission)(),l.value.length>0?d||(d=!0,i.socket.emit("typing")):d&&(d=!1,i.socket.emit("stoppedTyping"))})),l.addEventListener("focusout",(()=>{d&&(d=!1,i.socket.emit("stoppedTyping"))})),l.addEventListener("focusin",(()=>{l.value.length>0&&(d||(d=!0,i.socket.emit("typing")))}));
//# sourceMappingURL=index.1d7fbb70.js.map