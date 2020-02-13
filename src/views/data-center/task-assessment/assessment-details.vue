<template>
  <div class="assessment-details width-page">
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
        <el-button type="danger" round icon="el-icon-s-order" class="ml-10" @click="visibleInfo = true">查看记录</el-button>
        <el-button type="danger" round icon="el-icon-edit" @click="visibleGrade = true">打分</el-button>
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

    <!--任务记录-->
    <el-dialog
            title="任务记录详情"
            :visible.sync="visibleInfo"
            width="60%"
            top="25vh">
      <div class="flex record-info">
        <div>
          <p class="text">上报人  ：xxx(成员备注名)</p>
          <p class="text">所属部门  ：xxx(部门名称)</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div>
          <p class="text">上报人：xxx(成员备注名)</p>
          <p class="text">所属部门：xxx(部门名称)</p>
        </div>
        <el-divider direction="vertical"></el-divider>
        <div>
          <p class="text">上报人：xxx(成员备注名)</p>
          <p class="text">所属部门：xxx(部门名称)</p>
        </div>
      </div>
      <div class="el-dialog__title" style="padding-top: 20px">任务记录统计</div>
      <div class="data-type">
        <div class="type-item">图片：9</div>
        <div class="type-item">视频：9</div>
        <div class="type-item">视频：9</div>
      </div>
      <div class="pic-list">
        <div class="pic-item" v-for="(i, j) in 8" :key="j + 'p'">
          <div class="wrap">
            <div class="pic"></div>
            <div class="fz-10 text">2019年11月21日17:20</div>
            <div class="fz-12 text text-omit">上报地点：盘龙区白塔路星耀大厦</div>
          </div>
        </div>
      </div>
    </el-dialog>

    <!--任务打分-->
    <el-dialog title="任务打分"
               :visible.sync="visibleGrade"
               width="30%"
               top="25vh">
        <strong>任务名称：</strong>
        <div class="remarks flex form-item">
          科室管理职责
          <el-input placeholder="输入分值" style="width: 85px"></el-input>
        </div>
        <div class="mt-20"><strong>任务项目名称：</strong></div>
        <div class="remarks flex form-item">安全生产目标<el-input placeholder="输入分值" style="width: 85px"></el-input></div>
        <div class="remarks flex form-item">安全生产责任制<el-input placeholder="输入分值" style="width: 85px"></el-input></div>
        <div class="remarks flex form-item">岗位职责<el-input placeholder="输入分值" style="width: 85px"></el-input></div>
        <div class="remarks flex form-item">工作标准健全完善<el-input placeholder="输入分值" style="width: 85px"></el-input></div>
      <div slot="footer" align="center">
        <el-button type="primary" size="large">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'assessment-details',
    data() {
      return {
        visibleInfo: false,
        visibleGrade: false
      }
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
  .assessment-details {
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
  .assessment-details {
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
    .data-type {
      margin: 10px 0 10px 0;
      display: flex;
      .type-item {
        color: #ADB1C9;
        line-height: 18px;
        padding-left: 25px;
        position: relative;
        margin-right: 20px;
        &:before {
          content: '';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #5F5F5F;
          position: absolute;
          left: 0px;
        }
      }
      .type-item:nth-of-type(1) {
        &:before {
          background: #4F4DA5
        }
      }
      .type-item:nth-of-type(2) {
        &:before {
          background: #6A73CA
        }
      }
      .type-item:nth-of-type(3) {
        &:before {
          background: #6ED0F6
        }
      }

    }
    .record-info {
      .text {
        line-height: 24px;
      }
    }
    .pic-list {
      display: flex;
      flex-wrap: wrap;
      .pic-item {
        width: 25%;
        .wrap {
          text-align: center;
          padding: 10px 5px;
          box-sizing: border-box;
          width: 100%;
          .pic {
            margin: 0 auto;
            background: #ccc;
            border-radius: 4px;
            width: 100px;
            height: 50px;
          }
          .text {
            line-height: 20px;
          }
        }
      }

    }
    .form-item {
      line-height: 50px;
    }
  }
</style>
