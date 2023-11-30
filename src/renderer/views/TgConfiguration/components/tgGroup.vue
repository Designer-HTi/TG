<template>
  <div class="h-full flex flex-col gap-10px">
    <TgButton class="w-full" icon-name="add" @handle-btn="emit('handleBtn')">添加群</TgButton>
    <div class="grow h-0 overflow-y-auto">
      <Checkbox
        v-model:modelValue="checkAll"
        :indeterminate="isIndeterminate"
        label="全部"
        class="w-full"
        @change="handleCheckAllChange"
      />
      <el-checkbox-group v-model="selectList" class="w-full">
        <Checkbox
          v-for="item in userList"
          :key="item.chatId"
          class="w-full"
          :label="item.channelName"
        />
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryAllGroup } from '@/apis'
import { GroupRes } from '@/apis/types'
import Checkbox from '@/components/checkbox/index.vue'
import TgButton from '@/components/tgButton/index.vue'

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
    console.log(v)

    getAllUser()
  }
)

const checkAll = ref(false)
const isIndeterminate = ref(false)
const userList = ref<GroupRes[]>([])

const handleCheckAllChange = (v: boolean) => {
  selectList.value = v ? userList.value.map((v) => v.chatId) : []
}

const getAllUser = async () => {
  queryAllGroup(props.chatId).then((res) => {
    userList.value = res.data
  })
}

defineExpose({
  getAllUser
})
</script>

<style scoped></style>
