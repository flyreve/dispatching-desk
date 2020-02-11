<!--page: 久坐告警-->
<template>
  <div class="sedentary-alarm page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">久坐告警</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'sedentary-alarm',
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

<style scoped></style>
