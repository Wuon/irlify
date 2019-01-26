import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch, faCaretLeft, faCaretRight, faSave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import Trend from 'vuetrend';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/styles.scss';


library.add(faSearch, faCaretLeft, faCaretRight, faSave);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Trend);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
