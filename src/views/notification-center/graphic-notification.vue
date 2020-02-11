<!--page: 图文通知-->
<template>
  <div class="graphic-notification page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">图文通知</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="flex mt-5">
        <el-date-picker type="date" placeholder="开始" style="width: 45%"></el-date-picker>
        -
        <el-date-picker type="date" placeholder="结束" style="width: 45%"></el-date-picker>
      </div>
      <div class="info-list mt-5">
        <div v-for="(i, j) in 5" :key="j + '1'" class="info-item" @click="visibleInfo = true">
          <div class="flex">
            <div class="pl-5">
              <p>xxxxx（广播标题）</p>
              <p class="fz-10 text-omit">创建时间：2019年6月20日22:17:14</p>
              <p class="fz-10 text-omit">创建人：xxxx（成员名称/10）</p>
            </div>
          </div>
          <div class="flex">
            <el-link :underline="false" @click.stop="visibleEdit = true">
              <i class="el-icon-edit pointer fz-14 pl-5" />
            </el-link>
            <el-link :underline="false" type="danger">
              <i class="el-icon-delete pointer fz-14 pl-5" />
            </el-link>
          </div>
        </div>
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px" @click="visibleAdd = true">创建图文通知</el-button>
      </div>
    </el-card>

    <!--    打开-->
    <el-card class="main-2-card" v-if="visibleInfo">
      <div class="fz-16" slot="header">
        xxxx（标题）
        <el-button class="close-btn" type="text" @click="visibleInfo = false"><i class="el-icon-close" /></el-button>
      </div>
      <div class="mt-5" style="color: #0650C6">
        <p>创建时间：2019年6月20日22:17:14</p>
        <p>创建人：xxxx（成员名称/10）</p>
      </div>
      <div class="mt-25">
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
         具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
         具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
         具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
        具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
         具体内容具体内容具体内容具体内容具体内容具体内容具体内容具体内容
      </div>
    </el-card>

    <!--    创建图文通知-->
    <el-card class="main-2-card" v-if="visibleAdd">
      <div class="fz-16" slot="header">
        创建图文通知
        <el-button class="close-btn" type="text" @click="visibleAdd = false"><i class="el-icon-close" /></el-button>
      </div>
      <span>标题</span>
      <el-input v-model="value" placeholder="输入标题" class="mt-5"></el-input>
      <div class="mt-10"></div>
      <span>内容</span>
      <el-input
              class="mt-5"
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="value">
      </el-input><div class="card-footer">
        <el-button>全部成员</el-button>
        <el-button>部分成员</el-button>
      </div>
    </el-card>

    <!--    编辑图文通知-->
    <el-card class="main-2-card" v-if="visibleEdit">
      <div class="fz-16" slot="header">
        编辑图文通知
        <el-button class="close-btn" type="text" @click="visibleEdit = false"><i class="el-icon-close" /></el-button>
      </div>
      <span>标题</span>
      <el-input v-model="value" placeholder="xxx(标题)" class="mt-5"></el-input>
      <div class="mt-10"></div>
      <span>内容</span>
      <el-input
              class="mt-5"
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="value">
      </el-input>
      <div class="mt-5" style="color: #0650C6">
        <p>创建时间：2019年6月20日22:17:14</p>
        <p>创建人：xxxx（成员名称/10）</p>
      </div>
      <div class="card-footer">
        <el-button>全部成员</el-button>
        <el-button>部分成员</el-button>
      </div>
    </el-card>

<!--    添加成员-->
    <el-card class="main-2-card">
      <div class="fz-16" slot="header">
        添加成员
        <el-button class="close-btn" type="text" @click="visibleMember = false"><i class="el-icon-close" /></el-button>
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
      <div class="flex mt-5">
        <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
        共选择{{ checkedPerson.length }}人
      </div>
      <div align="center" class="flex mt-10" style="justify-content: space-around">
        <el-button style="padding: 5px 8px">确认创建</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'graphic-notification',
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
        value: '',
        visibleInfo: false,
        visibleAdd: false,
        visibleEdit: false,
        visibleMember: false,
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
      }
    }
  }
</script>

<style scoped lang="scss">
  .graphic-notification {
    .main-1-card {
      width: 300px;
    }
    .main-2-card {
      left: 320px;
    }
    .info-list {
      height: calc(100% - 105px);
      overflow-y: scroll;
      .info-item {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px dashed #D0CECE;
        &:hover {
          background: #F9F9FA;
        }
      }
    }
    .voice-list {
      .voice-item {
        margin: 10px 0;
        cursor: pointer;
        width: 80px;
        height: 15px;
        line-height: 15px;
        background: #0650C6;
        border-radius: 7px;
        i {
          color: #fff;
        }
      }
    }
    .voice-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      left: 100px;
      bottom: 57px;
      background: #0650C6;
    }
    .card-footer {
      text-align: center;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 15px;
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
    .person-list {
      height: calc(100% - 125px);
      overflow-y: scroll;
      .person-item {
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
