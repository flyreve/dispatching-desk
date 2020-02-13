<template>
  <div class="video-intercom page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">可视对讲</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="filter mt-10">
        <el-button round size="mini" :type="visitMode ? 'primary' : ''" @click="visitMode = 1">可视对讲列表</el-button>
        <el-divider direction="vertical" />
        <el-button round :type="!visitMode ? 'primary' : ''" @click="visitMode = 0">可视对讲呼叫</el-button>
      </div>
      <div v-if="visitMode" class="list mt-10">
        <div>
          <el-radio v-model="radio" label="1">直播</el-radio>
          <el-radio v-model="radio" label="2" class="ml-10">待播</el-radio>
        </div>
        <div v-if="radio === '1'" class="video-list">
          <div class="video-box"></div>
          <div class="video-box"></div>
        </div>
        <div v-else class="person-list">
          <div v-for="(person, index) in 20" :key="index + '123'" class="person-item">
            <div class="flex">
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-video-play pointer fz-14 pl-5" />
            </div>
          </div>
        </div>
      </div>
      <div v-else class="list">
        <div class="flex">
          <el-radio v-model="radio1" label="1">全部</el-radio>
          <el-radio v-model="radio1" label="2">按部门</el-radio>
          <el-radio v-model="radio1" label="3">按群组</el-radio>
        </div>
        <div v-if="radio1 === '1'" class="person-list">
          <div v-for="(person, index) in 20" :key="index + '123'" class="person-item">
            <div class="flex">
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
        </div>
        <el-tree
                v-if="radio1 === '2'"
                class="person-list pt-5"
                style="height: calc(100% - 71px);"
                :data="data"
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
        >
          <div v-if="!data.hasOwnProperty('name')" slot-scope="{ node, data }" style="width: 100%">
            <div class="flex" style="width: 100%">
              <div>{{ node.label }}</div>
            </div>
          </div>
          <div v-else class="person-item" style="border-bottom: unset; padding-left: 0">
            <div class="flex">
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
        </el-tree>
        <el-collapse v-if="radio1 === '3'" v-model="activeName" accordion class="person-list">
          <el-collapse-item title="xxxx(固定群组名称)" :name="co" v-for="(co, index) in 5" :key="index + 'co'">
            <div class="flex" v-for="(i, j) in 2" :key="j + 'c'">
              <div class="flex">
                <i class="el-icon-user fz-16" style="margin-left: 5px" />
                <div>（备注名/账号）</div>
              </div>
              <div class="flex">
                <i class="el-icon-video-camera pointer fz-14 pl-5" />
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-card>

    <el-card class="main-2-card" style="background: #000">
      <div class="fz-16" style="color: #fff; border: unset">成员1</div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'VideoIntercom',
  data() {
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
      activeName: '',
      searchKey: '',
      radio: '1',
      visitMode: 1,
      radio1: '1',
      data: JSON.parse(JSON.stringify(data)),
      checkedPerson: ['1', '2'],
      checkAll: false,
      isIndeterminate: true
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss">
  .video-intercom {
    .el-radio {
      margin-right: unset!important;
    }
  }
</style>

<style scoped lang="scss">
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
  .list {
    height: calc(100% - 65px);
  }
  .video-list {
    height: calc(100% - 27px);
    .video-box {
      /*height: 220px;*/
      margin-top: 10px;
      border-radius: 4px;
      height: 46%;
      background: #000;
    }
  }

  .person-list {
    margin-top: 10px;
    height: calc(100% - 27px);
    overflow-y: scroll;
    .person-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 5px 10px 3px;
      border-bottom: 1px solid #D0CECE;
    }
  }
</style>
