<template>
  <div class="h-full flex flex-col gap-10px">
    <TgButton class="w-full" @handle-btn="emit('handleBtn')"
      ><el-icon><Plus /></el-icon>添加群</TgButton
    >
    <div v-loading="groupLoading" class="grow h-0 overflow-y-auto">
      <Checkbox
        v-model:modelValue="checkAll"
        :indeterminate="isIndeterminate"
        label="全部"
        class="w-full"
        @change="handleCheckAllChange"
      />
      <el-checkbox-group v-model="selectList" class="w-full" @change="changeGroup">
        <Checkbox v-for="item in groupList" :key="item.chatId" class="w-full" :label="item.id">{{
          item.channelName
        }}</Checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryAllGroup } from '@/apis'
import { GroupRes } from '@/apis/types'
import Checkbox from '@/components/checkbox/index.vue'
import TgButton from '@/components/tgButton/index.vue'
import { CheckboxValueType } from 'element-plus'

const props = defineProps<{
  selectList: string[]
  chatId: string
}>()

const emit = defineEmits<{
  handleBtn: []
  'update:selectList'
}>()

const selectList = useVModel(props, 'selectList', emit)

watch(
  () => props.chatId,
  (v) => {
    if (!v) return
    selectList.value = []
    checkAll.value = false
    isIndeterminate.value = false
    getAllGroup()
  }
)

const checkAll = ref(false)
const isIndeterminate = ref(false)
const groupList = ref<GroupRes[]>([])

const handleCheckAllChange = (v: boolean) => {
  selectList.value = v ? groupList.value.map((v) => v.id) : []
  isIndeterminate.value = false
}

const changeGroup = (v: CheckboxValueType[]) => {
  if (v.length === groupList.value.length) {
    isIndeterminate.value = false
    checkAll.value = true
  } else if (v.length > 0) {
    isIndeterminate.value = true
    checkAll.value = false
  } else {
    isIndeterminate.value = false
    checkAll.value = false
  }
}

const groupLoading = ref(false)
const getAllGroup = async () => {
  groupLoading.value = true
  const res = await queryAllGroup(props.chatId)
  if (res.code === 'success') {
    groupList.value = res.data
    groupLoading.value = false
  }
}

defineExpose({
  getAllGroup
})
</script>

<style scoped></style>
