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
        <div class="area-item" v-for="(i, j) in 9" :key="j + 'e'">
          xxxxx（任务区域名称）
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'task-area',
    data() {
      return {
        searchKey: ''
      }
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="scss">
  .task-area {
    .area-list {
      height: calc(100% - 52px);
      overflow-y: scroll;
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
  }
</style>
