var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire5589;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequire5589=t);var i=t("eSQOb"),r=t("jjlwn"),d=t("7BOf4");let a={};i.socket.on("msg",((e,n,o,t)=>{(0,r.addMsg)(e,n,o,t)})),i.socket.on("typing",((e,n)=>{a.hasOwnProperty(e)||(a[e]=n,(0,d.updateTyping)(a))})),i.socket.on("stoppedTyping",((e,n)=>{a.hasOwnProperty(e)&&(delete a[e],(0,d.updateTyping)(a))})),i.socket.on("notification",(e=>{(0,r.addNotification)(e)}));
//# sourceMappingURL=index.d12d7a62.js.map
