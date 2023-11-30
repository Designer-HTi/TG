<template>
  <div class="h-full flex">
    <TgColumSlot class="flex-1/5" @handle-btn="delAccount">
      <TgAccount v-model:chatId="chatId" @handle-btn="addAccount" />
    </TgColumSlot>
    <TgColumSlot class="flex-1/5" title="TG群列表" @handle-btn="delGroup">
      <TgGroup
        ref="groupRef"
        v-model:selectList="selectGroup"
        :chat-id="chatId"
        @handle-btn="addTgGroup"
      />
    </TgColumSlot>
    <TgColumSlot class="flex-3/5" title="监测关键词" @handle-btn="handleBtn">
      <KeyWordTable />
      <template #footer>
        <TgButton class="w-full" icon-name="add" @handle-btn="addKeyWord">
          为所选栏目添加监测关键词
        </TgButton>
        <TgButton class="w-full" icon-name="add" @handle-btn="handleBtn">
          删除所选栏目关键词
        </TgButton>
      </template>
    </TgColumSlot>
  </div>
</template>

<script setup lang="ts">
import { ADD_DIALOG } from '@/components/dialog'
import TgButton from '@/components/tgButton/index.vue'
import TgColumSlot from '@/components/tgColumnSlot/index.vue'
import AddTgAccount from './components/AddTgAccount.vue'
import TgGroup from './components/tgGroup.vue'
import AddTgGroup from './components/AddTgGroup.vue'
import AddTgKeyWord from './components/AddTgKeyWord.vue'
import KeyWordTable from './components/keyWordTable.vue'
import TgAccount from './components/tgAccount.vue'
import { deleteChannel } from '@/apis'
import { ElMessageBox } from 'element-plus'

const chatId = ref('')
const delAccount = async () => {
  ElMessageBox.confirm('删除所选账户?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await deleteChannel({
      chatId: chatId.value
    })
    ElMessage.success('删除成功')
  })
}

const selectGroup = ref<string[]>([])
const groupRef = ref<InstanceType<typeof TgAccount>>()
const delGroup = async () => {
  ElMessageBox.confirm('删除所选群组?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    await deleteChannel({
      channelId: selectGroup.value
    })
    ElMessage.success('删除成功')
  })
}

const addDialog = inject(ADD_DIALOG)
// 添加TG账户
const addAccount = () => {
  addDialog?.({
    title: '添加TG账户',
    width: '657px',
    component: shallowRef(AddTgAccount)
  })
}
// 添加TG账户
const addTgGroup = () => {
  addDialog?.({
    title: '添加TG群',
    width: '657px',
    component: shallowRef(AddTgGroup)
  })
}
//添加TG关键词
const addKeyWord = () => {
  addDialog?.({
    title: '添加TG群',
    width: '657px',
    component: shallowRef(AddTgKeyWord)
  })
}

const handleBtn = () => {
  console.log(111)
}
</script>

<style scoped lang="less"></style>
