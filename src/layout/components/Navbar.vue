<template>
  <div class="components-navbar">
    <div class="left">
      <div class="circular"></div>
      <div class="strip"></div>
    </div>
    <div class="right">
      <div class="right-item avatar-item">
        <el-avatar shape="circle" size="medium" :src="squareUrl"></el-avatar>
        <div class="inlineBlock" align="left" style="margin-left: 10px">
          <span>10011001</span><br>
          <span><i class="el-icon-check status-on"></i>在线</span>
        </div>
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="right-item">
       <i class="el-icon-eleme"></i><br>
        地图管理
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="right-item">
       <i class="el-icon-eleme"></i><br>
        设置
      </div>
      <el-divider direction="vertical"></el-divider>
      <div class="right-item" @click="handleLoginOut">
        <i class="el-icon-eleme"></i><br>
        退出
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      }
    },
    mounted() {
    },
    methods: {
      handleLoginOut() {
        this.$router.push({ name: 'Login'})
      }
    }
  }
</script>

<style lang="scss">
  .components-navbar {
    .el-divider--vertical {
      height: 4rem
    }
  }
</style>
<style scoped lang="scss">
  .components-navbar {
    background: #fff;
    height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .right, .left {
      display: flex;
      align-items: center;
    }
    .left {
      .circular {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #E9D2B6;
      }
      .strip {
        margin-left: 10px;
        height: 30px;
        width: 300px;
        border-radius: 6px;
        background: #4BABFF;
      }
    }
    .right {
      .right-item {
        padding: 0 5px;
        text-align: center;
        cursor: pointer;
        i {
          font-size: 26px;
        }
      }
      .avatar-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-icon-check {
          border-radius: 50%;
          font-size: 10px;
          margin-right: 4px;
        }
        .status-on {
          background: #5AFF4F;
          color: #fff;
        }
      }
    }
  }
</style>
