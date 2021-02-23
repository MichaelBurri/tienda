import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false
import Notifications from 'vue-notification'

Vue.use(Notifications)
Vue.use(firestorePlugin)
new Vue({
  render: h => h(App),
}).$mount('#app')
