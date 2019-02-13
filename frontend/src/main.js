import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch, faCaretLeft, faCaretRight, faSave,
  faSurprise, faSadCry, faGrinBeam, faAngry, faGrimace,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueCharts from 'vue-chartjs';
import { Line } from 'vue-chartjs';

import Vue from 'vue';
import Trend from 'vuetrend';
import Bars from 'vuebars';
import App from './App.vue';
import router from './router';
import store from './store';
import './scss/styles.scss';

library.add(faSearch, faCaretLeft, faCaretRight, faSave,
  faSurprise, faSadCry, faGrinBeam, faAngry, faGrimace);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Bars);
Vue.use(Trend);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
