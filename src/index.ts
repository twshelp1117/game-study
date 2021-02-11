import { CanvasScreen } from "./canvasscreen";
import { tlog } from "./tlog";

const Game = (function () {
  const C = {};
  let screen: CanvasScreen;
  let gamepads: Gamepad[];

  function start() {
    screen = new CanvasScreen(320, 240, (<HTMLCanvasElement>document.getElementById("game")).getContext("2d"));
    gamepads = navigator.getGamepads();

    window.addEventListener("gamepadconnected", (e) => {
      const f = <GamepadEvent>e;
      tlog(f.gamepad.id, f.gamepad.index);
    });

    loop();
  }
  function loop() {
    requestAnimationFrame(loop);
    screen.updateDisp();
    screen.clearBuffer();
    const buf = screen.get("buffer");

    gamepads = navigator.getGamepads();
    for (const gamepad of gamepads) {
      if (gamepad) {
        // tlog(gamepad.index);
        gamepad.axes.forEach((v, i) => {
          if (i % 2 == 0) {
            // ベース描画
            buf.fillStyle = "#aaa";
            buf.fillRect(((i / 2) | 0) * 24 + 2, gamepad.index * 24 + 2, 20, 20);

            buf.fillStyle = "#000";
            buf.fillRect(((i / 2) | 0) * 24 + 12, gamepad.index * 24 + 10, v * 10, 4);
          } else {
            buf.fillStyle = "#000";
            buf.fillRect(((i / 2) | 0) * 24 + 10, gamepad.index * 24 + 12, 4, v * 10);
          }
        });

        gamepad.buttons.forEach((v, i) => {
          buf.fillStyle = v.pressed ? "#000" : "#aaa";
          buf.fillRect((((gamepad.axes.length + 1) / 2) | 0) * 24 + i * 12 + 2, gamepad.index * 24 + 2, 8, 20);
        });
      }
    }
  }
  return {
    start: start,
  };
})();

window.addEventListener("load", Game.start);
