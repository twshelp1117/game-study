abstract class configBase {
  abstract getDigital(): boolean;
  abstract getAnalog(): number;
}

class configKey extends configBase {
  constructor(keycode: string) {
    super();
  }
  public getDigital() {
    return true;
  }
  public getAnalog() {
    return 0;
  }
}

class configPadButton extends configBase {
  constructor(btncode: number) {
    super();
  }
  public getDigital() {
    return true;
  }
  public getAnalog() {
    return 0;
  }
}

class configPadAnalog extends configBase {
  constructor(axecode: number) {
    super();
  }
  public getDigital() {
    return false;
  }
  public getAnalog() {
    return 0;
  }
}

class AllInput {
  private _a = 0;
  /*
    up: { analog: false, pad: 12, key: "up" },
    down: { analog: false, pad: 13, key: "down" },
    left: { analog: false, pad: 14, key: "left" },
    right: { analog: false, pad: 15, key: "right" },
    A: { analog: false, pad: 0, key: "A" },
    B: { analog: false, pad: 1, key: "S" },
    X: { analog: false, pad: 2, key: "Q" },
    Y: { analog: false, pad: 3, key: "W" },
    ST: { analog: false, pad: 9, key: "enter" },
 */
  private label: string[];

  public get a() {
    return this._a;
  }

  constructor() {
    this._a = 1;
  }
}
