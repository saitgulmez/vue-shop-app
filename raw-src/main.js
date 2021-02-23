import { createApp } from 'vue';
import { createStore } from 'vuex';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

const store = createStore({
	state() {
		return {

		}
	}
});

app.use(router);

app.component('base-badge', BaseBadge);

app.mount('#app');
