import { HTMLParts } from "./htmlparts";

const Game = (function () {
  const p = new HTMLParts();
  function start() {
    p.paste("app");
    p.paste("app");
  }
  return {
    start: start,
  };
})();

window.addEventListener("load", Game.start);
