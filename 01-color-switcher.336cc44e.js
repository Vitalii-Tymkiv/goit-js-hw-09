const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=document.querySelector("body");t.startBtn.addEventListener("click",(function(){e.style.backgroundColor=o(),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,n=setInterval((()=>{e.style.backgroundColor=o()}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.336cc44e.js.map