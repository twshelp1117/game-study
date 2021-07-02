import { CanvasScreen } from "./canvasscreen";
import { DeltaTime } from "./deltatime";
import { InputAIO } from "./input";

export class Game {
  public static Info = {
    Width: 240,
    Height: 320,
  } as const;
  private _canvasScreen: CanvasScreen;
  private _input: InputAIO;
  private _deltaTime: DeltaTime;

  constructor(extScr: HTMLCanvasElement) {
    this._canvasScreen = new CanvasScreen(Game.Info.Width, Game.Info.Height, extScr.getContext("2d"));
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
  private main(): void {
    this._deltaTime.Update("MainStart");
    this._canvasScreen.clearBuffer();

    console.log(this._deltaTime.GetDelta("LoopStart").toFixed(1));

    this._canvasScreen.updateDisp();
  }
}
