import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';

// Import Vuetify styles

const app = createApp(App);

app.use(router);
app.mount('#app');
