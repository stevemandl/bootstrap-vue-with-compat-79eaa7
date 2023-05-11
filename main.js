import Vue, { createApp } from '@vue/compat';
import BootstrapVueNext from 'bootstrap-vue-next';
import HelloBootstrap from './components/HelloBootstrap.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

Vue.use(BootstrapVueNext);
const app = createApp(HelloBootstrap);
app.mount('#app');
