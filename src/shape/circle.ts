import { c2d } from "../util/c2d";
import drawpoint from "../super/drawpoint";

export default class circle extends drawpoint {
  private color: string;
  private _radius: number;
  public get radius(): number {
    return this._radius;
  }
  constructor(x: number, y: number, radius: number, color: string) {
    super(x, y);
    this._radius = radius;
    this.color = color;
  }
  public draw() {
    c2d.fillCircle({
      cx: this.x,
      cy: this.y,
      r: this.radius,
      color: this.color
    });
  }
}
