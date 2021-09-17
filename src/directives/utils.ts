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

  const triggerFnc = () => {
    el.style.setProperty("animation-name", `v-shake-${type}`);
    el.style.setProperty("animation-duration", "500ms");
  };
  el.addEventListener(triggerEvent, triggerFnc);
  el.addEventListener("animationend", () => removeAnimation(el));

  if (triggerEvent !== endEvent) {
    el.addEventListener(endEvent, () => removeAnimation(el));
  }
};

const setAnimation = (el: HTMLElement, { type }: any) => {
  el.style.setProperty("animation-name", `v-shake-${type}`);
  el.style.setProperty("animation-duration", "500ms");
};

const removeAnimation = (el: HTMLElement) =>
  el.style.setProperty("animation", null);

export { getOptions, setEventListeners, setAnimation, removeAnimation };
