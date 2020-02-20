<!--page：部门成员-->
<template>
  <div class="department-manage page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">全部人员</span>
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
              <div>（备注名/账号11）</div>
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
              <div>{{ node.label }} 用户</div>
            </div>
            <div class="flex">
              <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-video-camera pointer fz-14 pl-5" />
            </div>
          </div>
        </div>
      </el-tree>
      <div class="flex mt-10">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button v-if="!visitAll" round style="padding: 5px 8px" @click="visibleMove = true">移动成员</el-button>
        <el-button round style="padding: 5px 8px">创建群组</el-button>
        <el-button round style="padding: 5px 8px">创建会话</el-button>
      </div>
    </el-card>

    <!--    编辑人员-->
    <el-card v-if="visibleMember" class="dialog-2-card">
      <div slot="header">
        <span class="fz-16">用户资料</span>
        <el-button class="close-btn" type="text" @click="visibleMember = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="flex">
        <span>用户账号</span>
        <span>102510043</span>
      </div>
      <el-form style="margin-top: 10px">
        <el-form-item>
          <el-input placeholder="备注名" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="手机号" />
        </el-form-item>
        <el-form-item>
          <el-input placeholder="邮箱" />
        </el-form-item>
      </el-form>
      <div align="center">
        <el-button type="primary" style="padding: 5px 50px">保存</el-button>
      </div>
    </el-card>

    <!--    选择成员-->
    <el-card v-if="visibleMove" class="main-1-card dialog-2-card">
      <div slot="header">
        <span class="fz-16">移动成员</span>
        <el-button class="close-btn" type="text" @click="visibleMove = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="remarks">选择组织成员</div>
      <el-tree
        class="person-list pt-5"
        style="height: calc(100% - 71px);"
        :data="data"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <div slot-scope="{ node, data }" style="width: 100%">
          <div class="flex" style="width: 100%">
            <div>{{ node.label }}</div>
          </div>
        </div>
      </el-tree>
      <div align="center">
        <el-button>确认移动</el-button>
      </div>
    </el-card>

    <!--    创建下级部门-->
    <el-card v-if="visibleAdd" class="dialog-2-card">
      <div slot="header">
        <span class="fz-16">创建下级部门</span>
        <el-button class="close-btn" type="text" @click="visibleAdd = false"><i class="el-icon-close" /></el-button>
      </div>
      <el-input placeholder="输入名称" />
      <div align="center" class="mt-5">
        <el-button type="primary" round style="padding: 5px 80px">保存</el-button>
      </div>
    </el-card>

    <!--    编辑部门名称-->
    <el-card v-if="visibleEdit" class="dialog-2-card">
      <div slot="header">
        <span class="fz-16">编辑部门名称</span>
        <el-button class="close-btn" type="text" @click="visibleEdit = false"><i class="el-icon-close" /></el-button>
        <el-button class="close-btn fz-14" type="text"><i class="el-icon-delete" /></el-button>
      </div>
      <el-input placeholder="输入名称" />
      <div align="center" class="mt-5">
        <el-button type="primary" round style="padding: 5px 80px">保存</el-button>
      </div>
    </el-card>

    <!--    排序-->
    <el-card v-if="visibleSort" class="dialog-2-card">
      <div slot="header">
        <span class="fz-16">拖动调整下级部门排序</span>
        <el-button class="close-btn" type="text" @click="visibleSort = false"><i class="el-icon-close" /></el-button>
      </div>
      <Kanban :key="1" :list="list" @listChange="sortChange" />
      <div align="center" class="mt-10">
        <el-button type="primary" round style="padding: 5px 80px">保存</el-button>
      </div>
    </el-card>

  </div>
</template>

<script>
import Kanban from '@/components/Kanban'
export default {
  name: 'DepartmentManage',
  components: {
    Kanban
  },
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
          label: '1-1-1',
          user: 'test用户'
        }, {
          name: '2',
          id: 10,
          label: '1-1-1'
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
      list: [
        { name: '组织1', id: 1 },
        { name: '组织2', id: 2 },
        { name: '组织3', id: 3 },
        { name: '组织4', id: 4 }
      ],
      searchKey: '',
      visibleMember: false,
      visibleMove: false,
      visibleAdd: false,
      visibleEdit: false,
      visibleSort: false,
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
    sortChange(val) {
      console.log('newList：', val)
    },
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

<style lang="scss">
  .department-manage {
    .el-link {
      font-size: 10px;
      margin-left: 5px;
    }
    .el-tree-node__content {
      padding-left: 0;
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
  .person-list {
    height: calc(100% - 125px);
    overflow-y: scroll;
    .person-item {
      display: flex;
      justify-content: space-between;
      padding: 10px 5px;
      border-bottom: 1px solid #D0CECE;
    }
  }
</style>
