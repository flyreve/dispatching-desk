<!--page: 任务区域-->
<template>
  <div class="task-area page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">任务区域</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="remarks fz-10 mt-5">已创建的任务区域</div>
      <div class="area-list mt-5">
        <div class="area-item" v-for="(i, j) in 9" :key="j + 'e'" @click="visibleInfo = true">
          xxxxx（任务区域名称）
        </div>
      </div>
      <el-pagination
              align="center"
              class="mt-5"
              small
              layout="prev, pager, next"
              :total="50">
      </el-pagination>
      <div align="center" class="mt-10">
        <el-button @click="visibleAdd = true">创建任务区域</el-button>
      </div>
    </el-card>

    <!--    选择区域-->
    <el-card class="dialog-2-card dialog" v-if="visibleInfo">
      <div slot="header">
        <span class="fz-16">xxxxx（任务区域名称）</span>
        <el-button class="close-btn" type="text" @click="visibleInfo = false"><i class="el-icon-close" /></el-button>
      </div>
      <span class="fz-10">00:00 - 00:00</span>
      <el-form class="mt-5" label-width="60px">
        <el-form-item label="修改名称">
          <el-input placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="修改时间">
          <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="日期"
                  style="width: 40%">
          </el-date-picker>
          -
          <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="日期"
                  style="width: 40%">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="mt-5">
        <el-button plain round type="primary" class="form-btn">修改范围</el-button>
        <el-button plain round type="danger" class="form-btn">删除范围</el-button>
      </div>
      <div class="flex" style="justify-content: space-around; margin-top: 20px">
        <el-button>保存</el-button>
      </div>
    </el-card>

    <!--    创建任务区域-->
    <el-card class="main-2-card dialog" v-if="visibleAdd">
      <div slot="header">
        <span class="fz-16">创建任务区域</span>
        <el-button class="close-btn" type="text" @click="visibleAdd = false"><i class="el-icon-close" /></el-button>
        <el-form class="mt-5" label-width="60px">
          <el-form-item label="编辑名称">
            <el-input placeholder="名称"></el-input>
          </el-form-item>
          <el-form-item label="设置时间">
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="日期"
                    style="width: 40%">
            </el-date-picker>
            -
            <el-date-picker
                    v-model="value1"
                    type="date"
                    placeholder="日期"
                    style="width: 40%">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="el-form-item mt-10">
        <i class="el-icon-house fz-16"></i>
        创建矩形围栏
      </div>
      <div class="el-form-item mt-10">
        <i class="el-icon-house fz-16"></i>
        创建圆形围栏
      </div>
      <div class="el-form-item mt-10">
        <i class="el-icon-house fz-16"></i>
        创建多边形围栏
      </div>
      <div class="el-form-item mt-10">
        <el-button round>创建线性轨迹围栏</el-button>
      </div>
      <div class="el-form-item mt-10">
        <el-button round>导入生成电子围栏</el-button>
      </div>
      <div class="footer">
        <el-button>完成</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'task-area',
    data() {
      return {
        searchKey: '',
        value1:  '',
        visibleInfo: false,
        visibleAdd: false
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .task-area {
    .dialog {
      .el-form-item {
        margin-bottom: 3px !important;
      }
      .el-input__inner {
        font-size: 10px!important;
        /*width: 25px!important;*/
        height: 19px !important;
        line-height: 19px!important;
        padding: 1px!important;
      }
      .el-input__icon {
        line-height: 20px;
      }
      .el-form-item__label {
        font-size: 12px !important;
      }
      .el-input--suffix .el-input__inner {
        padding-left: 17px!important;
      }
      .el-input--prefix .el-input__inner {
        padding-left: 17px!important;
      }
      .el-input__prefix {
        left: -3px!important;
      }
      .el-input {
        margin: 0 5px;
      }
    }
  }
</style>

<style scoped lang="scss">
  .task-area {
    .area-list {
      height: calc(100% - 124px);
      /*overflow-y: scroll;*/
      .area-item {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 5px 3px;
        border-bottom: 1px dashed #D0CECE;
        &:hover {
          background: #F0F0F0;
        }
      }
    }
    .form-btn {
      padding: 6px;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
    }
  }
</style>
