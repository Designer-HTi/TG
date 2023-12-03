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
      <el-table
        ref="tableRef"
        v-loading="tableLoading"
        :data="tableData"
        style="width: 100%; height: 100%"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="date" label="全部" min-width="180">
          <template #default="scope">
            <div class="flex flex-wrap gap-8px">
              <el-tag v-for="v in scope.row.keywords" :key="v" type="info" class="px-4px!">
                {{ v }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120" header-align="center" align="center">
          <template #default="scope">
            <el-button link type="danger" size="small" @click="delKeyword(scope.row)"
              >删除</el-button
            >
            <!-- <el-button link type="primary" size="small">新增</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryKeywords, updateKeywords } from '@/apis'
import { KeywordsRes } from '@/apis/types'
import { getAllGroupKeyword } from '@/utils'
import { ElTable } from 'element-plus'
const props = defineProps<{
  chatId: string
  selectGroup: string[]
}>()

const tableData = ref<KeywordsRes[]>([])

watch(
  () => [props.chatId, props.selectGroup],
  async () => {
    if (!props.chatId) {
      tableData.value = []
      return
    }
    await getKeywords()
  }
)

const tableLoading = ref(false)
const getKeywords = async () => {
  tableLoading.value = true
  const res = await queryKeywords({
    chatId: props.chatId,
    groupIds: props.selectGroup
  })
  if (res.code === 'success') {
    tableData.value = res.data
    tableLoading.value = false
  }
}

const delKeyword = async (row: KeywordsRes) => {
  ElMessageBox.confirm('删除所选关键词?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const res = await updateKeywords({
      chatId: props.chatId,
      keyword_data: tableData.value.filter((v) => v !== row)
    })
    if (res.code === 'success') {
      getKeywords()
      ElMessage.success('删除成功')
    }
  })
}

const tableRef = ref<InstanceType<typeof ElTable>>()
const delKeywords = async () => {
  const selectionRows = tableRef.value?.getSelectionRows() as KeywordsRes[]
  if (selectionRows.length <= 0) {
    ElMessage.warning('请选择需要删除的关键词')
    return
  }
  ElMessageBox.confirm('删除所选关键词?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    const row = tableData.value.filter((v) => !selectionRows.includes(v))
    const res = await updateKeywords({
      chatId: props.chatId,
      keyword_data: row
    })
    if (res.code === 'success') {
      getKeywords()
      ElMessage.success('删除成功')
      getAllGroupKeyword()
    }
  })
}

defineExpose({
  getKeywords,
  delKeywords
})
</script>

<style scoped lang="less">
.head {
  height: 32px;
  line-height: 32px;
  background: @button-fill;
  font-size: 14px;
}
</style>
