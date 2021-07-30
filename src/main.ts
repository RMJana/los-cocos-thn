import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);
// Set config performance to true in order to allow Vue DevTools to show in browwer
app.config.performance = true;
app.use(store).use(router).mount('#app');
