<!--page: 日常任务-->
<template>
  <div class="daily-tasks page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">日常任务列表</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="remarks fz-10 mt-5" style="line-height: 16px">勾选任务模板库中的任务将其指派给成员，或批量删除</div>
      <div class="person-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">xxxxx（任务名称）</div>
            </div>
            <div class="flex">
              <el-link :underline="false">
                <i class="el-icon-edit pointer fz-14 pl-5" />
              </el-link>
              <el-link :underline="false" type="danger">
                <i class="el-icon-delete pointer fz-14 pl-5" />
              </el-link>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="flex mt-5">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px">批量删除</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'daily-tasks',
    data() {
      const personOptions = ['1', '2', '3', '4']
      return {
        searchKey: '',
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
  .daily-tasks {
    .person-list {
      height: calc(100% - 118px);
      overflow-y: scroll;
      .person-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px solid #D0CECE;
      }
    }
  }
</style>
