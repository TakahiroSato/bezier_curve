import {canvas2d} from "@takahiro_sato/canvas2d";

const canvasId = "canvas2d";
const c2d = new canvas2d(canvasId);

const event = {
  addMouseDownEvent: (callback: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mousedown", callback);
  },
  addMouseMoveEvent: (callback: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mousemove", callback);
  },
  addMouseUpEvent: (callBack: EventListener) => {
    document.getElementById(canvasId)?.addEventListener("mouseup", callBack);
  }
}

export {
  c2d,
  event
};

