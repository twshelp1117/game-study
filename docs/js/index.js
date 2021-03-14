"use strict";
const Game = (function () {
    function setMute(b) {
        return b;
    }
    function start() { }
    return {
        setMute: setMute,
        start: start,
    };
})();
window.addEventListener("load", Game.start);
