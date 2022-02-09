import Vue from 'vue'
import App from './App.vue'

// import '../components/css/demo.scss';
// import Demo from '../components/lib/demo/index';
// Vue.use(Demo);

// import '../components/css/card.scss';
// import Card from '../components/lib/card/index';
// Vue.use(Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
