import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import ElementUI from 'element-ui'
import BaiduMap from 'vue-baidu-map'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/default.scss'
import '@/styles/element-ui.scss'
import '@/styles/page.scss'

Vue.use(ElementUI, {
  size: 'mini' // set element-ui default size
})

// 引入百度地图
Vue.use(BaiduMap, {
  ak: 'FZQ09sWbQMRsKA4ekEaD0HbKTlXRfboq'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
