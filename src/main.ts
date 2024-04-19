import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import uiComponents from "@/components/ui";
import iconsComponents from "@/components/icons";

const app = createApp(App);

[...uiComponents, ...iconsComponents].forEach((component) =>
  app.component(component.name, component)
);

app.use(store).mount("#app");
