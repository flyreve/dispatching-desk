<!--page: 创建任务模板-->
<template>
  <div class="create-task-template width-page">
    <div class="page-title">创建任务模板</div>
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
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
            </el-form-item>
            <el-form-item label="任务区域" style="margin-right: 30px">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务区域
              </el-link>
              <br>
              <el-tag>已添加的任务区域</el-tag>
            </el-form-item>
            <el-form-item label="任务围栏" style="margin-right: 30px">
              <el-link :underline="false">
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
                <el-link :underline="false">
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
  </div>
</template>

<script>
  export default {
    name: 'create-task-template',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .create-task-template {
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
.create-task-template{
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
</style>
