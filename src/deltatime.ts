export class DeltaTime {
  private _lastTime: { [key: string]: number } = {};
  private _lastDelta: { [key: string]: number } = {};
  public Update(key: string): void {
    if (key in this._lastTime) {
      const tmp = this._lastTime[key];
      this._lastTime[key] = performance.now();
      this._lastDelta[key] = this._lastTime[key] - tmp;
    } else {
      this._lastTime[key] = performance.now();
    }
  }
  public GetDelta(key: string): number {
    if (key in this._lastDelta) {
      return this._lastDelta[key];
    }
    return 0;
  }
  public GetDeltaKey2Key(from: string, to: string): number {
    if (from in this._lastTime && to in this._lastTime) {
      return this._lastTime[to] - this._lastTime[from];
    }
    return 0;
  }
  public GetDeltaKey2Now(from: string): number {
    if (from in this._lastTime) {
      return performance.now() - this._lastTime[from];
    }
    return 0;
  }
}
