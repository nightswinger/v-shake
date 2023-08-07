import { generateKeyframes } from "./keyframes";

const defaultOptions = {
  trigger: "hover",
  type: "default",
  shake: null,
};

const getOptions = (options: any) => {
  if (typeof options === "undefined") return defaultOptions;

  if (typeof options === "string") {
    return {
      ...defaultOptions,
      trigger: options,
    };
  }

  if (typeof options === "object") {
    return {
      trigger: options.trigger || defaultOptions.trigger,
      type: options.type || defaultOptions.type,
      shake: options.shake || defaultOptions.shake,
    };
  }

  return defaultOptions;
};

const setEventListeners = (el: HTMLElement, { trigger, type }: any) => {
  let triggerEvent = "";
  let endEvent = "";

  switch (trigger) {
    case "hover":
      triggerEvent = "mouseenter";
      endEvent = "mouseleave";
      break;
    case "click":
      triggerEvent = "click";
      endEvent = "click";
  }

  if (!triggerEvent || !endEvent) return;

  const keyframes = generateKeyframes(type);

  el.addEventListener(triggerEvent, () => {
    if (isInlineElement(el)) {
      el.style.display = 'inline-block';
    }
    el.animate(keyframes, { duration: 500 });
  });
  el.addEventListener("animationend", () => removeAnimation(el));

  if (triggerEvent !== endEvent) {
    el.addEventListener(endEvent, () => removeAnimation(el));
  }
};

const setAnimation = (el: HTMLElement, { type }: any) => {
  el.style.setProperty("animation-name", `v-shake-${type}`);
  el.style.setProperty("animation-duration", "500ms");
};

const removeAnimation = (el: HTMLElement) => {
  el.style.setProperty("animation", null);
}

const isInlineElement = (el: HTMLElement) => 
  window.getComputedStyle(el)['display'] === 'inline';

export { getOptions, setEventListeners, setAnimation, removeAnimation };
