<!--page: 创建临时任务-->
<template>
  <div class="create-temporary-task width-page">
    <div class="page-title">创建临时任务</div>
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
            <el-form-item label="任务标签">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
            </el-form-item>
            <el-form-item label="任务标签">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
            </el-form-item>
            <el-form-item label="任务标签">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
            </el-form-item>
            <el-form-item label="任务标签">
              <el-link :underline="false">
                <i class="el-icon-circle-plus-outline fz-16"></i>
                添加任务标签
              </el-link>
              <br>
              <el-tag>已添加的任务标签</el-tag>
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
  </div>
</template>

<script>
  export default {
    name: 'create-temporary-task',
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style lang="scss">
  .create-temporary-task {
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