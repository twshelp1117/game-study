export class InputAIO {
  constructor() {
    const preventList: (keyof WindowEventMap)[] = ["touchmove", "mousewheel", "keydown", "keyup", "contextmenu"];
    const prevent = (e: Event) => {
      e.preventDefault();
    };
    console.log("InputAIO activate!");

    window.addEventListener("focus", (e) => {
      console.log(e.type);
      for (const it of preventList) {
        window.addEventListener(it, prevent, { passive: false });
      }
    });
    window.addEventListener("blur", (e) => {
      console.log(e.type);
      for (const it of preventList) {
        window.removeEventListener(it, prevent);
      }
    });
  }
}
