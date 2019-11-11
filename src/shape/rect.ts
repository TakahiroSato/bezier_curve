import { c2d } from "../util/c2d";
import drawpoint from "../super/drawpoint";

export default class rect extends drawpoint {
  private color:string;
  private _width: number;
  private _height: number;
  get width(): number {
    return this._width;
  }
  get height(): number {
    return this._height;
  }
  constructor(x:number, y:number, w:number, h:number, color:string) {
    super(x, y);
    this._width = w;
    this._height = h;
    this.color = color;
  }
  public draw() {
    c2d.fillRect({
      x: this.x,
      y: this.y,
      w: this._width,
      h: this._height,
      color: this.color,
    })
  }
}