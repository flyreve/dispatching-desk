<template>
  <div class="layout app-container">
    <navbar />
    <div class="content">
      <side-menu />
      <sidebar />
      <div class="app-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar"
  import SideMenu from "./components/SideMenu"
  import Sidebar from "./components/Sidebar/index"
  export default {
    name: 'index',
    components: {
      Navbar,
      SideMenu,
      Sidebar,
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .layout {
    position: relative;
    .content {
      position: relative;
      top: 60px;
      height: calc(100% - 60px);
      background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1580975047503&di=fd7eae6ca2310693a439fa80b84f05b6&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161229%2F9c23521a334e486aa1f03a6a76db68ce_th.jpg");
      .app-main {
        float: left;
        width: 1px;
        height: calc(100% - 60px);
        /*margin-left: ;*/
        /*position: absolute;*/
        /*left: 150px;*/
        /*top: 60px;*/
        /*right: 0;*/
        /*bottom: 0;*/
      }
    }
  }
</style>
