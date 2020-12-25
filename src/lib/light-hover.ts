let prevNode;
export default function lightHover(r = 160) {
  document.addEventListener("mousemove", function (e) {
    if (prevNode) {
      (prevNode as HTMLElement).style.backgroundImage = "";
      (prevNode as HTMLElement).classList.remove("hover_font");
    }
    const x = e.pageX;
    const y = e.pageY;
    const tds = document.querySelectorAll(".lighting_light_hover");
    for (let index = 0; index < tds.length; index++) {
      const element = tds[index].getBoundingClientRect();
      const L = element.x;
      const R = element.x + element.width;
      const T = element.y;
      const B = element.y + element.height;
      const YT = T - y - r;
      const YB = B - y + r;
      const XL = L - x - r;
      const XR = R - x + r;
      // inside
      if ((x > L && x < R) && (y > T && y < B)) {
        const xPx = x - L;
        const yPx = y - T;
        prevNode = e.target;
        if ((e.target as HTMLElement).parentElement.classList.contains("lighting_light_hover") && !(e.target as HTMLElement).classList.contains("lighting_none")) {
          (e.target as HTMLElement).style.backgroundImage = `radial-gradient(${r}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
          (e.target as HTMLElement).classList.add("hover_font");
        }
        (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${r}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
        continue;
      }
      if (((tds[index] as HTMLElement).firstChild as HTMLElement).style)
      ((tds[index] as HTMLElement).firstChild as HTMLElement).style.backgroundImage = "";
      // outside
      if (YT > 0 || XL > 0 || YB < 0 || XR < 0) {
        (tds[index] as HTMLElement).style.backgroundImage = "";
      } else {
        // around
        const xPx = x - L;
        const yPx = y - T;
        const pos = r;
        (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
      }
    }
  }, true)
}