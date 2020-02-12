import { cardControlPerformance, jobMonitoring } from "@/router/menu"

const state = {
  // 导航菜单
  navMenuList: [],
  // 导航菜单活动item
  navMenuActive: '',
  // 侧边栏菜单
  sideMenuList: []
}

const mutations = {
  SET_NAV_MENUS(state, menus) {
    state.navMenuList = menus
  },
  SET_NAV_MENU_ACTIVE(state, name) {
    state.navMenuActive = name
  },
  SET_SIDE_MENUS(state, menus) {
    state.sideMenuList= menus
  }
}

const actions = {
  setNavMenus({ commit }, type) {
    commit('SET_NAV_MENUS', type ? jobMonitoring : cardControlPerformance)
  },

  setMenuActive({ commit, state }, name) {
    commit('SET_NAV_MENU_ACTIVE', name)
    let menu = state.navMenuList.find(i => i.name === name)
    commit('SET_SIDE_MENUS', menu.routers)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
