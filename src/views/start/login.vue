<template>
  <div class="login-container app-container">
    <start-layout>
      <div class="form-box" slot="content">
        <div class="box-header">登录系统</div>
        <el-form label-width="57px" class="box-form">
          <el-form-item label="账号">
            <el-input v-model="loginForm.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="loginForm.code" style="width: 60%"></el-input>
            <div class="inlineBlock code pointer">123</div>
          </el-form-item>
          <div style="overflow: hidden; margin-bottom: 10px">
            <el-checkbox v-model="remember" class="fl">记住密码</el-checkbox>
            <span class="pointer fr">忘记密码？</span>
          </div>
          <el-button type="primary" size="medium" round style="width: 100%" @click="handleLogin">登录</el-button>
        </el-form>
      </div>
    </start-layout>
  </div>
</template>

<script>
  import StartLayout from './component/StartLayout'
  export default {
    name: 'Login',
    components: { StartLayout },
    data() {
      return {
        remember: '',
        loginForm: {
          name: '',
          password: '',
          code: ''
        }
      }
    },
    mounted() {
      console.log(this.$router)
    },
    methods: {
      handleLogin() {
        this.$router.push({ name: 'SystemicSelection' })
      }
    }
  }
</script>

<style lang="scss">
  .login-container {
    .el-form-item {
      margin-bottom: 10px;
    }
  }
</style>

<style scoped lang="scss">
  .login-container {
    .form-box {
      width: 350px;
      background: #fff;
      border-radius: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -175px;
      transform: translateY(-50%);
      &:before {
        content: "";
        background-image: linear-gradient(rgba(255,255,255, .9), rgba(255,255,255, 0));
        border-radius: 10px;
        position: absolute;
        height: 80px;
        width: 350px;
        bottom: -85px;
        left: 0px;
      }

      .box-header {
        font-size: 18px;
        font-weight: 500;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #3F78D3;
        border-bottom: 2px dashed #C3C6CB;
      }

      .box-form {
        width: 250px;
        margin: auto;
        padding: 10px 0 20px 0;

        .code {
          width: 30%;
          height: 28px;
          background: #ccc;
          margin-left: 14px;
        }
      }
    }
  }
</style>
