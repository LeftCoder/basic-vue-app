import Vue from 'vue';
import App from './App.vue';
import VModal from 'vue-js-modal'

import '../node_modules/bulma/css/bulma.css';

Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
