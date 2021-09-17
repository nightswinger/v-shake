import { Directive } from "vue";
import {
  getOptions,
  setEventListeners,
  setAnimation,
  removeAnimation,
} from "./utils";
import "./v-shake.css";

export const vShake: Directive = {
  mounted(el, { value }) {
    const options = getOptions(value);
    setEventListeners(el, options);
  },
  updated(el, { value }) {
    const options = getOptions(value);

    if (options.trigger === "manual") {
      if (options.shake) {
        setAnimation(el, options);
      } else {
        removeAnimation(el);
      }
    }
  },
};
