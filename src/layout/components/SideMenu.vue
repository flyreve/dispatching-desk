<!--component: 顶部菜单-->
<template>
  <div class="components-menu">
    <div v-for="(item, index) in navMenuList" :key="index + 'm'" class="menu-item" :class="navMenuActive === item.name ? 'menu-active' : ''" @click="handleChangeMenu(item)">
      <div class="wrap">
        <div class="icon"><i :class="item.icon" /></div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
    <div class="menu-item">
      <div class="wrap">
        <div class="icon"><i class="el-icon-more" /></div>
        <div class="name">添加</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SideMenu',
  data() {
    return {}
  },
  computed: {
    ...mapGetters([ 'navMenuList', 'navMenuActive', 'sideMenuList' ])
  },
  mounted() {},
  methods: {
    ...mapActions('menu', ['setMenuActive']),
    handleChangeMenu(menu) {
      this.setMenuActive(menu.name)
      this.$router.push({ name: this.sideMenuList[0].children[0].name })
    }
  }
}
</script>

<style scoped lang="scss">
  .components-menu {
    background: rgba(34,68,102,.95);
    height: 60px;
    box-shadow:0px 2px 2px #333333;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
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
        font-size: 10px;
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
