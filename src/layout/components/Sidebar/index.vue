<template>
  <div class="components-sidebar">
      <el-menu
        :default-active="activeMenu"
        text-color="#fff"
        active-text-color="#fff"
        :unique-opened="true"
        :collapse-transition="false"
        mode="vertical"
        style="background-color: rgba(34,68,102,0)"
      >
        <el-menu-item-group>
          <sidebar-item v-for="route in sideRouters" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu-item-group>
      </el-menu>
  </div>
</template>

<script>
  import SidebarItem from "./SidebarItem"
  export default {
    name: 'Sidebar',
    components: { SidebarItem },
    data() {
      return {}
    },
    computed: {
      sideRouters() {
        return this.$store.state.sideRouters
      },

      activeMenu() {
        const route = this.$route
        const { meta, path } = route
        if (meta.activeMenu) {
          return meta.activeMenu
        }
        return path
      },
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .components-sidebar {
    .el-submenu__title, .el-menu-item {
      height: 22px!important;
      line-height: 22px!important;
      margin: 10px 0;
    }
    .el-submenu .el-menu-item {
      background-color: rgba(0,0,0,0);
      min-width: unset;
    }
    .el-menu {
      background-color: rgba(0,0,0,0);
      border: unset;
    }
    .el-submenu__icon-arrow {
      display: none;
    }
    .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:focus, .el-submenu__title:hover {
      outline: 0;
      background-color: rgba(255, 255, 255, 0.05) !important;
    }
    .el-menu-item.is-active {
      position: relative;
      background-color: rgba(255, 255, 255, 0.05)!important;
      &:before {
        content: "";
        width: 4px;
        height: 22px;
        position: absolute;
        background: #0B4DB2;
        left: 0;
      }
    }
  }
</style>
<style scoped lang="scss">
  .components-sidebar {
    height: calc(100% - 60px);
    float: left;
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 60px;*/
    /*bottom: 0;*/
    background: rgba(34,68,102,.95);
    width: 150px;
  }
</style>
