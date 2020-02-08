<!--page：群组会话-->
<template>
  <div class="group-intercom page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">群组会话</span>
      </div>
      <div class="flex" style="justify-content: space-around">
        <el-button round class="mini-btn" :type="filterKey === 0 ? 'primary' : ''" @click="filterKey = 0">全部</el-button>
        <el-divider direction="vertical" />
        <el-button round class="mini-btn" :type="filterKey === 1 ? 'primary' : ''" @click="filterKey = 1">群组</el-button>
        <el-divider direction="vertical" />
        <el-button round class="mini-btn" :type="filterKey === 2 ? 'primary' : ''" @click="filterKey = 2">会话</el-button>
      </div>
      <div class="card-body mt-10">
        <div class="group-list">
          <div v-for="(i, index) in filterGroup" :key="index + 's'" class="group-item flex">
            <div>
              <div class="fz-10">XXXXX（固定群组名称）</div>
              <el-rate v-if="i.type === 'group'" v-model="levelValue" />
            </div>
            <div class="flex">
              <i class="el-icon-user pointer fz-14 pl-5" @click="visibleList = true" />
              <i class="el-icon-headset pointer fz-14 pl-5" @click="visibleMonitor = true" />
              <i class="el-icon-lock pointer fz-14 pl-5" @click="visibleMember = true" />
              <i class="el-icon-setting pointer fz-14 pl-5" @click="openEdit(i)" />
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer flex mt-10" style="justify-content: space-around">
        <el-button round class="mini-btn">创建群组</el-button>
        <el-divider direction="vertical" />
        <el-button round class="mini-btn">创建会话</el-button>
      </div>
    </el-card>

    <!--    成员列表-->
    <el-card v-if="visibleList" class="main-2-card">
      <div slot="header">
        <span class="fz-16">成员列表</span>
        <el-button class="close-btn" type="text" @click="visibleList = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="flex" style="justify-content: left">
        <el-link @click="visibleMemberAdd = true"><i class="el-icon-plus" /></el-link>
        <span class="pl-5 fz-14">编辑成员列表</span>
      </div>
      <el-input
        v-model="searchKey"
        class="mt-5"
        placeholder="搜索"
        size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="person-list">
        <div v-for="(i, index) in 4" :key="index + '123'" class="person-item">
          <div class="flex">
            <i class="el-icon-user fz-16" style="margin-left: 5px" />
            <div>（备注名/账号）</div>
          </div>
          <div class="flex">
            <i class="el-icon-chat-line-round pointer fz-14 pl-5" />
            <i class="el-icon-setting pointer fz-14 pl-5" @click="visibleMemberEdit = true" />
            <i class="el-icon-video-camera pointer fz-14 pl-5" />
          </div>
        </div>
      </div>
    </el-card>

    <!--  群成员管理-->
    <el-card v-if="visibleMemberEdit" class="dialog-3-card">
      <div slot="header">
        <span class="fz-16">成员列表</span>
        <el-button class="close-btn" type="text" @click="visibleMemberEdit = false"><i class="el-icon-close" /></el-button>
      </div>
      <el-form>
        <el-form-item>
          <el-select v-model="value1" placeholder="发言时长">
            <el-option :label="1" value="1" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="value2" placeholder="优先级">
            <el-option :label="1" value="2" />
          </el-select>
        </el-form-item>
      </el-form>
      <div align="center">
        <el-button type="primary" round class="save-btn">保存</el-button>
      </div>
    </el-card>

    <!--    添加成员-->
    <el-card v-if="visibleMemberAdd" class="main-2-card">
      <div slot="header">
        <span class="fz-16">添加成员</span>
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
      <div v-if="visitAll" class="member-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="member-item">
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
        class="member-list"
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
          <div v-else class="member-item" style="border-bottom: unset; padding-left: 0">
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
        <el-button round style="padding: 5px 8px" @click="visibleMemberAdd = false">上一步</el-button>
        <el-button round style="padding: 5px 8px">完成添加</el-button>
      </div>
    </el-card>

    <!--    部门监听-->
    <el-card v-if="visibleMonitor" class="main-2-card">
      <div slot="header">
        <span class="fz-16">部门监听</span>
        <el-button class="close-btn" type="text" @click="visibleMonitor = false"><i class="el-icon-close" /></el-button>
      </div>
    </el-card>

    <!--    编辑群组信息-->
    <el-card v-if="visibleGroupEdit" class="main-2-card">
      <div slot="header">
        <span class="fz-16">编辑群组信息</span>
        <el-button class="close-btn" type="text" @click="visibleGroupEdit = false"><i class="el-icon-close" /></el-button>
        <el-button class="close-btn" type="text" @click="handleDissolveGroup"><i class="el-icon-delete" /></el-button>
      </div>
      <el-form>
        <el-form-item><el-input placeholder="群组名称" /></el-form-item>
        <el-form-item><el-input
          type="textarea"
          :autosize="{ minRows: 3, maxRows: 6}"
          placeholder="群组描述"
        /></el-form-item>
        <el-form-item><el-input placeholder="排队人数" /></el-form-item>
        <el-form-item><el-input placeholder="发言时长" /></el-form-item>
        <el-form-item><el-input placeholder="数组对讲权限" /></el-form-item>
      </el-form>
      <div align="center">
        <el-button class="save-btn" type="primary">
          保存
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'GroupIntercom',
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
      levelValue: 3,
      searchKey: '',
      value1: '',
      value2: '',
      filterKey: 0,
      visibleList: false,
      visibleMemberEdit: false,
      visibleMemberAdd: false,
      visibleMonitor: false,
      visibleGroupEdit: false,
      groupData: [
        { type: 'group' },
        { type: 'group' },
        { type: 'conversation' },
        { type: 'conversation' },
        { type: 'group' },
        { type: 'group' }
      ],
      checkAll: false,
      visitAll: true,
      data: JSON.parse(JSON.stringify(data)),
      checkedPerson: ['1', '2'],
      members: personOptions,
      isIndeterminate: true
    }
  },
  computed: {
    filterGroup() {
      switch (this.filterKey) {
        case 0:
          return this.groupData
        case 1:
          return this.groupData.filter(i => i.type === 'group')
        case 2:
          return this.groupData.filter(i => i.type === 'conversation')
        default:
          return []
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
    openEdit(i) {
      if (i.type === 'group') {
        this.visibleGroupEdit = true
      } else {
        // this.
      }
    },
    handleDissolveGroup() {
      this.$confirm('确认解散?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '解散成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消解散'
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .group-intercom {
    .card-body {
      height: calc(100% - 60px);
      overflow-y: scroll;
    }
    .group-list {
      height: 100%;
      .group-item {
        min-height: 35px;
        padding: 5px;
        border-bottom: 1px dashed #E9E9E9;
      }
    }

    .person-list {
      margin-top: 5px;
      height: calc(100% - 60px);
      overflow-y: scroll;
      .person-item {
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
    .member-list {
      height: calc(100% - 125px);
      overflow-y: scroll;
      .member-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px solid #D0CECE;
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
