import {event} from "../util/c2d";
import drawpoint from "./drawpoint";

export default class draggable<T extends drawpoint> {
  public obj: T;
  public isDrag: boolean;
  constructor(obj: T, detectTouchFunc: Function) {
    this.obj = obj;
    this.isDrag = false;
    event.addMouseDownEvent(e => {
      const _e: MouseEvent = <MouseEvent>e;
      this.isDrag = detectTouchFunc(_e.offsetX, _e.offsetY);
    });
    event.addMouseMoveEvent(e => {
      if (this.isDrag) {
        const _e: MouseEvent = <MouseEvent>e;
        this.obj.x = _e.offsetX;
        this.obj.y = _e.offsetY;
      }
    });
    event.addMouseUpEvent(e => {
      this.isDrag = false;
    })
  }
}