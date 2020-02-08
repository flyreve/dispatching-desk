<template>
  <div class="login-layout app-container">
    <div class="header">
      <slot name="header-left"></slot>
      <div class="header-right">
        <span>服务平台</span>
        <el-divider direction="vertical"></el-divider>
        <span>帮助</span>
        <el-divider direction="vertical"></el-divider>
        <span>公司网站</span>
        <el-divider direction="vertical"></el-divider>
        <span>公司邮箱</span>
        <el-divider direction="vertical"></el-divider>
        <span>简体中文</span>
      </div>
    </div>
    <slot name="content"></slot>
    <div class="footer" align="center">
      xxx信息技术（集团）有限公司
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginLayout',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  $header-h: 35px;
  $footer-h: 50px;
  .login-layout {
    background: #D7EEFE;
    position: relative;
    box-sizing: border-box;
    .header {
      height:  $header-h;
      line-height: $header-h;
      padding: 0 10px;
      font-size: 10px;
      position: relative;
      .header-right {
        position: absolute;
        right: 10px;
      }
    }
    .footer {
      height: $footer-h;
      line-height: $footer-h;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #000;
    }
  }
</style>
