<!--page: 任务告警-->
<template>
  <div class="task-alarm page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">任务告警</span>
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
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(i, j) in 5" :key="j + '1'" class="info-item" @click="visibleInfo = true">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">
                <strong>防溜检查</strong>
                <p class="fz-10 text-omit">告警类型：任务告警</p>
                <p class="fz-10 text-omit">创建时间：2019年6月20日22:17:14</p>
                <p class="fz-10 text-omit">告警原因：任务超时/任务未完成/离开任务区域</p>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="flex">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px">标为已读</el-button>
      </div>
    </el-card>

    <!--   告警详情-->
    <el-card class="dialog-2-card" v-if="visibleInfo">
      <div class="fz-16" slot="header">
        告警详情
        <el-button class="close-btn" type="text" @click="visibleInfo = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="mt-5 flex" style="color: #0650C6">
        <div>防溜检查</div>
        <div class="fz-22 pointer" @click="visiblePosition = true"><i class="el-icon-location-outline"></i></div>
      </div>
      <div class="mt-25" style="margin-bottom: 20px; line-height: 17px">
        <p>告警类型：任务告警</p>
        <p>告警时间：2019年6月20日22:17:14</p>
        <p>告警原因：1，张三任务超时</p>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'task-alarm',
    data() {
      const personOptions = ['1', '2', '3', '4']
      return {
        searchKey: '',
        visitAll: true,
        visibleInfo: false,
        checkedPerson: ['1', '2'],
        members: personOptions,
        checkAll: false,
        isIndeterminate: true
      }
    },
    mounted() {
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedPerson = val ? this.members : []
        this.isIndeterminate = false
      },
      handleCheckedChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.members.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.members.length
      }
    }
  }
</script>

<style scoped lang="scss">
  .task-alarm {
    .main-1-card {
      width: 300px;
    }
    .main-2-card {
      left: 320px;
    }
    .dialog-2-card {
      left: 320px;
    }
    .dialog-3-card {
      left: 580px;
    }
    .info-list {
      height: calc(100% - 120px);
      overflow-y: scroll;
      .info-item {
        line-height: 17px;
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
  }
</style>
