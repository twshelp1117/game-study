import { CanvasScreen } from "./canvasscreen";
import { InputAIO } from "./input";

export class Game {
  public static info = {
    width: 240,
    height: 320,
  } as const;
  private canvasScreen: CanvasScreen;
  private input: InputAIO;

  constructor(extScr: HTMLCanvasElement) {
    this.canvasScreen = new CanvasScreen(Game.info.width, Game.info.height, extScr.getContext("2d"));
    this.input = new InputAIO();
  }
  public run(): void {
    this.loop();
  }
  private loop(): void {
    const id = requestAnimationFrame(this.loop.bind(this));
    if (this.input.IsFocus) {
      try {
        this.main();
      } catch (error) {
        console.error(error);
        cancelAnimationFrame(id);
      }
    }
  }
  private main(): void {
    this.canvasScreen.clearBuffer();

    this.canvasScreen.updateDisp();
  }
}
