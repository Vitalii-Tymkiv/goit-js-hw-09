var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");const i={position:"right-top",backOverlay:!0,clickToClose:!0,closeButton:!0};let l,s,a;function u(e,t){const n=Math.random()>.3;return new Promise(((r,o)=>{setTimeout((()=>{n?r({position:e,delayInteger:t}):o({position:e,delayInteger:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault(),console.log(e.currentTarget);const{elements:{delay:t,step:n,amount:r}}=e.currentTarget;l=Number.parseInt(t.value),s=Number.parseInt(n.value),a=Number.parseInt(r.value),function(){for(let e=0;e<a;e+=1)u(e+1,l).then((({position:e,delayInteger:t})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`,i)})).catch((({position:e,delayInteger:t})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`,i)})),l+=s}(),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.2ee869fd.js.map
