import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// Add font awesome solid icons
library.add(faRss, faFacebookSquare, faInstagram, faTwitter);

const app = createApp(App);
// Set config performance to true in order to allow Vue DevTools to show in browwer
app.config.performance = true;
app.component('fa', FontAwesomeIcon);
app.use(store).use(router).mount('#app');
