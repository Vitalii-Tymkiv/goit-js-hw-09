var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");let i,l,s;document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;i=Number.parseInt(t.value),l=Number.parseInt(n.value),s=Number.parseInt(r.value),function(){for(let e=0;e<s;e+=1)u(e+1,i).then((({position:e,delayInteger:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,a)})).catch((({position:e,delayInteger:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,a)})),i+=l}(),e.currentTarget.reset()}));const a={position:"right-top",backOverlay:!0,clickToClose:!1,closeButton:!1};function u(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r({position:e,delayInteger:t}):o({position:e,delayInteger:t})}),t)}))}
//# sourceMappingURL=03-promises.ef072051.js.map