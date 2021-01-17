import { CanvasScreen } from "./canvasscreen";

const Game = (function () {
  let screen: CanvasScreen;

  function start() {
    screen = new CanvasScreen(224, 288, (<HTMLCanvasElement>document.getElementById("game")).getContext("2d"));
    let data = {};
    fetch("./data/0.json")
      .then(async (r) => {
        // ここを同期処理にすると
        if (r.ok) await r.json().then((v) => (data = v));
      })
      .finally(() => {
        // ここが一番最後になる
        console.log(data);
      });
  }
  return {
    start: start,
  };
})();

window.addEventListener("load", Game.start);
