export class InputAIO {
  private isFocus: boolean;
  public get IsFocus(): boolean {
    return this.isFocus;
  }

  constructor() {
    const preventList: (keyof WindowEventMap)[] = ["touchmove", "mousewheel", "keydown", "keyup", "contextmenu"];
    const prevent = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener("focus", () => {
      this.isFocus = true;
      for (const it of preventList) {
        window.addEventListener(it, prevent, { passive: false });
      }
    });
    window.addEventListener("blur", () => {
      this.isFocus = false;
      for (const it of preventList) {
        window.removeEventListener(it, prevent);
      }
    });
  }
}
