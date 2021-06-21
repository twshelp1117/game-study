export class CanvasScreen {
  private display: CanvasRenderingContext2D;
  private buffer: CanvasRenderingContext2D;
  constructor(width: number, height: number, context: CanvasRenderingContext2D) {
    // コピーor生成
    this.display = context;

    // チェック
    width = width <= 0 ? 1 : width;
    height = height <= 0 ? 1 : height;

    // 設定
    this.display.canvas.width = width;
    this.display.canvas.height = height;

    // バッファ
    this.buffer = document.createElement("canvas").getContext("2d");
    this.buffer.canvas.width = width;
    this.buffer.canvas.height = height;
    this.buffer.imageSmoothingEnabled = false;

    // きれいにしておこうね
    this.clearBuffer();
    this.updateDisp();
  }
  public get(select: "buffer" | "display"): CanvasRenderingContext2D {
    return select == "buffer" ? this.buffer : this.display;
  }

  public clearBuffer(): void {
    this.buffer.resetTransform();
    if (this.buffer.globalAlpha != 1) this.buffer.globalAlpha = 1;
    this.buffer.fillStyle = "#fff";
    this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
  }
  public updateDisp(): void {
    // this.display.resetTransform();
    this.display.drawImage(this.buffer.canvas, 0, 0);
    // this.clearBuffer();
  }
}
