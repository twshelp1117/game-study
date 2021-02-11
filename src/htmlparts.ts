export class HTMLParts {
  // constructor() {}
  public async paste(id = ""): Promise<void> {
    const file = await fetch("./html/game.html");
    const text = await file.text();
    const d = document.createElement("div");
    d.innerHTML = text;
    document.getElementById(id)?.appendChild(d) ?? document.body.appendChild(d);
    return;
  }
}
