import { Game } from "./game";

window.addEventListener("load", () => {
  const canvas = document.querySelector(".game");
  const game = new Game(<HTMLCanvasElement>canvas);

  {
    // フルスクリーン有効化
    canvas.classList.add("full");
    // ダブルクリックでフルスクリーン
    // canvas.addEventListener("dblclick", () => {
    //   canvas.classList.toggle("full");
    // });
  }

  game.run();
});
