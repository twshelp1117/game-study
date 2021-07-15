export class CanvasScreen {
  private _display: CanvasRenderingContext2D;
  private _buffer: CanvasRenderingContext2D;

  public get Display(): CanvasRenderingContext2D {
    return this._display;
  }
  public get Buffer(): CanvasRenderingContext2D {
    return this._buffer;
  }

  constructor(width: number, height: number, context: CanvasRenderingContext2D, dispWidth = 0, dispHeight = 0) {
    // コピーor生成
    this._display = context;

    // チェック
    width = width <= 0 ? 1 : width;
    height = height <= 0 ? 1 : height;
    dispWidth = dispWidth <= 0 ? width : dispWidth;
    dispHeight = dispHeight <= 0 ? height : dispHeight;

    // 設定
    this._display.canvas.width = dispWidth;
    this._display.canvas.height = dispHeight;
    this._display.imageSmoothingEnabled = false;
    this._display.scale(dispWidth / width, dispHeight / height);

    // バッファ
    this._buffer = document.createElement("canvas").getContext("2d");
    this._buffer.canvas.width = width;
    this._buffer.canvas.height = height;
    this._buffer.imageSmoothingEnabled = false;

    // きれいにしておこうね
    this.clearBuffer();
    this.updateDisp();
  }

  public clearBuffer(): void {
    this._buffer.resetTransform();
    if (this._buffer.globalAlpha != 1) this._buffer.globalAlpha = 1;
    this._buffer.fillStyle = "#000";
    this._buffer.fillRect(0, 0, this._buffer.canvas.width, this._buffer.canvas.height);
  }
  public updateDisp(): void {
    // this.display.resetTransform();
    this._display.drawImage(this._buffer.canvas, 0, 0);
    // this.clearBuffer();
  }
}
