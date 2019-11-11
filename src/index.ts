import { c2d } from "./util/c2d";
import bazier from "./bazier";

const animation = () => {
  c2d.clear();
  bazier.draw();
  requestAnimationFrame(animation);
};

requestAnimationFrame(animation);
