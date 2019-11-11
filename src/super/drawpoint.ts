import { draw } from "../interfaces";
import { vec2 } from "@takahiro_sato/canvas2d";

export default abstract class drawpoint extends vec2 implements draw {
  constructor(x: number, y: number) {
    super(x, y)
  }
  public abstract draw(): void;
}
