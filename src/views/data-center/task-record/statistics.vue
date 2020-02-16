<!--page: 统计-->
<template>
  <div class="statistics-container width-page">
    <div class="page-header">任务记录统计</div>
    <div class="data-type">
      <div class="type-item">图片：9999</div>
      <div class="type-item">视频：9999</div>
      <div class="type-item">文档：9999</div>
    </div>
    <div class="filter-content">
      <div class="flex">
        <el-input
                style="width: 120px; margin-right: 10px"
                v-model="searchKey"
                placeholder="搜索"
                size="mini"
        >
          <i slot="prefix" class="el-input__icon el-icon-search" />
        </el-input>
        <el-date-picker
                style="width: 90px; margin: 0 5px"
                v-model="value"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        --
        <el-date-picker
                style="width: 90px; margin: 0 5px"
                v-model="value"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <el-button type="primary" round icon="el-icon-check" class="ml-10">检索</el-button>
      </div>
      <div class="flex">
        <el-checkbox v-model="checked" class="ml-10">全选</el-checkbox>
        <el-button type="danger" round icon="el-icon-delete" class="ml-10">删除</el-button>
        <el-button type="danger" round icon="el-icon-download">下载</el-button>
        <el-button type="text" icon="el-icon-upload2">导出数据</el-button>
      </div>
    </div>
    <div class="fr" style="padding-right: 10px">
      <!--任务弹窗-->
      <el-popover
              slot="header"
              placement="bottom"
              width="150"
              trigger="click">
        <div class="popover-box">
          <div class="fz-16">选择任务</div>
          <el-input v-model="searchKey" placeholder="搜索" size="mini" class="mt-10">
            <i slot="prefix" class="el-input__icon el-icon-search" />
          </el-input>
          <div v-if="!visitAll" class="person-list">
            <el-checkbox-group v-model="checkedPerson">
              <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
                <div class="flex">
                  <el-checkbox class="inlineBlock" />
                  <div class="pl-5">XXXX（任务名称）</div>
                </div>
              </div>
            </el-checkbox-group>
          </div>
          <div class="flex mt-10">
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</el-checkbox>
            共选择{{ checkedPerson.length }}人
          </div>
          <div align="center" class="mt-10">
            <el-button>确认</el-button>
          </div>
        </div>
        <el-link :underline="false" slot="reference">
          任务 <i class="el-icon-arrow-down fz-10"></i>
        </el-link>
      </el-popover>
    </div>
    <commit-bar></commit-bar>
  </div>
</template>

<script>
  import CommitBar from "./components/CommitBar"
export default {
  name: 'Statistics',
  components: { CommitBar },
  data() {
    const personOptions = ['1', '2', '3', '4']
    return {
      visitAll: true,
      value: '',
      checked: '',
      searchKey: '',
      checkedPerson: ['1', '2'],
      members: personOptions,
      checkAll: false,
      isIndeterminate: true
    }
  },
  mounted() {
    // this.renderChart(data, options)
  },
  methods: {}
}
</script>

<style lang="scss">
  .popover-box {
    .filter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      button {
        flex: 1;
        padding: 2px 10px;
      }
    }
    .person-list {
      /*height: calc(100% - 125px);*/
      overflow-y: scroll;
      .person-item {
        display: flex;
        justify-content: space-between;
        padding: 5px
      }
    }
  }
  .statistics-container{
    .el-input__inner {
      font-size: 10px!important;
      height: 25px !important;
      line-height: 19px!important;
      padding: 1px!important;
    }
    .el-input__icon {
      line-height: 26px;
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
    .el-button {
      padding: 4px 8px!important;
    }
    .el-divider--horizontal {
      margin: 13px 0!important;
    }
    .el-divider--vertical {
      height: 3em;
    }
  }
</style>

<style scoped lang="scss">
  .statistics-container {
    .data-type {
      margin: 10px 0 20px 0;
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
    .filter-content {
      display: flex;
      align-items: center;
      margin: 10px 0;
      justify-content: space-between;
    }
    .video-box {
      width: 100%;
      .video-item {
        padding: 10px;
        text-align: center;
        float: left;
        width: 135px;
        cursor: pointer;
        .remarks {
          color: #606266;
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
  }
</style>
