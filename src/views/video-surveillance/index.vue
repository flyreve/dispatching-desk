<!--page: 视频监控-->
<template>
  <div class="video-surveillance page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">视频监控</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="filter">
        <el-button round size="mini" :type="visitAll ? 'primary' : ''" @click="visitAll = true">全部</el-button>
        <el-divider direction="vertical" />
        <el-button round :type="!visitAll ? 'primary' : ''" @click="visitAll = false">按部门显示</el-button>
      </div>
      <div v-if="visitAll" class="check-list">
          <div v-for="(person, index) in members" :key="index + '123'" class="check-item">
            <div class="flex">
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
      </div>
      <el-tree
              v-else
              class="check-list"
              :data="data"
              node-key="id"
              default-expand-all
              :expand-on-click-node="false"
      >
        <div slot-scope="{ node, data }" style="width: 100%">
          <div v-if="!data.hasOwnProperty('name')" class="flex" style="width: 100%">
            <div>{{ node.label }}</div>
          </div>
          <div v-else class="check-item" style="border-bottom: unset; padding-left: 0">
            <div class="flex">
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
        </div>
      </el-tree>
    </el-card>

<!--    分屏-->
    <el-card class="main-2-card video-card" shadow="never">
      <div class="tab-header">
        <el-tabs v-model="activeTab" @tab-click="handleClick">
          <el-tab-pane label="1分屏" name="1" />
          <el-tab-pane label="4分屏" name="4" />
          <el-tab-pane label="6分屏" name="6" />
          <el-tab-pane label="9分屏" name="9" />
          <el-tab-pane label="16分屏" name="16" />
        </el-tabs>
      </div>
      <div class="content mt-5">
        <div class="video-item"
             :class="isMainDivide(j) ? 'scale-3': 'scale-'+activeTab"
             v-for="(i, j) in Number(activeTab)"
             :key="j + 'tab'">
          <div class="wrap">
            <span class="text">成员1</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'video-surveillance',
    data() {
      const personOptions = ['1', '2', '3', '4']
      const data = [
        {
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
        searchKey: '',
        visitAll: true,
        data: JSON.parse(JSON.stringify(data)),
        checkedPerson: ['1', '2'],
        members: personOptions,
        checkAll: false,
        isIndeterminate: true,
        activeTab: '1'
      }
    },
    computed: {
      isMainDivide() {
        return function (j) {
          return this.activeTab === '6'  && j === 0
        }
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
      },
      handleClick(tab, event) {}
    }
  }
</script>
<style lang="scss">
  .video-surveillance {
    .video-card {
      .el-card__body {
        padding: 0!important;
        height: 100%!important;
      }
      .el-tabs__header {
        margin: 0!important;
      }
      .el-tabs__nav-wrap::after {
        display: none;
      }
      .el-tabs__item {
        color: #fff!important;
      }
      .el-tabs__item.is-active {
        color: #fff!important;
      }
      .el-tabs__active-bar {
        bottom: 1px;
        height: 4px;
        background-color: #0650C6;
      }
    }
  }
</style>

<style scoped lang="scss">
  .video-surveillance {
    .video-card {
      padding: 0;
      width: calc(100vw - 280px);
      background: rgba(0, 0, 0, 0);
      .tab-header {
        border-radius: 5px;
        padding: 0 10px;
        background: #000;
      }
      .content {
        height: calc(100% - 43px);
        .video-item {
          padding: 2px;
          box-sizing: border-box;
          float: left;
          .wrap {
            padding: 10px;
            box-sizing: border-box;
            border-radius: 8px;
            background: #000;
            width: 100%;
            height: 100%;
            .text {
              color: #fff;
            }
          }
        }
        .scale-16 {
          width: 25%;
          height: 25%;
          .wrap {
            font-size: 8px;
          }
        }
        .scale-9 {
          width: 33%;
          height: 33%;
          .wrap {
            font-size: 10px;
          }
        }
        .scale-6 {
          width: 33%;
          height: 33%;
          .wrap {
            font-size: 12px;
          }
        }
        .scale-4 {
          width: 50%;
          height: 50%;
          .wrap {
            font-size: 14px;
          }
        }
        .scale-3 {
          width: 66%;
          height: 66%;
          .wrap {
            font-size: 16px;
          }
        }
        .scale-1 {
          width: 100%;
          height: 100%;
          .wrap {
            font-size: 18px;
          }
        }
      }
    }
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
    .check-list {
      height: calc(100% - 68px);
      overflow-y: scroll;
      .check-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px solid #D0CECE;
      }
    }
  }
</style>
