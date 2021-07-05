import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/index.js';
import { createGtm } from '@gtm-support/vue-gtm';
import '@/index.css';

const app = createApp(App);

app.use(router);

if (process.env.NODE_ENV === 'production') {
  app.use(
    createGtm({
      id: 'GTM-WM527Q7',
      debug: false,
      vueRouter: router,
    })
  );
}

app.mount('#app');
