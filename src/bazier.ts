import draggableCircle from "./draggable/draggableCircle";
import line from "./shape/line";
import { vec2 } from "@takahiro_sato/canvas2d";
import circle from "./shape/circle";

const points = [
  new draggableCircle(100, 500, 15, "#0000ff"),
  new draggableCircle(100, 250, 15, "#0000ff"),
  new draggableCircle(100, 100, 15, "#0000ff"),
  new draggableCircle(550, 100, 15, "#0000ff"),
  new draggableCircle(900, 100, 15, "#0000ff"),
  new draggableCircle(900, 250, 15, "#0000ff"),
  new draggableCircle(900, 500, 15, "#0000ff"),
];

const calc = (pos: vec2[], t:number) : vec2 => {
  if (pos.length === 1) return pos[0];
  const next: vec2[] = [];
  pos.reduce((pre, cur) => {
    next.push(new vec2(t*pre.x+(1-t)*cur.x, t*pre.y+(1-t)*cur.y));
    return cur;
  })
  return calc(next, t);
}

const draw = () => {
  let l = new line([], 2, "#ff0000");
  points.map(p => {
    l.add(p.obj);
  });
  l.draw();
  points.map(p => {
    p.obj.draw();
  });

  let bez = new line([], 1, "#ffaaaa");
  for (let t = 0; t <= 1; t += 0.02) {
    const p = calc(points.map(p => p.obj), t);
    bez.add(p);
    (new circle(p.x, p.y, 1, "#0000aa")).draw();
  }
  bez.draw();
};

export default {
  draw: draw
};
