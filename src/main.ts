import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";

import uiComponents from "@/components/ui";
import iconsComponents from "@/components/icons";
import sharedComponents from "@/components/shared";

const app = createApp(App);

const pinia = createPinia();

[...uiComponents, ...iconsComponents, ...sharedComponents].forEach(
  (component) => app.component(component.name, component)
);

app.use(pinia).mount("#app");
