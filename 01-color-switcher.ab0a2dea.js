!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},n=document.querySelector("body");t.startBtn.addEventListener("click",(function(){e=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.startBtn.disabled=!0,t.stopBtn.disabled=!1}),1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),git,t.startBtn.disabled=!0,t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));var e=null;t.stopBtn.disabled=!0}();
//# sourceMappingURL=01-color-switcher.ab0a2dea.js.map