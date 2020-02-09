<!--page: 电子围栏-->
<template>
  <div class="electronic-fence page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">电子围栏</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="remarks fz-10 mt-5">已创建的电子围栏</div>
      <div class="enclosure-list mt-5">
        <div class="enclosure-item" v-for="(i, j) in 9" :key="j + 'e'">
          xxxxx（电子围栏名称）
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'electronic-fence',
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
  .electronic-fence {
    .enclosure-list {
      height: calc(100% - 52px);
      overflow-y: scroll;
      .enclosure-item {
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
