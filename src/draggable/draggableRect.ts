import rect from "../shape/rect";
import draggable from "../super/draggable";

export default class draggableRect extends draggable<rect> {
  private _shape: rect;
  constructor(x: number, y: number, w: number, h: number, color: string) {
    const _s = new rect(x, y, w, h, color);
    super(_s, (x: number, y: number) => {
      return (
        x >= _s.x && x <= _s.x + _s.width && y >= _s.y && y <= _s.y + _s.height
      );
    });
    this._shape = _s;
  }
}
