import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss';
import Demo from '../components/lib/demo/index';
Vue.use(Demo);

import myCard from '../components/lib/card/index';
Vue.use(myCard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
