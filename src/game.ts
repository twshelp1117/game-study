import { CanvasScreen } from "./canvasscreen";

export class Game {
  public static info = {
    width: 240,
    height: 320,
  } as const;
  private canvasScreen: CanvasScreen;
  private frameCount = 0;
  constructor(extScr?: HTMLCanvasElement) {
    this.canvasScreen = new CanvasScreen(Game.info.width, Game.info.height, extScr?.getContext("2d"));
  }
  public run(): void {
    this.loop();
  }
  private loop(): void {
    const id = requestAnimationFrame(this.loop.bind(this));
    try {
      this.main();
      this.frameCount++;
    } catch (error) {
      console.error(error);
      cancelAnimationFrame(id);
    }
  }
  private main(): void {
    this.canvasScreen.clearBuffer();

    this.canvasScreen.updateDisp();
  }
}
