import { App } from "vue";
import { vShake } from "./directives/v-shake";

const install = (app: App) => {
  app.directive("shake", vShake);
};

export default { install };
