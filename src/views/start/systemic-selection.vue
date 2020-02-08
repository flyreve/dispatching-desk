<template>
  <div class="systemic-selection app-container">
    <start-layout>
      <div class="header-left pointer" slot="header-left" @click="handlePushRouter('Login')">
        <el-button type="primary" round icon="el-icon-back" style="padding: 0 10px; font-size: 20px" />
        <span style="font-size: 20px; margin-left: 10px">返回</span>
      </div>
      <div class="systemic-content" slot="content">
        <div class="box-item" @click="handlePushRouter('Test')">卡控履职</div>
        <div class="box-item" @click="handlePushRouter('department-manage')">作业监控</div>
      </div>
    </start-layout>
  </div>
</template>

<script>
  import StartLayout from './component/StartLayout'
  export default {
    name: 'SystemicSelection',
    components: { StartLayout },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      handlePushRouter(name) {
        this.$router.push({ name })
      }
    }
  }
</script>

<style scoped lang="scss">
 .systemic-selection {
   .header-left {
     height: 30px;
     display: flex;
     align-items: center;
     position: absolute;
     left: 20px;
     top: 20px;
     color: #fff;
   }
   .systemic-content {
     border-radius: 10px;
     position: absolute;
     top: 50%;
     left: 50%;
     margin-left: -175px;
     transform: translateY(-50%);
     display: flex;
     .box-item {
       background: #fff;
       margin: 8px;
       padding: 15px 20px;
       font-size: 30px;
       font-weight: 500;
       border-radius: 10px;
       position: relative;
       cursor: pointer;
       &:before {
         content: "";
         background-image: linear-gradient(rgba(255,255,255, .9), rgba(255,255,255, 0));
         border-radius: 10px;
         position: absolute;
         height: 50px;
         width: 100%;
         bottom: -55px;
         left: 0px;
       }
     }
   }
 }
</style>
