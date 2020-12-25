let prevNode;
export default function lightHover(r = 160) {
  document.addEventListener("mousemove", function (e) {
    if (prevNode) {
      (prevNode as HTMLElement).style.backgroundImage = "";
      (prevNode as HTMLElement).classList.remove("hover_font");
    }
    // 鼠标坐标
    const x = e.pageX;
    const y = e.pageY;
    //效果盒子组
    const tds = document.querySelectorAll(".lighting_light_hover");
    //光标范围半径
    for (let index = 0; index < tds.length; index++) {
      //每个日期格的边距离视口的距离
      const element = tds[index].getBoundingClientRect();
      const L = element.x;
      const R = element.x + element.width;
      const T = element.y;
      const B = element.y + element.height;
      //计算光标相对日期格的距离
      const YT = T - y - r;
      const YB = B - y + r;
      const XL = L - x - r;
      const XR = R - x + r;
      //当光标在盒子里
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
      // 当光标超出盒子反应范围
      if (YT > 0 || XL > 0 || YB < 0 || XR < 0) {
        (tds[index] as HTMLElement).style.backgroundImage = "";
      } else { // 当光标在盒子反应范围内
        const xPx = x - L;
        const yPx = y - T;
        if (YT < 0 && YT + r > 0) { //光标在上面
          if (XL < 0 && XL + r > 0) { //光标在左面
            var AB = Math.sqrt(((x - L) * (x - L) + (y - T) * (y - T)));
            var px = r - AB;
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(circle ${px}px at top left, #f7f7f7, transparent)`;
          } else if (XL + r < 0 && XR - r > 0) { //光标在正上面
            const pos = r - (T - y);
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
          } else if (XR > 0 && XR - r < 0) { //光标在右面
            var AB = Math.sqrt(((x - R) * (x - R) + (y - T) * (y - T)));
            var px = r - AB;
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(circle ${px}px at top right, #f7f7f7, transparent)`;
          }
        } else if (YT + r < 0 && YB - r > 0) { //在上与下之间                     
          if (XL < 0 && XL + r > 0) { //左
            const pos = r - (L - x);
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
          } else if (XR > 0 && XR - r < 0) {
            const pos = r - (x - R);
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
          }
        } else if (YB > 0 && YB - r < 0) { //光标在下面
          if (XL < 0 && XL + r > 0) { //光标在左面
            var AB = Math.sqrt(((x - L) * (x - L) + (y - B) * (y - B)));
            var px = r - AB;
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(circle ${px}px at bottom left, #f7f7f7, transparent)`;
          } else if (XL + r < 0 && XR - r > 0) { //光标在正下面
            const pos = r - (y - B);
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(${pos}px circle at ${xPx}px ${yPx}px, #f7f7f7, transparent)`;
          } else if (XR > 0 && XR - r < 0) { //光标在右面
            var AB = Math.sqrt(((x - R) * (x - R) + (y - B) * (y - B)));
            var px = r - AB;
            (tds[index] as HTMLElement).style.backgroundImage = `radial-gradient(circle ${px}px at bottom right, #f7f7f7, transparent)`;
          }
        }
      }
    }
  }, true)
}