<template>
  <div class="flex-col h-full gap-10px">
    <div class="flex justify-between head">
      <div class="flex items-center gap-2">
        <i class="icon font_family icon-add"></i>
        <span>关键词</span>
      </div>
      <div class="w-120px flex items-center justify-center gap-2">
        <i class="icon font_family icon-add"></i>
        <span>操作</span>
      </div>
    </div>
    <div class="grow">
      <el-table :data="tableData" style="width: 100%; height: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="date" label="全部" min-width="180" />
        <el-table-column label="操作" width="120" header-align="center" align="center">
          <template #default>
            <el-button link type="danger" size="small">删除</el-button>
            <el-button link type="primary" size="small">新增</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<style scoped lang="less">
.head {
  height: 32px;
  line-height: 32px;
  background: @button-fill;
  font-size: 14px;
}
</style>
