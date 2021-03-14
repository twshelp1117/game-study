"use strict";
class configBase {
}
class configKey extends configBase {
    constructor() {
        super();
    }
    getDigital() {
        return true;
    }
    getAnalog() {
        return 0;
    }
}
class configPadButton extends configBase {
    constructor(btncode) {
        super();
    }
    getDigital() {
        return true;
    }
    getAnalog() {
        return 0;
    }
}
class configPadAnalog extends configBase {
    constructor(axecode) {
        super();
    }
    getDigital() {
        return false;
    }
    getAnalog() {
        return 0;
    }
}
class AllInput {
    constructor() {
        this._a = 0;
        this._a = 1;
    }
    get a() {
        return this._a;
    }
}
