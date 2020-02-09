import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

const store = new Vuex.Store({
  state: {
    // 头部菜单
    currentActiveMenu: '和对讲',
    // 当前菜单对应路由
    sideRouters: []
  },

  mutations: {
    SET_CURRENT_MENU(state, menu) {
      state.currentActiveMenu = menu
    },
    SET_SIDE_ROUTERS(state, routers) {
      state.sideRouters = routers
    }

  },
  actions: {
    setMenu({ commit }, menu) {
      commit('SET_CURRENT_MENU', menu)
    },
    setSideRouters({ commit }, routers) {
      commit('SET_SIDE_ROUTERS', routers)
    }
  },
  plugins: [vuexLocal.plugin]
})

export default store
