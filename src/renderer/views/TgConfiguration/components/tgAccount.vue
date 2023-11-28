<template>
  <div class="h-full flex flex-col gap-10px">
    <TgButton class="w-full" icon-name="add" @handle-btn="emit('handleBtn')">{{
      btnName
    }}</TgButton>
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
          :label="type === 'user' ? item.chatId : item.channelName"
        />
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryAllGroup, queryAllUser } from '@/apis'
import { GroupRes } from '@/apis/types'
import Checkbox from '@/components/checkbox/index.vue'
import TgButton from '@/components/tgButton/index.vue'

const props = defineProps<{
  type: 'user' | 'group'
  btnName: string
  selectList: string[]
  chatId?: string[]
}>()

const emit = defineEmits<{
  handleBtn: []
  'update:modelValue'
}>()

const selectList = useVModel(props, 'selectList', emit)

onMounted(() => {
  getAllUser()
})

const checkAll = ref(false)
const isIndeterminate = ref(false)
const userList = ref<GroupRes[]>([])

const handleCheckAllChange = (v: boolean) => {
  selectList.value = v ? userList.value.map((v) => v.chatId) : []
}

const getAllUser = async () => {
  switch (props.type) {
    case 'user':
      queryAllUser().then((res) => {
        userList.value = res.data
      })
      break
    case 'group':
      if (props.chatId?.length === 0) return
      queryAllGroup((props.chatId as string[])[(props.chatId as string[]).length - 1]).then(
        (res) => {
          userList.value = res.data
        }
      )
      break

    default:
      break
  }
}

defineExpose({
  getAllUser
})
</script>

<style scoped></style>
