import { createApp } from 'vue';
import store from './store/index.js'
import router from './router.js';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

import BaseBadge from './components/ui/BaseBadge.vue';
import BaseCard from './components/ui/BaseCard.vue';
import TheCollapse from './components/ui/TheCollapse.vue';

const app = createApp(App)




app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('the-collapse', TheCollapse);

app.use(router);
app.use(store);
app.mount('#app');
