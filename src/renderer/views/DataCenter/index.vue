<template>
  <div class="dataCenter flex-col gap-5">
    <el-radio-group v-model="type">
      <el-radio-button label="1">取证数据</el-radio-button>
      <el-radio-button label="2">历史数据</el-radio-button>
    </el-radio-group>
    <div class="grow">
      <el-auto-resizer>
        <template #default="{ height, width }">
          <el-table-v2
            :columns="tableData.columns"
            :data="tableData.data"
            :width="width"
            :height="height"
          />
        </template>
      </el-auto-resizer>
    </div>
    <el-pagination
      v-model:current-page="pageData.currentPage"
      v-model:page-size="pageData.pageSize"
      :page-sizes="[10, 20, 30, 40]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="tsx">
import { CheckboxValueType, ElButton, ElCheckbox } from 'element-plus'
import { FunctionalComponent } from 'vue'

const type = ref('1')

type SelectionCellProps = {
  value: boolean
  intermediate?: boolean
  onChange: (value: CheckboxValueType) => void
}

const SelectionCell: FunctionalComponent<SelectionCellProps> = ({
  value,
  intermediate = false,
  onChange
}) => {
  return <ElCheckbox onChange={onChange} modelValue={value} indeterminate={intermediate} />
}
const tableData = reactive({
  columns: [
    {
      key: 'selection',
      width: 50,
      cellRenderer: ({ rowData }) => {
        const onChange = (value: CheckboxValueType) => (rowData.checked = value)
        return <SelectionCell value={rowData.checked} onChange={onChange} />
      },

      headerCellRenderer: () => {
        const _data = unref(tableData.data)
        const onChange = (value: CheckboxValueType) =>
          (tableData.data = _data.map((row) => {
            row.checked = value as boolean
            return row
          }))
        const allSelected = _data.every((row) => row.checked)
        const containsChecked = _data.some((row) => row.checked)

        return (
          <SelectionCell
            value={allSelected}
            intermediate={containsChecked && !allSelected}
            onChange={onChange}
          />
        )
      }
    },
    {
      key: 'id',
      dataKey: 'id',
      title: '时间',
      width: 200
    },
    {
      key: 'id',
      dataKey: 'id',
      title: '关键命中词',
      width: 200
    },
    {
      key: 'id',
      dataKey: 'id',
      title: '群名称',
      width: 200
    },
    {
      key: 'id',
      dataKey: 'id',
      title: '发送人ID',
      width: 200
    },
    {
      key: 'id',
      dataKey: 'id',
      title: '发送内容',
      width: 200
    },
    {
      key: 'operations',
      title: 'Operations',
      cellRenderer: () => (
        <>
          <ElButton link size="small" type="danger">
            删除
          </ElButton>
        </>
      ),
      width: 200,
      align: 'center'
    }
  ],
  data: [
    {
      name: '11111',
      checked: true
    }
  ]
})

const pageData = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 100
})
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style scoped>
.dataCenter {
  padding: 24px 24px 50px;
  height: 100%;
}
</style>
