let prevNode: HTMLElement;
export default function halo(r = 160) {
  document.addEventListener("mousemove", function (e) {
    const target = e.target as HTMLElement;
    if (prevNode) {
      prevNode.style.backgroundImage = "";
      prevNode.classList.remove("hover_font");
    }
    const x = e.pageX;
    const y = e.pageY;
    const tds = document.querySelectorAll(".halo_hover") as NodeListOf<HTMLElement>;
    for (let index = 0; index < tds.length; index++) {
      const targetEle = target.getBoundingClientRect();
      const element = tds[index].getBoundingClientRect();
      const L = element.x;
      const targetL = targetEle.x;
      const targetT = targetEle.y;
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
        const targetXpx = x - targetL;
        const targetYpx = y - targetT;
        prevNode = target;
        if (target.parentElement.classList.contains("halo_hover") && !target.classList.contains("halo_none")) {
          target.style.backgroundImage = `radial-gradient(${r}px circle at ${targetXpx}px ${targetYpx}px, #f7f7f7, transparent)`;
          target.classList.add("hover_font");
        } else {
          target.style.backgroundImage = "";
          target.classList.remove("hover_font");
        }
        if (!tds[index].classList.contains("halo_none")) {
          tds[index].style.backgroundImage = `radial-gradient(${r}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
        } else {
          tds[index].style.backgroundImage = "";
        }
        continue;
      }
      const firstChild = tds[index].firstElementChild as HTMLElement;
      if (firstChild && firstChild.style) {
        firstChild.style.backgroundImage = "";
      }
      // outside
      if (YT > 0 || XL > 0 || YB < 0 || XR < 0) {
        tds[index].style.backgroundImage = "";
      } else {
        // around
        const xPx = x - L;
        const yPx = y - T;
        const pos = r;
        if (tds[index].classList.contains("halo_none")) {
          tds[index].style.backgroundImage = "";
        } else {
          tds[index].style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
        }
      }
    }
  }, true)
}