<template>
  <div class="task-details width-page">
    <div class="left">
      <h1 class="title flex" @click="goBack"  style="justify-content: left">
        <el-link :underline="false"><i class="el-icon-arrow-left fz-22"></i></el-link>
        <span class="ml-10 pointer">科室管理职责</span>
      </h1>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务类型：</span><span class="ml-5">日常任务</span>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">创建时间：</span><span class="ml-5">2020年1月2日</span>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">标签：</span><span class="ml-5"></span>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务项点：</span><span class="ml-5"></span>
        <el-button round class="ml-10">查看</el-button>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务负责人：</span><span class="ml-5">张三</span>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务成员：</span><span class="ml-5">张三，李四，王五...</span>
        <el-button round class="ml-10">查看</el-button>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">告警记录：</span><span class="ml-5">2条</span>
        <el-button round class="ml-10">查看</el-button>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务围栏：</span><span class="ml-5">xxxxx(任务围栏名称)</span>
        <el-button round class="ml-10">定位</el-button>
      </div>
      <div class="info-item">
        <i class="el-icon-menu"></i>
        <span class="ml-10">任务区域：</span><span class="ml-5">xxxxx(任务区域名称)</span>
        <el-button round class="ml-10">定位</el-button>
      </div>
    </div>
    <el-divider direction="vertical"></el-divider>
    <div class="right">
      <div class="flex util" style="justify-content: flex-end">
        <el-button type="danger" round icon="el-icon-s-order" class="ml-10">查看记录</el-button>
        <el-button type="danger" round icon="el-icon-download">下载</el-button>
        <el-button type="text" icon="el-icon-upload2">导出数据</el-button>
        <el-button class="close-btn" type="text" @click="goBack"><i class="el-icon-close" /></el-button>
      </div>
      <div class="chart-box">
        <el-progress :width="300" type="circle" :percentage="75"></el-progress>
        <br>
        <p class="mt-10 fz-16" style="padding: 20px 0">安全目标明确，安全生产责任制，岗位职责及工作标准健全完善。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'task-details',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
  .task-details {
    .el-divider--vertical {
      height: 100% !important;
    }
    .el-button {
      padding: 4px 8px!important;
    }
    /*.el-progress-circle {*/
    /*  width: 80%!important;*/
    /*  height: 100px;*/
    /*}*/
  }
</style>
<style scoped lang="scss">
  .task-details {
    display: flex;
    .left {
      width: 45%;
      height: 100%;
    }
    .right {
      flex: 1;
      .util {
        padding: 10px 0;
      }
    }
    .left {
      i {
        color: #0D4EB1;
      }
      .title {
        font-size: 22px;
        padding: 10px 0;
      }
      .info-item {
        font-size: 16px;
        padding: 10px 0;
      }
    }
    .chart-box {
      text-align: center;
      margin-top: 40px;
      width: 100%;
    }
  }
</style>
