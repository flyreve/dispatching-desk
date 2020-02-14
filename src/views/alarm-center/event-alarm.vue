<!--page: 事件告警-->
<template>
  <div class="event-alarm page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">事件告警</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="event-list mt-5">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(i, j) in 5" :key="j + '1'" class="event-item" @click="visibleInfo = true">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <i class="el-icon-picture c-deep-blue" style="font-size: 54px"></i>
<!--              <i class="el-icon-picture c-deep-blue" style="font-size: 54px"></i>-->
              <div class="pl-5">
                <strong>重要告警</strong>
                <p class="fz-10 text-omit">上报人员：xx(备注名/ID)</p>
                <p class="fz-10 text-omit">上报时间：2019年6月20日22:17:14</p>
                <p class="fz-10 text-omit">上报备注：文字/语音备注</p>
              </div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="flex mt-10">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px">标为已读</el-button>
      </div>
    </el-card>

    <!--    详情-->
    <el-card class="dialog-2-card" v-if="visibleInfo">
      <div class="fz-16 c-deep-blue" slot="header">
        成员1
        <el-button class="close-btn" type="text" @click="visibleInfo = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="flex" style="justify-content: center">
        <i class="el-icon-picture c-deep-blue" style="font-size: 123px"></i>
      </div>
      <div style="line-height: 20px">
        <p>部门：部门1</p>
        <p>时间：2019年6月20日22:17:14</p>
        <p>上报备注：文字/语音备注</p>
        <p>处理状态：已处理/未处理</p>
        <p>地址：云南省昆明市盘龙区星耀大厦</p>
      </div>
      <div class="flex mt-10">
        <i class="iconfont icon-microphone" style="font-size: 25px"></i>
        <i class="iconfont icon-comments" style="font-size: 25px"></i>
        <i class="iconfont icon-play" style="font-size: 25px"></i>
        <i class="iconfont icon-image-text" style="font-size: 25px"></i>
        <el-link :underline="false" @click="visibleHandling = true"> <i class="iconfont icon-warehouse" style="font-size: 25px"></i></el-link>
        <i class="iconfont icon-link" style="font-size: 25px"></i>
      </div>
    </el-card>

<!--    事件处理-->
    <el-card class="right-dialog-card" v-if="visibleHandling">
      <div class="fz-16" slot="header">
        事件处理
        <el-button class="close-btn" type="text" @click="visibleHandling = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="handling-list">
        <div class="handling-item" v-for="(i, j) in handlingList" :key="j + 'h'">
          <i class="iconfont c-deep-blue" :class="i.icon" style="font-size: 35px"></i>
          <div style="padding-left: 10px">
            <p class="fz-16" style="line-height: 20px">{{i.name}}</p>
            <p class="remarks">{{i.remark}}</p>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'event-alarm',
    data() {
      const personOptions = ['1', '2', '3', '4']
      return {
        visibleInfo: false,
        visibleHandling: false,
        searchKey: '',
        checkedPerson: ['1', '2'],
        members: personOptions,
        checkAll: false,
        isIndeterminate: true,
        handlingList: [
          { icon: 'icon-manage-order', name: '发起临时任务', remark: '说明说明说明说明说明说明说明'},
          { icon: 'icon-Customermanagement', name: '发送至群组会话', remark: '说明说明说明说明说明说明'},
          { icon: 'icon-tradealert', name: '发起图文通知 ', remark: '说明说明说明说明说明说明'},
          { icon: 'icon-notice', name: '发起语音通知', remark: '说明说明说明说明说'},
          { icon: 'icon-all', name: '其他', remark: '说明说明说明说明说明'}
        ]
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
  .event-alarm {
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

    .event-list {
      height: calc(100% - 98px);
      overflow-y: scroll;

      .event-item {
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
    .right-dialog-card {
      width: 250px;
      position: fixed;
      top: 130px;
      right: 10px;
      bottom: 10px;
    }
    .handling-list {
      .handling-item {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 20px;
      }
    }
  }
</style>
