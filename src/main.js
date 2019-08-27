import Vue from "vue";
import App from "./App.vue";

import { abilitiesPlugin, Can } from "@casl/vue";

Vue.use(abilitiesPlugin);
Vue.component("Can", Can);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
