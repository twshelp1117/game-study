export class HTMLParts {
    async paste(id = "") {
        const file = await fetch("./html/game.html");
        const text = await file.text();
        const d = document.createElement("div");
        d.innerHTML = text;
        // d.childNodes.forEach((v) => {
        //   console.log(v);
        // });
        // console.log(d.childElementCount);
        document.getElementById(id)?.appendChild(d) ?? document.body.appendChild(d);
        // document.createElement()
        // return;
    }
}
