<!--page: 轨迹回放-->
<template>
  <div class="track-playback page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">轨迹回放</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <el-tree
              class="person-list mt-10"
              :data="data"
              node-key="id"
              default-expand-all
              :expand-on-click-node="false"
      >
        <div slot-scope="{ node, data }" style="width: 100%">
          <div v-if="!data.hasOwnProperty('name')" class="flex" style="width: 100%">
            <div>{{ node.label }}</div>
          </div>
          <div v-else class="person-item" style="border-bottom: unset; padding-left: 0">
            <div class="flex">
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <el-link class="flex" :underline="false">
              <i class="el-icon-link pointer fz-14 pl-5" @click="visiblePlayback = !visiblePlayback" />
            </el-link>
          </div>
        </div>
      </el-tree>
    </el-card>

    <!--回放-->
    <el-card class="main-2-card playback-card" v-if="visiblePlayback">
      <div class="card-header flex">
        <div class="left flex fz-10"><div class="circular" />成员一</div>
        <el-divider direction="vertical" />
        <div class="content flex fz-10">
          <div class="flex">
            时间范围: <el-input style="width: 33px"></el-input>个月之内
          </div>
          <div class="flex">
            起止时间
            <el-date-picker
                    v-model="value1"
                    type="date"
                    style="width: 64px">
            </el-date-picker>
            --
            <el-date-picker
                    v-model="value1"
                    type="date"
                    style="width: 64px">
            </el-date-picker>
          </div>
          <div class="flex">
            查询
            <el-input style="width: 45px"  v-model="searchKey">
              <i slot="prefix" class="el-input__icon el-icon-search" />
            </el-input>
          </div>
        </div>
        <el-divider direction="vertical" />
        <div class="right flex fz-16">
          <el-link :underline="false"><i class="el-icon-arrow-left"></i></el-link>
          <el-link :underline="false"><i class="el-icon-video-pause"></i></el-link>
          <el-link :underline="false"><i class="el-icon-arrow-right"></i></el-link>
        </div>
      </div>
      <div class="card-body">
        1
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'track-playback',
    data() {
      const personOptions = ['1', '2', '3', '4']
      const data = [{
        id: 1,
        label: '测试组 1',
        children: [{
          id: 4,
          label: '测试组 1-1',
          children: [{
            name: '1',
            id: 9,
            label: '测试组 1-1-1'
          }, {
            name: '2',
            id: 10,
            label: '测试组 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '测试组 2',
        children: [{
          id: 5,
          label: '测试组 2-1'
        }, {
          id: 6,
          label: '测试组 2-2'
        }]
      }, {
        id: 3,
        label: '测试组 3',
        children: [{
          id: 7,
          label: '测试组 3-1'
        }, {
          id: 8,
          label: '测试组 3-2'
        }]
      }]
      return {
        visiblePlayback: false,
        searchKey: '',
        value1: '',
        data: JSON.parse(JSON.stringify(data)),
        members: personOptions,
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .track-playback {
    .el-divider--vertical {
      height: 100%;
    }
    .playback-card .el-card__body {
      height: calc(100% - 20px)!important;
      padding: 10px!important;
    }
    .playback-card  {
      .el-input__inner {
        font-size: 10px!important;
        /*width: 25px!important;*/
        height: 19px !important;
        line-height: 19px!important;
        padding: 1px!important;
      }
      .el-input__icon {
        line-height: 22px;
      }
      .el-input {
        margin: 0 5px;
      }
    }
  }
</style>
<style scoped lang="scss">
.track-playback {
  .person-list {
    height: calc(100% - 25px);
    overflow-y: scroll;
    .person-item {
      font-size: 10px;
      display: flex;
      justify-content: space-between;
      padding: 10px 5px 10px 3px;
      border-bottom: 1px dashed #D0CECE;
    }
  }
  .playback-card {
    width: calc(100vw - 430px);
    .card-header {
      height: 37px;
      .left, .right {
        height: 100%;
        width: 80px;
      }
      .content {
        height: 100%;
        flex: 1;
      }
      .circular {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: #BCC5CA;
      }
    }
    .card-body {
      margin-top: 5px;
      border-radius: 4px;
      height: calc(100% - 35px);
      background: #ccc;
    }
  }
}
</style>
