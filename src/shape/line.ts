import { c2d } from "../util/c2d";
import { draw } from "../interfaces";
import { vec2 } from "@takahiro_sato/canvas2d";

export default class line implements draw {
  public points: vec2[];
  private width: number;
  private color: string;
  constructor(points: vec2[], width: number, color: string) {
    this.points = points.map(p => p);
    this.width = width;
    this.color = color;
  }
  public add(v: vec2) {
    this.points.push(v);
  }
  public draw() {
    c2d.drawLines(this.points, {
      lineWidth: this.width,
      color: this.color
    });
  }
}