/* eslint-disable */
import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'
import TimePicker from "vue-timepicker";

import ElementUI from "element-ui";

// Plugins
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App'
import VueI18n from 'vue-i18n'
// router setup
import routes from './routes/routes'

// library imports
import Chartist from 'chartist'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/sass/paper-dashboard.scss'
import 'es6-promise/auto'
import "element-ui/lib/theme-chalk/index.css";

//Calendar
var Calendar = require('./Calendar.vue').default;
var messages = require('./locale').default;
module.exports =  {
    Calendar:Calendar,
    messages: messages
};

// plugin setup
Vue.use(VueRouter)
Vue.use(GlobalComponents)
Vue.use(vClickOutside)
Vue.use(Notifications)
Vue.use(SideBar)
Vue.use(VueFire)
Vue.use(ElementUI);
Vue.use(VueI18n);
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'active'
})

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
  get () {
    return this.$root.Chartist
  }
})

window.i18n = new VueI18n({
  locale: 'en',
  messages
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  data: {
    Chartist: Chartist
  },
   i18n,
  template: '<App/>',
  components: {App}
})
