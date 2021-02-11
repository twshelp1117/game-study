import { tlog } from "./tlog";

const Game = (function () {
  function start() {}
  return {
    start: start,
  };
})();

window.addEventListener("load", Game.start);
