!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=document.querySelector("body");t.startBtn.addEventListener("click",(function(){n.style.backgroundColor=a(),t.startBtn.disabled=!0,t.stopBtn.disabled=!1,e=setInterval((function(){n.style.backgroundColor=a()}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));var e=null;function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.2aec9fae.js.map
