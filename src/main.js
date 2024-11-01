import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarLang from "quasar/lang/th";

import App from "./App.vue";
import router from "./router";

// Import icon libraries
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// import './assets/main.css'

createApp(App)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
    lang: quasarLang,
  })
  .use(router)
  .mount("#app");
