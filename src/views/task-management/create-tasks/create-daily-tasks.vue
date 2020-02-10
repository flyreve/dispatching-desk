<!--page: 创建日常任务-->
<template>
  <div class="create-daily-tasks width-page">
    <div class="page-title">创建日常任务</div>
    <div class="page-content">
      <div class="page-form">
        <el-form label-position="top">
          <el-row type="flex" justify="space-between" class="w-100">
            <el-col :span="10">
              <el-form-item label="任务名称">
                <el-input placeholder="xxx（任务名称）"></el-input>
              </el-form-item>
              <el-form-item label="任务时段">
                <el-date-picker type="date" placeholder="选择日期" style="width: 45%"></el-date-picker>
                -
                <el-date-picker type="date" placeholder="选择日期" style="width: 45%"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="任务说明">
                <el-input type="textarea" :rows="4" placeholder="任务详情"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="flex mt-25">
            <el-form-item label="任务标签">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
            </el-form-item>
            <el-form-item label="任务区域">
             <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务区域
              </el-link>
              <br>
              <el-tag>已添加的任务区域</el-tag>
            </el-form-item>
            <el-form-item label="任务围栏">
             <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务围栏
              </el-link>
              <br>
              <el-tag>已添加的任务围栏</el-tag>
            </el-form-item>
            <el-form-item label="任务负责人">
             <el-link :underline="false"  @click="visibleExecutor = true">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务负责人
              </el-link>
              <br>
              <el-tag>已添加的任务负责人</el-tag>
            </el-form-item>
            <el-form-item label="任务执行人">
             <el-link :underline="false" @click="visibleCharge = true">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务执行人
              </el-link>
              <br>
              <el-tag>已添加的任务执行人</el-tag>
            </el-form-item>
          </div>
          <div class="mt-25">
            <el-form-item>
              <div slot="label">
                <el-link :underline="false">
                  <i class="el-icon-circle-plus-outline fz-16"></i>
                  <span style="color: #2D6BCE">添加最低任务要求</span>
                </el-link>
              </div>
              <el-input type="textarea" :rows="4" placeholder="已添加的任务要求"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="footer">
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </div>
    </div>

    <!--    添加任务负责人-->
    <el-dialog
            title="添加任务负责人"
            :visible.sync="visibleExecutor"
            width="30%">
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
      <div v-if="visitAll" class="person-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <el-tree
              v-else
              class="person-list"
              :data="data"
              show-checkbox
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
          </div>
        </div>
      </el-tree>
      <div style="margin: 15px 0;" />
      <div class="flex">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visibleExecutor = false">确认指派</el-button>
      </div>
    </el-dialog>


    <!--    添加任务执行人-->
    <el-dialog
            title="添加任务执行人"
            :visible.sync="visibleCharge"
            width="30%">
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
      <div v-if="visitAll" class="person-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <el-tree
              v-else
              class="person-list"
              :data="data"
              show-checkbox
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
          </div>
        </div>
      </el-tree>
      <div style="margin: 15px 0;" />
      <div class="flex">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visibleCharge = false">确认指派</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'create-daily-tasks',
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
        visibleExecutor: false,
        visibleCharge: false,
        visitAll: true,
        data: JSON.parse(JSON.stringify(data)),
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
      }}
  }
</script>

<style lang="scss">
  .create-daily-tasks {
    .el-form-item {
      margin-bottom: 0!important;
    }
    .el-form--label-top .el-form-item__label {
      padding: 0!important;
    }
    .el-form-item__label {
      font-size: 12px!important;
      color: #2D6BCE!important;
      font-weight: 400!important;
    }
  }
</style>

<style scoped lang="scss">
  .create-daily-tasks {
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
    .person-list {
      max-height: 250px;
      height: calc(100% - 125px);
      overflow-y: scroll;
      .person-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px dashed #D0CECE;
      }
    }
    .sort-list {
      .sort-item {
        cursor: pointer;
        border-bottom: 1px dashed #5F5F5F;
      }
    }
  }
</style>
