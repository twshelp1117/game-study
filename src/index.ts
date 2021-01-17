import { CanvasScreen } from "./canvasscreen";

const Game = (function () {
  let screen: CanvasScreen;

  function start() {
    screen = new CanvasScreen(224, 288, (<HTMLCanvasElement>document.getElementById("game")).getContext("2d"));
  }
  return {
    start: start,
  };
})();

window.addEventListener("load", Game.start);
