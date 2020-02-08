<!--page: 监控成员-->
<template>
  <div class="monitor-member page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">监控成员</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="flex mt-5">
        <div class="flex">
          <el-link @click="visibleMemberAdd = true"><i class="el-icon-plus" /></el-link>
          <span class="pl-5 fz-14">添加成员</span>
        </div>
        <div class="flex">
          <span class="remarks">在地图显示</span>
          <el-switch
                  class="fz-10 pl-5"
                  :width="30"
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
          </el-switch>
        </div>
      </div>
      <div class="remarks mt-5 fz-10">已被监控的成员</div>
      <div class="person-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div class="flex">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-5" style="justify-content: space-around">
        <el-button style="padding: 5px 10px">移除监控</el-button>
      </div>
    </el-card>

<!--    添加监控成员-->
    <el-card class="main-2-card">
      <div slot="header">
        <span class="fz-16">添加监控成员</span>
        <el-button class="close-btn" type="text" @click="visibleMemberAdd = false"><i class="el-icon-close" /></el-button>
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
      <div v-if="visitAll" class="person-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="person-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <i class="el-icon-user fz-16" style="margin-left: 5px" />
              <div>（备注名/账号）</div>
            </div>
            <div class="flex">
              <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
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
            <div>
              <el-link @click="visibleAdd = true">
                <i class="el-icon-plus" />
              </el-link>
              <el-link @click="visibleEdit = true">
                <i class="el-icon-edit" />
              </el-link>
              <el-link @click="visibleSort = true">
                <i class="el-icon-sort" />
              </el-link>
            </div>
          </div>
          <div v-else class="person-item" style="border-bottom: unset; padding-left: 0">
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
      <div class="flex mt-5">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-5" style="justify-content: space-around">
        <el-button style="padding: 5px 8px">添加监控</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'monitor-member',
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
        searchKey: '',
        visitAll: true,
        visibleMemberAdd: false,
        value: true,
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
      }
    }
  }
</script>

<style scoped lang="scss">
.monitor-member {
  .person-list {
    height: calc(100% - 125px);
    overflow-y: scroll;
    .person-item {
      font-size: 10px;
      display: flex;
      justify-content: space-between;
      padding: 10px 5px 10px 3px;
      border-bottom: 1px dashed #D0CECE;
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
}
</style>
