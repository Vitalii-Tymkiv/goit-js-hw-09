var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i={position:"right-top",backOverlay:!0,clickToClose:!0,closeButton:!0};let l,s,a;function u(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delayInteger:t}):r({position:e,delayInteger:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),console.log(e.currentTarget);const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;l=Number.parseInt(t.value),s=Number.parseInt(n.value),a=Number.parseInt(o.value),function(){for(let e=0;e<a;e+=1)u(e+1,l).then((({position:e,delayInteger:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,i)})).catch((({position:e,delayInteger:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,i)})),l+=s}()}));
//# sourceMappingURL=03-promises.bee7cd82.js.map