<template>
  <div class="components-menu">
    <div class="menu-item" :class="activeMenu === item.name ? 'menu-active' : ''" v-for="(item, index) in menuList" :key="index + 'm'" @click="handleChangeMenu(item)">
      <div class="wrap">
        <div class="icon"><i :class="item.icon"></i></div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="wrap">
        <div class="icon"><i class="el-icon-more"></i></div>
        <div class="name">添加</div>
      </div>
    </div>
  </div>
</template>

<script>
  import intercomRoutes from '@/router/modules/intercom'
  import dataRoutes from '@/router/modules/data'
  export default {
    name: 'SideMenu',
    data() {
      return {
        menuList: [
          {
            icon: 'el-icon-s-help',
            name: '数据中心',
            routers: dataRoutes
          },  {
            icon: 'el-icon-s-help',
            name: '任务管理',
            routers: []
          },  {
            icon: 'el-icon-s-help',
            name: '告警中心',
            routers: []
          },  {
            icon: 'el-icon-s-help',
            name: '通知中心',
            routers: []
          },  {
            icon: 'el-icon-s-help',
            name: '位置管理',
            routers: []
          },  {
            icon: 'el-icon-s-help',
            name: '和对讲',
            routers: intercomRoutes
          },

        ]
      }
    },
    computed: {
      activeMenu() {
        return this.$store.state.currentActiveMenu
      }
    },
    mounted() {
    },
    methods: {
      handleChangeMenu(menu) {
        this.$store.dispatch('setMenu', menu.name)
        this.$store.dispatch('setSideRouters', menu.routers)
      }
    }
  }
</script>

<style scoped lang="scss">
  .components-menu {
    background: rgba(34,68,102,.95);
    height: 60px;
    box-shadow:0px 2px 2px #333333;
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 0;*/
    /*right: 0;*/
    /*z-index: 9;*/
    display: flex;
    .menu-item {
      height: 100%;
      padding: 0 10px;
      margin: 0 5px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      &:hover:before {
        content: "";
        width: 100%;
        height: 4px;
        position: absolute;
        left: 0;
        bottom: -1px;
        background: #0B4DB2;
      }
      .icon {
        font-size: 28px;
      }
      .name {
        font-size: 12px;
      }
    }
    .menu-active:before {
      content: "";
      width: 100%;
      height: 4px;
      position: absolute;
      left: 0;
      bottom: -1px;
      background: #0B4DB2;
    }
  }
</style>
