<!--page: 设备管理-->
<template>
  <div class="privilege-management width-page">
    <div class="page-header">权限管理</div>
    <div class="flex mt-10" style="justify-content: left">
      <el-input
              style="width: 220px; margin-right: 10px"
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <el-button type="primary" round icon="el-icon-check" class="ml-10">检索</el-button>
    </div>
    <div class="filter-content">
      <div class="remarks">输入调度员备注名或ID进行检索</div>
      <div class="flex">
        <el-button type="danger" round icon="el-icon-plus" @click="visibleAdd = true">添加子调度员</el-button>
      </div>
    </div>
    <div class="data-content">
      <el-table
              :data="tableData"
              style="width: 100%">
        <el-table-column align="center" prop="k1" label="角色名称"/>
        <el-table-column align="center" prop="k2" label="备注名"/>
        <el-table-column align="center" prop="k3" label="ID"/>
        <el-table-column align="center" prop="k4" label="创建时间"/>
        <el-table-column align="center" label="操作" width="120" fixed="right">
          <div slot-scope="{row}" class="flex">
            <el-link :underline="false" type="primary" @click="visibleEdit = true">修改权限</el-link>
            <el-link :underline="false" type="primary" @click="handleDelete">删除</el-link>
          </div>
        </el-table-column>
      </el-table>
      <el-pagination
              class="mt-10 fr"
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000">
      </el-pagination>
    </div>

    <!--添加子调度员-->
    <el-dialog title="添加子调度员" :visible.sync="visibleAdd" width="30%">
      <div v-if="step === 0" class="step-content">
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
        <div class="flex mt-10">
          <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
          共选择{{ checkedPerson.length }}人
        </div>
        <div align="center" class="step-footer flex" style="justify-content: space-around">
          <el-button style="padding: 5px 10px" @click="step = 1" size="normal">下一步</el-button>
        </div>
      </div>
      <div v-if="step === 1" class="step-content">
        <div class="remarks">设置调度员可访问的功能权限</div>
        <div class="menu-item flex" v-for="(item, index) in navMenuList" :key="index + 'm'">
          <div class="flex">
            <img height="25" :src="menuIcon(item.icon)" alt="">
            <span class="ml-5">{{item.name}}</span>
          </div>
          <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ccc">
          </el-switch>
        </div>
        <div align="center" class="step-footer flex" style="justify-content: space-around">
          <el-button style="padding: 5px 10px" @click="step = 0" size="normal">上一步</el-button>
          <el-button style="padding: 5px 10px" size="normal">完成</el-button>
        </div>
      </div>
    </el-dialog>

    <!--修改子调度员权限-->
    <el-dialog title="修改子调度员权限" :visible.sync="visibleEdit" width="30%">
      <div class="step-content">
        <div class="remarks">设置调度员可访问的功能权限</div>
        <div class="menu-item flex" v-for="(item, index) in navMenuList" :key="index + 'm'">
          <div class="flex">
            <img height="25" :src="menuIcon(item.icon)" alt="">
            <span class="ml-5">{{item.name}}</span>
          </div>
          <el-switch
                  v-model="value"
                  active-color="#13ce66"
                  inactive-color="#ccc">
          </el-switch>
        </div>
        <div align="center" class="step-footer flex" style="justify-content: space-around">
          <el-button style="padding: 5px 10px" size="normal">完成</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'privilege-management',
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
        currentPage1: 5,
        tableData: [
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '子調度員', 'k2':  '张三（备注名名称）', 'k3':  '10251001', 'k4':  '2020年12月1日12:00:10', 'k5':  '管理员', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
        ],
        searchKey: '',
        value:  '',
        checked: '',
        visibleInfo: false,
        visiblePopover: false,
        visibleAdd: false,
        visibleEdit: false,
        visitAll: true,
        viewType: 1,
        dialogTitleMap: ['添加子调度员', '修改子调度员权限'],
        step: 0,
        checkedPerson: ['1', '2'],
        data: JSON.parse(JSON.stringify(data)),
        members: personOptions,
        checkAll: false,
        isIndeterminate: true
      }
    },
    computed: {
      ...mapGetters([ 'navMenuList' ]),
      menuIcon() {
        return function (icon) {
          return require(`@/assets/menu/${icon}.png`)
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
      handleChangeMode(type) {
        this.viewType = type
        this.visiblePopover = false
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleDelete() {
        this.$confirm('确认删除子调度员？', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style lang="scss">
  .popover-box {
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
      /*height: calc(100% - 125px);*/
      overflow-y: scroll;
      .person-item {
        display: flex;
        justify-content: space-between;
        padding: 5px
      }
    }
  }
  .privilege-management{
    .el-input__inner {
      font-size: 10px!important;
      height: 25px !important;
      line-height: 19px!important;
      padding: 1px!important;
    }
    .el-input__icon {
      line-height: 26px;
    }
    .el-form-item__label {
      font-size: 12px !important;
    }
    .el-input--suffix .el-input__inner {
      padding-left: 17px!important;
    }
    .el-input--prefix .el-input__inner {
      padding-left: 17px!important;
    }
    .el-input__prefix {
      left: -3px!important;
    }
    .el-input {
      margin: 0 5px;
    }
    .el-button--mini {
      padding: 4px 8px!important;
    }
    .el-divider--horizontal {
      margin: 13px 0!important;
    }
  }
</style>

<style scoped lang="scss">
  .privilege-management {
    .filter-content {
      display: flex;
      align-items: center;
      margin: 10px 0;
      justify-content: space-between;
    }
    .step-content {
      height: 400px;
      position: relative;
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
        height: calc(100% - 136px);
        overflow-y: scroll;
        .person-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 5px;
          border-bottom: 1px solid #D0CECE;
        }
      }
      .step-footer {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 10px;
      }
      .menu-item {
        position: relative;
        padding-left: 40px;
        height: 30px;
        margin: 6px 0;
        img {
          position: absolute;
          left: 0;
          top: 0;
          padding: 2px;
          border-radius: 5px;
          background: #2C4D6D;
        }
      }
    }
  }
</style>
