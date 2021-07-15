import { CanvasScreen } from "./canvasscreen";
import { DeltaTime } from "./deltatime";
import { InputAIO } from "./input";

export class Game {
  public static Info = {
    Width: 256,
    Height: 240,
    DispWidth: 0,
  } as const;
  private _canvasScreen: CanvasScreen;
  private _input: InputAIO;
  private _deltaTime: DeltaTime;

  constructor(extScr: HTMLCanvasElement) {
    this._canvasScreen = new CanvasScreen(
      Game.Info.Width,
      Game.Info.Height,
      extScr.getContext("2d"),
      Game.Info.DispWidth
    );
    this._input = new InputAIO();
    this._deltaTime = new DeltaTime();
  }
  public run(): void {
    this.loop();
  }
  private loop(): void {
    this._deltaTime.Update("LoopStart");
    const id = requestAnimationFrame(this.loop.bind(this));
    if (this._input.IsFocus) {
      try {
        this.main();
      } catch (error) {
        console.error(error);
        cancelAnimationFrame(id);
      }
    }
  }
  private _tmp = 0;
  private main(): void {
    this._deltaTime.Update("MainStart");
    this._canvasScreen.clearBuffer();

    // console.log(this._deltaTime.GetDelta("LoopStart").toFixed(1));

    const ctx = this._canvasScreen.Buffer;
    ctx.fillStyle = "#fff";
    this._tmp -= 1;
    this._tmp = this._tmp % 0b100000000 & 0b011111111;
    ctx.fillRect(this._tmp - 1, 0, 2, Game.Info.Height);

    for (let y = 0; y < Game.Info.Height / 16; y++) {
      ctx.fillRect(0, y * 16 + 8, Game.Info.Width, 1);
    }
    for (let x = 0; x < Game.Info.Width / 16; x++) {
      ctx.fillRect(x * 16 + 8, 0, 1, Game.Info.Height);
    }

    this._canvasScreen.updateDisp();
  }
}
