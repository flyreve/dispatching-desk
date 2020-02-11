<!--page: 围栏告警-->
<template>
  <div class="fence-alarm page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">围栏告警</span>
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
              <p>xxxxx（备注名/ID）</p>
              <p class="fz-10 text-omit">告警类型：电子围栏跨出/跨入</p>
              <p class="fz-10 text-omit">创建时间：2019年6月20日22:17:14</p>
              <p class="fz-10 text-omit">告警地点</p>
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
        <div>成员1</div>
        <div class="fz-22 pointer" @click="visiblePosition = true"><i class="el-icon-location-outline"></i></div>
      </div>
      <div class="mt-25" style="margin-bottom: 20px">
        <p>围栏告警：成员1禁入围栏</p>
        <p>围栏时间：2019年6月20日22:17:14</p>
        <p>成员围栏设置：禁止入内</p>
        <p>所属围栏：围栏1</p>
        <p>围栏有效时间：00:00 - 00:00</p>
        <p>告警地点：云南省昆明市盘龙区星耀大厦</p>
      </div>
    </el-card>

<!--    定位-->
    <el-card class="dialog-3-card" v-if="visiblePosition">
      <div class="fz-16 c-deep-blue" slot="header">
        成员1
        <el-button class="close-btn" type="text" @click="visiblePosition = false"><i class="el-icon-close" /></el-button>
      </div>
      <div style="line-height: 20px">
        <p>组织：组织1</p>
        <p>时间：2019年6月20日22:17:14</p>
        <p>经度：xxxx</p>
        <p>维度：xxxx</p>
        <p>类型：GPS/基站</p>
        <p>地址：云南省昆明市盘龙区星耀大厦</p>
      </div>
      <div class="flex fz-22 mt-10">
        <i class="el-icon-location"></i>
        <i class="el-icon-location"></i>
        <i class="el-icon-location"></i>
        <i class="el-icon-location"></i>
        <i class="el-icon-location"></i>
        <i class="el-icon-location"></i>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'fence-alarm',
    data() {
      const personOptions = ['1', '2', '3', '4']
      return {
        searchKey: '',
        visitAll: true,
        visibleInfo: false,
        visiblePosition: false,
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
  .fence-alarm {
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
        line-height: 15px;
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
