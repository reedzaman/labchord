var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire5589;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire5589=t);var r=t("eSQOb"),i=t("jjlwn"),a=t("7BOf4");let d={};r.socket.on("msg",((e,n,o,t)=>{(0,i.addMsg)(e,n,o,t)})),r.socket.on("typing",((e,n)=>{d.hasOwnProperty(e)||(d[e]=n,(0,a.updateTyping)(d))})),r.socket.on("stoppedTyping",((e,n)=>{d.hasOwnProperty(e)&&(delete d[e],(0,a.updateTyping)(d))})),r.socket.on("notification",(e=>{(0,i.addNotification)(e)})),r.socket.on("buffer",(async e=>{try{(await JSON.parse(e)).msgs.forEach((e=>(0,i.addMsg)(e.content,e.senderName,e.senderId,e.type)))}catch(e){console.log(e)}}));
//# sourceMappingURL=index.44b56650.js.map
