<!--page: 文档下发-->
<template>
  <div class="document-issuance page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">文档下发</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="flex mt-5">
        <el-date-picker type="date" placeholder="开始" style="width: 45%"></el-date-picker>
        -
        <el-date-picker type="date" placeholder="结束" style="width: 45%"></el-date-picker>
      </div>
      <div class="info-list mt-5">
        <div v-for="(i, j) in 5" :key="j + '1'" class="info-item" @click="visibleInfo = true">
          <div class="flex">
            <i class="el-icon-document fz-16"></i>
            <div class="pl-5">
              <p>xxxxx（标题）</p>
              <p class="fz-10 text-omit">创建时间：2019年6月20日22:17:14</p>
              <p class="fz-10 text-omit">创建人：xxxx（成员名称/10）</p>
            </div>
          </div>
          <div class="flex">
            <el-link :underline="false" @click="visibleInfo = true">
              <i class="el-icon-edit pointer fz-14 pl-5" />
            </el-link>
            <el-link :underline="false" type="danger">
              <i class="el-icon-delete pointer fz-14 pl-5" />
            </el-link>
          </div>
        </div>
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px" @click="visibleAdd = true">创建文档</el-button>
      </div>
    </el-card>

<!--    创建文档-->
    <el-card class="main-2-card" v-if="visibleAdd">
      <div class="fz-16" slot="header">
        创建文档
        <el-button class="close-btn" type="text" @click="visibleAdd = false"><i class="el-icon-close" /></el-button>
      </div>
      <span>标题</span>
      <el-input class="mt-5" v-model="searchKey" placeholder="输入标题"></el-input>
      <div class="mt-10">
        <el-link :underline="false"><i class="el-icon-plus"></i>添加标题</el-link>
      </div>
      <div class="document-list">
        <div class="document-item" v-for="(i, j) in 20" :key="j + 'd'">
          <i class="el-icon-document fz-22"></i>
          <div class="remarks fz-10">文件名：xxx</div>
          <el-link class="close-link" :underline="false" type="danger">
            <i class="el-icon-circle-close"></i>
          </el-link>
        </div>
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button>全部成员</el-button>
        <el-button>部分成员</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'document-issuance',
    data() {
      return {
        searchKey: '',
        visibleAdd: false
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .document-issuance {
    .main-1-card {
      width: 300px;
    }
    .main-2-card {
      left: 320px;
    }
    .info-list {
      height: calc(100% - 105px);
      overflow-y: scroll;
      .info-item {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px dashed #D0CECE;
        &:hover {
          background: #F9F9FA;
        }
      }
    }
    .voice-list {
      .voice-item {
        margin: 10px 0;
        cursor: pointer;
        width: 80px;
        height: 15px;
        line-height: 15px;
        background: #0650C6;
        border-radius: 7px;
        i {
          color: #fff;
        }
      }
    }
    .voice-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      left: 100px;
      bottom: 57px;
      background: #0650C6;
    }
    .card-footer {
      text-align: center;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 15px;
    }
    .document-list {
      height: calc(100% - 128px);
      margin-top: 10px;
      overflow-y: scroll;
      .document-item {
        padding-top: 10px;
        box-sizing: border-box;
        text-align: center;
        float: left;
        width: 25%;
        position: relative;
        .close-link {
          position: absolute;
          right: 0px;
          top:0px;
        }
      }
    }
  }
</style>
