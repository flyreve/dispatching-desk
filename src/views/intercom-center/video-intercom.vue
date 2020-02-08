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
      <div class="filter">
        <el-button round size="mini" :type="visitMode ? 'primary' : ''" @click="visitMode = 0">可视对讲列表</el-button>
        <el-divider direction="vertical" />
        <el-button round :type="!visitMode ? 'primary' : ''" @click="visitMode = 1">可视对讲呼叫</el-button>
      </div>
      <div>
        <el-radio v-model="radio" label="1">直播</el-radio>
        <el-radio v-model="radio" label="2">待播</el-radio>
      </div>
      <div class="video-list">
        <div class="video-box"></div>
        <div class="video-box"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'VideoIntercom',
  data() {
    return {
      searchKey: '',
      radio: '1',
      visitMode: 0,
    }
  },
  mounted() {
  },
  methods: {}
}
</script>

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
  .video-list {
    height: calc(100% - 85px);
    .video-box {
      margin-top: 10px;
      border-radius: 4px;
      height: 46%;
      background: #000;
    }
  }
</style>
