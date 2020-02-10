<!--page: 任务模板库-->
<template>
  <div class="task-template-library page">
    <el-card class="main-1-card">
      <div slot="header">
        <span class="fz-16">任务模板库</span>
      </div>
      <el-input
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="remarks fz-10 mt-5" style="line-height: 16px">勾选任务模板库中的任务将其指派给成员，或批量删除</div>
      <div class="check-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="check-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">xxxxx（任务名称）</div>
            </div>
            <div class="flex">
              <el-link :underline="false" @click="visibleInfo = true">
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
        <el-button round style="padding: 5px 8px">任务指派</el-button>
        <el-button round style="padding: 5px 8px">批量删除</el-button>
      </div>
    </el-card>

    <!--修改任务信息-->
    <el-card class="main-2-card info-card" v-if="visibleInfo">
      <div class="fz-16" slot="header">
        修改任务信息
        <el-button class="close-btn" type="text" @click="visibleInfo = false"><i class="el-icon-close" /></el-button>
      </div>
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
                <el-form-item label="任务属性">
                  <el-select :value="searchKey">
                    <el-option label="1" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="任务说明">
                  <el-input type="textarea" :rows="6" placeholder="任务详情"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <div class="flex mt-25" style="justify-content: left">
              <el-form-item label="任务标签" style="margin-right: 30px">
                <el-link :underline="false" @click="visibleTag = true">
                  <i class="el-icon-circle-plus-outline fz-16"></i>
                  添加任务标签
                </el-link>
                <br>
                <el-tag>已添加的任务标签</el-tag>
              </el-form-item>
              <el-form-item label="任务区域" style="margin-right: 30px">
                <el-link :underline="false" @click="visibleArea = true">
                  <i class="el-icon-circle-plus-outline fz-16"></i>
                  添加任务区域
                </el-link>
                <br>
                <el-tag>已添加的任务区域</el-tag>
              </el-form-item>
              <el-form-item label="任务围栏" style="margin-right: 30px">
                <el-link :underline="false" @click="visibleEnclosure = true">
                  <i class="el-icon-circle-plus-outline fz-16"></i>
                  添加任务围栏
                </el-link>
                <br>
                <el-tag>已添加的任务围栏</el-tag>
              </el-form-item>
            </div>
            <div class="mt-20">
              <el-form-item>
                <div slot="label">
                  <el-link :underline="false" @click="visibleRequirement = true">
                    <i class="el-icon-circle-plus-outline fz-16"></i>
                    <span style="color: #2D6BCE">添加最低任务要求</span>
                  </el-link>
                </div>
                <div class="tag-list">
                  <div class="tag-item" v-for="(i, j) in 6" :key="j + 't'">
                    <el-tag>xxxx(任务要求名称)</el-tag>
                    <el-link :underline="false" class="option-btn">编辑</el-link>
                    <el-link :underline="false" class="option-btn">删除</el-link>
                  </div>
                </div>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="footer">
          <el-button>取消</el-button>
          <el-button type="primary">保存</el-button>
        </div>
      </div>
    </el-card>

    <!--    任务标签列表-->
    <el-dialog
            title="任务标签列表"
            :visible.sync="visibleTag"
            width="30%">
      <el-link :underline="false">
        <i class="el-icon-plus"></i>创建任务标签
      </el-link>
      <el-input
              class="mt-5"
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="check-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="check-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">xxx（任务标签）</div>
            </div>
            <div class="flex">
              <el-link :underline="false" @click="visibleInfo = true">
                <i class="el-icon-edit pointer fz-14 pl-5" />
              </el-link>
              <el-link :underline="false" type="danger">
                <i class="el-icon-delete pointer fz-14 pl-5" />
              </el-link>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visibleTag = false">确定</el-button>
      </div>
    </el-dialog>

     <!--    任务围栏列表-->
    <el-dialog
            title="任务围栏列表"
            :visible.sync="visibleEnclosure"
            width="30%">
      <el-link :underline="false">
        <i class="el-icon-plus"></i>创建任务围栏
      </el-link>
      <el-input
              class="mt-5"
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="check-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="check-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">xxx（任务围栏）</div>
            </div>
            <div class="flex">
              <el-link :underline="false" @click="visibleInfo = true">
                <i class="el-icon-edit pointer fz-14 pl-5" />
              </el-link>
              <el-link :underline="false" type="danger">
                <i class="el-icon-delete pointer fz-14 pl-5" />
              </el-link>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visibleEnclosure = false">确定</el-button>
      </div>
    </el-dialog>

     <!--    任务区域列表-->
    <el-dialog
            title="任务区域列表"
            :visible.sync="visibleArea"
            width="30%">
      <el-link :underline="false">
        <i class="el-icon-plus"></i>创建任务区域
      </el-link>
      <el-input
              class="mt-5"
              v-model="searchKey"
              placeholder="搜索"
              size="mini"
      >
        <i slot="prefix" class="el-input__icon el-icon-search" />
      </el-input>
      <div class="check-list">
        <el-checkbox-group v-model="checkedPerson" @change="handleCheckedChange">
          <div v-for="(person, index) in members" :key="index + '123'" class="check-item">
            <div class="flex">
              <el-checkbox class="inlineBlock" />
              <div class="pl-5">xxx（任务区域）</div>
            </div>
            <div class="flex">
              <el-link :underline="false" @click="visibleInfo = true">
                <i class="el-icon-edit pointer fz-14 pl-5" />
              </el-link>
              <el-link :underline="false" type="danger">
                <i class="el-icon-delete pointer fz-14 pl-5" />
              </el-link>
            </div>
          </div>
        </el-checkbox-group>
      </div>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visibleTag = false">确定</el-button>
      </div>
    </el-dialog>

    <!--    任务要求列表-->
    <el-dialog
            title="添加最低任务要求"
            :visible.sync="visibleRequirement"
            width="30%"
            top="1vh">
      <el-form label-position="top">
        <el-form-item label="最低任务要求备注名">
          <el-input placeholder="输入名称"></el-input>
        </el-form-item>
        <el-form-item label="最低任务要求时间">
          <el-date-picker type="date" placeholder="选择日期" style="width: 45%"></el-date-picker>
          -
          <el-date-picker type="date" placeholder="选择日期" style="width: 45%"></el-date-picker>
        </el-form-item>
        <el-form-item label="最低任务要求动作">
          <div class="requirement-list">
            <div class="requirement-item">
              <i class="el-icon-camera re-icon"></i>
              <div class="re-content">
                <div>
                  拍照上报：
                  <el-switch v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949" style="font-size: 10px" />
                  开/关
                </div>
                <div>
                  拍照数量：
                  <el-input style="width: 50px"></el-input>
                  张/每次
                </div>
                <div class="remarks">打开后</div>
              </div>
            </div>
            <div class="requirement-item">
              <i class="el-icon-video-camera re-icon"></i>
              <div class="re-content">
                <div>
                  拍视频上报：
                  <el-switch v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949" style="font-size: 10px" />
                  开/关
                </div>
                <div>
                  视频数量：
                  <el-input style="width: 50px"></el-input>
                  个/每次
                </div>
                <div class="remarks">打开后</div>
              </div>
            </div>
            <div class="requirement-item">
              <i class="el-icon-upload2 re-icon"></i>
              <div class="re-content">
                <div>
                  文件上报：
                  <el-switch v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949" style="font-size: 10px" />
                  开/关
                </div>
                <div>
                  文件数量：
                  <el-input style="width: 50px"></el-input>
                  个/每次
                </div>
                <div class="remarks">打开后</div>
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button @click="visibleRequirement = false">完成添加</el-button>
        <el-button @click="visibleRequirement = false">继续添加</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'task-template-library',
    data() {
      const personOptions = ['1', '2', '3', '4']
      return {
        switchValue: true,
        visibleInfo: false,
        visibleTag: false,
        visibleEnclosure: false,
        visibleArea: false,
        visibleRequirement: false,
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

<style lang="scss">
.task-template-library {
  .info-card .el-card__body {
    overflow-y: scroll;
    height: calc(100% - 66px)!important;
    padding: 10px!important;
  }
  .el-form--label-top .el-form-item__label {
    padding: 0!important;
  }
  .el-form-item__label {
    font-size: 12px!important;
    color: #2D6BCE!important;
    font-weight: 400!important;
  }
  .re-content {
    .el-input__inner {
      font-size: 10px!important;
      /*width: 25px!important;*/
      height: 19px !important;
      line-height: 19px!important;
      padding: 1px!important;
    }
  }
}
</style>

<style scoped lang="scss">
  .task-template-library {
    .info-card {
      width: calc(100vw - 430px);
      .tag-list {
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 100%;
        font-size: inherit;
        color: #606266;
        background-color: #FFF;
        background-image: none;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        min-height: 50px;
        overflow: hidden;
        .tag-item {
          float: left;
          width: 33%;
          .option-btn {
            font-size: 10px;
            margin-left: 5px;
          }
        }
      }
    }
    .check-list {
      height: calc(100% - 118px);
      overflow-y: scroll;
      .check-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 5px 10px 3px;
        border-bottom: 1px dashed #D0CECE;
      }
    }
    .requirement-list {
      .requirement-item {
        background: #F6F6F6;
        padding: 5px 10px;
        margin-bottom: 5px;
        border-radius: 10px;
        display: flex;
        .re-content {
          margin-left: 10px;
          font-size: 10px;
        }
        .re-icon {
          margin-top: 5px;
          font-size: 24px;
          color: #2264CC;
        }
      }
    }

  }
</style>
