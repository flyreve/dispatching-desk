import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/default.scss'
import '@/styles/element-ui.scss'
import '@/styles/page.scss'

Vue.use(ElementUI, {
  size: 'mini' // set element-ui default size
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
