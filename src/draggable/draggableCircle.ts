import circle from "../shape/circle";
import draggable from "../super/draggable";

export default class draggableCircle extends draggable<circle> {
  private _shape: circle;
  constructor(x: number, y: number, radius: number, color: string) {
    const _s = new circle(x, y, radius, color);
    super(_s, (x:number, y:number) => {
      return (
        Math.pow(_s.x - x, 2) + Math.pow(_s.y - y, 2) <=
        Math.pow(_s.radius + 5, 2)
      );
    });
    this._shape = _s;
  }
}
