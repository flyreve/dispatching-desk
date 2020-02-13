<!--page: 轨迹记录-->
<template>
  <div class="track-record width-page">
    <div class="page-header">轨迹记录</div>
    <div class="data-type">
      <div class="type-item">轨迹记录：9999</div>
    </div>
    <div class="filter-content">
      <div class="flex">
        <el-input
                style="width: 120px; margin-right: 10px"
                v-model="searchKey"
                placeholder="搜索"
                size="mini"
        >
          <i slot="prefix" class="el-input__icon el-icon-search" />
        </el-input>
        <el-date-picker
                style="width: 90px; margin: 0 5px"
                v-model="value"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        --
        <el-date-picker
                style="width: 90px; margin: 0 5px"
                v-model="value"
                type="date"
                placeholder="选择日期">
        </el-date-picker>
        <el-button type="primary" round icon="el-icon-check" class="ml-10">检索</el-button>
      </div>
      <div class="flex">
        <el-checkbox v-model="checked" class="ml-10">全选</el-checkbox>
        <el-button type="danger" round icon="el-icon-delete" class="ml-10">删除</el-button>
        <el-button type="text" icon="el-icon-upload2">导出数据</el-button>
      </div>
    </div>
    <div class="data-content">
      <el-table
              :data="tableData"
              style="width: 100%">
        <el-table-column align="center" type="selection" width="45">
        </el-table-column>

        <el-table-column align="center" prop="k1" width="90">
          <!--部门弹窗-->
          <el-popover
                  slot="header"
                  placement="bottom"
                  width="150"
                  trigger="click">
            <div class="popover-box">
              <div class="fz-16">选择部门</div>
              <el-input v-model="searchKey" placeholder="搜索" size="mini" class="mt-10">
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
              <div class="filter">
                <el-button round size="mini" :type="!visitAll ? 'primary' : ''" @click="visitAll = true">全部</el-button>
                <el-divider direction="vertical" />
                <el-button round :type="visitAll ? 'primary' : ''" @click="visitAll = false">按部门显示</el-button>
              </div>
              <div v-if="!visitAll" class="person-list">
                <el-checkbox-group v-model="checkedPerson">
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
                  <div class="flex" style="width: 100%">
                    <div>{{ node.label }}</div>
                  </div>
                </div>
              </el-tree>
              <div class="flex mt-10">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</el-checkbox>
                共选择{{ checkedPerson.length }}人
              </div>
              <div align="center" class="mt-10">
                <el-button>确认</el-button>
              </div>
            </div>
            <el-link :underline="false" slot="reference">
              部门 <i class="el-icon-arrow-down fz-10"></i>
            </el-link>
          </el-popover>
        </el-table-column>

        <el-table-column align="center" prop="k2" width="90">
          <!--人员弹窗-->
          <el-popover
                  slot="header"
                  placement="bottom"
                  width="150"
                  trigger="click">
            <div class="popover-box">
              <div class="fz-16">选择成员</div>
              <el-input v-model="searchKey" placeholder="搜索" size="mini" class="mt-10">
                <i slot="prefix" class="el-input__icon el-icon-search" />
              </el-input>
              <div class="filter">
                <el-button round size="mini" :type="visitAll ? 'primary' : ''" @click="visitAll = true">全部</el-button>
                <el-divider direction="vertical" />
                <el-button round :type="!visitAll ? 'primary' : ''" @click="visitAll = false">按部门显示</el-button>
              </div>
              <div v-if="visitAll" class="person-list">
                <el-checkbox-group v-model="checkedPerson">
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
                  <div class="flex" style="width: 100%">
                    <div>{{ node.label }}</div>
                  </div>
                </div>
              </el-tree>
              <div class="flex mt-10">
                <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate">全选</el-checkbox>
                共选择{{ checkedPerson.length }}人
              </div>
              <div align="center" class="mt-10">
                <el-button>确认</el-button>
              </div>
            </div>
            <el-link :underline="false" slot="reference">
              上报人 <i class="el-icon-arrow-down fz-10"></i>
            </el-link>
          </el-popover>
        </el-table-column>

        <el-table-column align="center" prop="k4" label="上报地点"></el-table-column>
        <el-table-column align="center" prop="k5" label="上报时间"></el-table-column>
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
  </div>
</template>

<script>
  export default {
    name: 'track-record',
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
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
          {'k1':  '部门名称', 'k2':  '成员名称', 'k3':  '围栏名称', 'k4':  '云南省昆明市五华区北门街', 'k5':  '2019年12月1日', 'k6':  '已完成/未完成', 'k7':  '99', 'k8':  '99', 'k9':  '文档'},
        ],
        searchKey: '',
        value:  '',
        checked: '',
        visibleInfo: false,
        visiblePopover: false,
        viewType: 1,
        visitAll: true,
        checkedPerson: ['1', '2'],
        data: JSON.parse(JSON.stringify(data)),
        members: personOptions,
        checkAll: false,
        isIndeterminate: true
      }
    },
    mounted() {
    },
    methods: {
      handleChangeMode(type) {
        this.viewType = type
        this.visiblePopover = false
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      toDetail() {
        console.log(23423423)
        this.$router.push({name: 'task-details'})
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
  .track-record{
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
    .el-button {
      padding: 4px 8px!important;
    }
    .el-divider--horizontal {
      margin: 13px 0!important;
    }
    .el-divider--vertical {
      height: 3em;
    }
  }
  .el-table, .el-table__expanded-cell {
    background-color: rgba(0,0,0,0)!important;
  }
  .el-table th, .el-table tr {
    background-color: rgba(0,0,0,0)!important;
  }
</style>

<style scoped lang="scss">
  .track-record {
    .data-type {
      margin: 10px 0 20px 0;
      display: flex;
      .type-item {
        color: #ADB1C9;
        line-height: 18px;
        padding-left: 25px;
        position: relative;
        margin-right: 20px;
        &:before {
          content: '';
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #5F5F5F;
          position: absolute;
          left: 0px;
        }
      }
      .type-item:nth-of-type(1) {
        &:before {
          background: #4F4DA5
        }
      }
      .type-item:nth-of-type(2) {
        &:before {
          background: #6A73CA
        }
      }
      .type-item:nth-of-type(3) {
        &:before {
          background: #6ED0F6
        }
      }

    }
    .filter-content {
      display: flex;
      align-items: center;
      margin: 10px 0;
      justify-content: space-between;
    }
    .video-box {
      overflow: hidden;
      width: 100%;
      .video-item {
        /*width: 15%;*/
        min-width: 135px;
        padding: 10px;
        text-align: center;
        float: left;
        cursor: pointer;
        .remarks {
          color: #606266;
        }
      }
    }
    .record-info {
      .text {
        line-height: 24px;
      }
    }
    .pic-list {
      display: flex;
      flex-wrap: wrap;
      .pic-item {
        width: 25%;
        .wrap {
          text-align: center;
          padding: 10px 5px;
          box-sizing: border-box;
          width: 100%;
          .pic {
            margin: 0 auto;
            background: #ccc;
            border-radius: 4px;
            width: 100px;
            height: 50px;
          }
          .text {
            line-height: 20px;
          }
        }
      }

    }
  }
</style>
