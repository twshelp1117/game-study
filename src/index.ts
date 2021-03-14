const Game = (function () {
  function setMute(b: boolean) {
    return b;
  }
  function start() {}
  return {
    setMute: setMute,
    start: start,
  };
})();

window.addEventListener("load", Game.start);
