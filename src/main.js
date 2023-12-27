// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'
//
// createApp(App).mount('#app')

import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import BackgroundLayout from './layout/BackgroundLayout.vue';

const app = createApp(App);

app.component('BackgroundLayout', BackgroundLayout);

app.mount('#app');
